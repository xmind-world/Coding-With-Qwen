// Smart Home Dashboard - Main Application Script
// Designed for MQTT + Node-RED integration with local edge processing

class SmartHomeDashboard {
    constructor() {
        // Configuration
        this.config = {
            mqttBroker: 'ws://localhost:9001', // WebSocket MQTT broker
            mqttTopics: {
                sensors: {
                    temperature: 'home/sensors/temperature',
                    humidity: 'home/sensors/humidity',
                    light: 'home/sensors/light'
                },
                control: {
                    light: 'home/control/light',
                    hvac: 'home/control/hvac'
                },
                status: 'home/status',
                alerts: 'home/alerts'
            },
            rooms: ['living', 'kitchen', 'bedroom1', 'bedroom2', 'bathroom', 'entrance', 'corridor'],
            updateInterval: 2000, // 2 seconds
            alertThresholds: {
                tempHigh: 30,
                tempLow: 15,
                humidityHigh: 70,
                lightMin: 300
            }
        };

        // State
        this.state = {
            sensors: {
                temperature: {},
                humidity: {},
                light: {}
            },
            controls: {
                lights: {},
                hvac: {}
            },
            mqttConnected: false,
            internetConnected: true,
            theme: 'light',
            autoMode: {
                light: true,
                hvac: true,
                energySaving: false
            }
        };

        // Initialize
        this.init();
    }

    init() {
        this.setupThemeToggle();
        this.setupTabNavigation();
        this.setupControlListeners();
        this.setupRoomSelectors();
        this.initializeMockData();
        this.connectMQTT();
        this.startAutoUpdate();
        this.checkInternetConnection();
        this.updateLastUpdateTime();
        
        console.log('✅ داشبورد هوشمند راه‌اندازی شد');
    }

    // Theme Management
    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        // Load saved theme
        const savedTheme = localStorage.getItem('dashboard-theme');
        if (savedTheme === 'dark') {
            this.setTheme('dark');
        }
    }

    toggleTheme() {
        const body = document.body;
        const icon = document.querySelector('#theme-toggle .icon');
        
        if (body.classList.contains('light-theme')) {
            this.setTheme('dark');
            icon.textContent = '☀️';
            localStorage.setItem('dashboard-theme', 'dark');
        } else {
            this.setTheme('light');
            icon.textContent = '🌙';
            localStorage.setItem('dashboard-theme', 'light');
        }
    }

    setTheme(theme) {
        const body = document.body;
        body.classList.remove('light-theme', 'dark-theme');
        body.classList.add(`${theme}-theme`);
        this.state.theme = theme;
    }

    // Tab Navigation
    setupTabNavigation() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.dataset.tab;

                // Update buttons
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update content
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === `${targetTab}-tab`) {
                        content.classList.add('active');
                    }
                });
            });
        });
    }

    // Control Listeners
    setupControlListeners() {
        // Light controls
        this.config.rooms.forEach(room => {
            const lightToggle = document.getElementById(`light-${room}`);
            const slider = lightToggle?.closest('.room-control-item')?.querySelector('.slider');
            const sliderValue = lightToggle?.closest('.room-control-item')?.querySelector('.slider-value');

            if (lightToggle) {
                lightToggle.addEventListener('change', (e) => {
                    this.sendLightCommand(room, e.target.checked, slider?.value || 100);
                    this.updateSchematicLight(room, e.target.checked);
                });
            }

            if (slider) {
                slider.addEventListener('input', (e) => {
                    if (sliderValue) {
                        sliderValue.textContent = `${e.target.value}%`;
                    }
                    if (lightToggle?.checked) {
                        this.sendLightCommand(room, true, e.target.value);
                    }
                });
            }

            // HVAC controls
            const hvacToggle = document.getElementById(`hvac-${room}`);
            const tempMinus = hvacToggle?.closest('.room-control-item')?.querySelector('.temp-btn.minus');
            const tempPlus = hvacToggle?.closest('.room-control-item')?.querySelector('.temp-btn.plus');
            const tempValue = hvacToggle?.closest('.room-control-item')?.querySelector('.temp-set-value');
            const hvacMode = hvacToggle?.closest('.room-control-item')?.querySelector('.hvac-mode select');

            if (hvacToggle) {
                hvacToggle.addEventListener('change', (e) => {
                    this.sendHVACCommand(room, e.target.checked);
                    this.updateSchematicHVAC(room, e.target.checked);
                });
            }

            if (tempMinus && tempPlus && tempValue) {
                tempMinus.addEventListener('click', () => {
                    let current = parseInt(tempValue.textContent);
                    if (current > 16) {
                        tempValue.textContent = `${current - 1}°C`;
                        this.sendHVACCommand(room, true, current - 1);
                    }
                });

                tempPlus.addEventListener('click', () => {
                    let current = parseInt(tempValue.textContent);
                    if (current < 30) {
                        tempValue.textContent = `${current + 1}°C`;
                        this.sendHVACCommand(room, true, current + 1);
                    }
                });
            }

            if (hvacMode) {
                hvacMode.addEventListener('change', (e) => {
                    this.sendHVACCommand(room, hvacToggle?.checked || false, null, e.target.value);
                });
            }
        });

        // Auto mode toggles
        const autoLightToggle = document.getElementById('auto-light');
        const autoHVACToggle = document.getElementById('auto-hvac');
        const energySavingToggle = document.getElementById('energy-saving');

        if (autoLightToggle) {
            autoLightToggle.addEventListener('change', (e) => {
                this.state.autoMode.light = e.target.checked;
            });
        }

        if (autoHVACToggle) {
            autoHVACToggle.addEventListener('change', (e) => {
                this.state.autoMode.hvac = e.target.checked;
            });
        }

        if (energySavingToggle) {
            energySavingToggle.addEventListener('change', (e) => {
                this.state.autoMode.energySaving = e.target.checked;
            });
        }
    }

    // Room Selectors for Sensor Display
    setupRoomSelectors() {
        const selectors = [
            document.getElementById('temp-room-select'),
            document.getElementById('humidity-room-select'),
            document.getElementById('light-room-select')
        ];

        selectors.forEach(selector => {
            if (selector) {
                selector.addEventListener('change', (e) => {
                    const room = e.target.value;
                    const type = selector.id.includes('temp') ? 'temperature' : 
                                selector.id.includes('humidity') ? 'humidity' : 'light';
                    this.updateSensorDisplay(type, room);
                });
            }
        });
    }

    // MQTT Connection
    connectMQTT() {
        // Check if Paho MQTT library is available
        if (typeof Paho !== 'undefined') {
            this.mqttClient = new Paho.Client(
                this.config.mqttBroker,
                `client_${Date.now()}`
            );

            this.mqttClient.onConnectionLost = (responseObject) => {
                if (responseObject.errorCode !== 0) {
                    console.log('❌ اتصال MQTT قطع شد:', responseObject.errorMessage);
                    this.updateConnectionStatus(false);
                }
            };

            this.mqttClient.onMessageArrived = (message) => {
                this.handleMQTTMessage(message.destinationName, message.payloadString);
            };

            this.mqttClient.connect({
                onSuccess: () => {
                    console.log('✅ متصل به MQTT');
                    this.updateConnectionStatus(true);
                    
                    // Subscribe to topics
                    Object.values(this.config.mqttTopics.sensors).forEach(topic => {
                        this.mqttClient.subscribe(topic);
                    });
                    this.mqttClient.subscribe(this.config.mqttTopics.status);
                },
                onFailure: (error) => {
                    console.log('❌ خطا در اتصال به MQTT:', error.errorMessage);
                    this.updateConnectionStatus(false);
                },
                useSSL: false,
                keepAliveInterval: 30
            });
        } else {
            console.log('⚠️ کتابخانه Paho MQTT یافت نشد. استفاده از حالت آفلاین.');
            this.updateConnectionStatus(false);
        }
    }

    handleMQTTMessage(topic, payload) {
        try {
            const data = JSON.parse(payload);
            
            if (topic.includes('temperature')) {
                this.updateSensorData('temperature', data.room, data.value);
            } else if (topic.includes('humidity')) {
                this.updateSensorData('humidity', data.room, data.value);
            } else if (topic.includes('light')) {
                this.updateSensorData('light', data.room, data.value);
            } else if (topic === this.config.mqttTopics.status) {
                this.updateDeviceStatus(data);
            } else if (topic === this.config.mqttTopics.alerts) {
                this.showAlert(data);
            }
        } catch (error) {
            console.error('خطا در پردازش پیام MQTT:', error);
        }
    }

    sendMQTTMessage(topic, message) {
        if (this.state.mqttConnected && this.mqttClient) {
            const mqttMsg = new Paho.Message(JSON.stringify(message));
            mqttMsg.destinationName = topic;
            this.mqttClient.send(mqttMsg);
        } else {
            console.log('📝 ارسال محلی (بدون MQTT):', topic, message);
            // Store locally for when connection is restored
            this.storeLocalMessage(topic, message);
        }
    }

    // Control Commands
    sendLightCommand(room, state, brightness = 100) {
        const command = {
            room: room,
            device: 'light',
            state: state,
            brightness: brightness,
            timestamp: Date.now(),
            manual: !this.state.autoMode.light
        };

        this.sendMQTTMessage(this.config.mqttTopics.control.light, command);
        
        // Update local state
        this.state.controls.lights[room] = { state, brightness };
    }

    sendHVACCommand(room, state, temperature = null, mode = 'auto') {
        const command = {
            room: room,
            device: 'hvac',
            state: state,
            temperature: temperature,
            mode: mode,
            timestamp: Date.now(),
            manual: !this.state.autoMode.hvac
        };

        this.sendMQTTMessage(this.config.mqttTopics.control.hvac, command);
        
        // Update local state
        this.state.controls.hvac[room] = { state, temperature, mode };
    }

    // Sensor Data Updates
    updateSensorData(type, room, value) {
        this.state.sensors[type][room] = {
            value: value,
            timestamp: Date.now()
        };

        // Update display if this room is selected
        const selector = document.getElementById(`${type === 'temperature' ? 'temp' : type === 'humidity' ? 'humidity' : 'light'}-room-select`);
        if (selector && selector.value === room) {
            this.updateSensorDisplay(type, room);
        }

        // Check thresholds and trigger alerts
        this.checkAlertThresholds(type, room, value);

        // Update comfort index
        this.updateComfortIndex();
    }

    updateSensorDisplay(type, room) {
        const data = this.state.sensors[type][room];
        if (!data) return;

        const valueElement = document.getElementById(`${type === 'temperature' ? 'temp' : type === 'humidity' ? 'humidity' : 'light'}-value`);
        const gaugeElement = document.getElementById(`${type}-gauge`);

        if (valueElement) {
            valueElement.textContent = data.value.toFixed ? data.value.toFixed(1) : data.value;
        }

        if (gaugeElement) {
            const maxValue = type === 'temperature' ? 40 : type === 'humidity' ? 100 : 1000;
            const percentage = (data.value / maxValue) * 100;
            const dashoffset = 110 - (percentage / 100) * 110;
            gaugeElement.style.strokeDashoffset = dashoffset;
        }

        // Update trend indicator
        this.updateTrendIndicator(type, room);
    }

    updateTrendIndicator(type, room) {
        // Simple trend detection based on recent values
        // In production, this would analyze historical data
        const trends = ['➡️', '⬆️', '⬇️'];
        const trendTexts = ['پایدار', 'در حال افزایش', 'در حال کاهش'];
        const randomIndex = Math.floor(Math.random() * 3);

        const card = document.querySelector(`.${type}-intensity`);
        if (card) {
            const arrow = card.querySelector('.trend-arrow');
            const text = card.querySelector('.trend-text');
            if (arrow) arrow.textContent = trends[randomIndex];
            if (text) text.textContent = trendTexts[randomIndex];
        }
    }

    // Device Status Updates
    updateDeviceStatus(statusData) {
        // Update schematic indicators
        if (statusData.lights) {
            Object.entries(statusData.lights).forEach(([room, state]) => {
                this.updateSchematicLight(room, state);
            });
        }

        if (statusData.hvac) {
            Object.entries(statusData.hvac).forEach(([room, state]) => {
                this.updateSchematicHVAC(room, state);
            });
        }
    }

    updateSchematicLight(room, isOn) {
        const indicators = document.querySelectorAll(`.light-indicator[data-room="${room}"]`);
        indicators.forEach(indicator => {
            indicator.setAttribute('fill', isOn ? '#4CAF50' : '#9E9E9E');
        });
    }

    updateSchematicHVAC(room, isOn) {
        const indicators = document.querySelectorAll(`.hvac-indicator[data-room="${room}"]`);
        indicators.forEach(indicator => {
            indicator.setAttribute('fill', isOn ? '#2196F3' : '#9E9E9E');
        });
    }

    // Alert System
    checkAlertThresholds(type, room, value) {
        const thresholds = this.config.alertThresholds;
        let alert = null;

        if (type === 'temperature') {
            if (value >= thresholds.tempHigh) {
                alert = { type: 'warning', message: `دمای ${this.getRoomName(room)} به ${value} درجه رسید` };
            } else if (value <= thresholds.tempLow) {
                alert = { type: 'info', message: `دمای ${this.getRoomName(room)} به ${value} درجه کاهش یافت` };
            }
        } else if (type === 'humidity') {
            if (value >= thresholds.humidityHigh) {
                alert = { type: 'warning', message: `رطوبت ${this.getRoomName(room)} به ${value}% رسید` };
            }
        } else if (type === 'light') {
            if (value <= thresholds.lightMin && this.state.autoMode.light) {
                alert = { type: 'info', message: `نور ${this.getRoomName(room)} کم است - روشنایی خودکار فعال شد` };
            }
        }

        if (alert) {
            this.showAlert(alert);
            this.sendNotification(alert);
        }
    }

    showAlert(alert) {
        const alertsLog = document.querySelector('.alerts-log');
        if (!alertsLog) return;

        const alertItem = document.createElement('div');
        alertItem.className = `alert-log-item ${alert.type}`;
        
        const time = new Date().toLocaleTimeString('fa-IR');
        alertItem.innerHTML = `
            <span class="alert-time">${time}</span>
            <span class="alert-message">${alert.message}</span>
        `;

        alertsLog.insertBefore(alertItem, alertsLog.firstChild);

        // Keep only last 20 alerts
        while (alertsLog.children.length > 20) {
            alertsLog.removeChild(alertsLog.lastChild);
        }
    }

    sendNotification(alert) {
        // Check notification preferences
        const smsEnabled = document.getElementById('sms-alerts')?.checked;
        const emailEnabled = document.getElementById('email-alerts')?.checked;
        const telegramEnabled = document.getElementById('telegram-alerts')?.checked;

        const notification = {
            alert: alert,
            channels: {
                sms: smsEnabled,
                email: emailEnabled,
                telegram: telegramEnabled
            },
            timestamp: Date.now()
        };

        // Send via MQTT to Node-RED for processing
        this.sendMQTTMessage(this.config.mqttTopics.alerts, notification);

        // Also show browser notification if supported
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('هشدار سیستم هوشمند', {
                body: alert.message,
                icon: '/icon.png'
            });
        }
    }

    // Comfort Index Calculation
    updateComfortIndex() {
        // Calculate based on temperature, humidity, and light
        const tempValues = Object.values(this.state.sensors.temperature);
        const humidityValues = Object.values(this.state.sensors.humidity);
        const lightValues = Object.values(this.state.sensors.light);

        if (tempValues.length === 0) return;

        const avgTemp = tempValues.reduce((sum, v) => sum + v.value, 0) / tempValues.length;
        const avgHumidity = humidityValues.length > 0 ? 
            humidityValues.reduce((sum, v) => sum + v.value, 0) / humidityValues.length : 50;
        const avgLight = lightValues.length > 0 ? 
            lightValues.reduce((sum, v) => sum + v.value, 0) / lightValues.length : 500;

        // Comfort calculation (simplified)
        let comfortScore = 100;

        // Temperature comfort (ideal: 22-26°C)
        if (avgTemp < 22 || avgTemp > 26) {
            comfortScore -= Math.abs(avgTemp - 24) * 3;
        }

        // Humidity comfort (ideal: 40-60%)
        if (avgHumidity < 40 || avgHumidity > 60) {
            comfortScore -= Math.abs(avgHumidity - 50) * 0.5;
        }

        // Light comfort (ideal: 300-500 lux)
        if (avgLight < 300 || avgLight > 500) {
            comfortScore -= Math.abs(avgLight - 400) * 0.02;
        }

        comfortScore = Math.max(0, Math.min(100, comfortScore));

        // Update display
        const indexElement = document.getElementById('comfort-index');
        const fillElement = document.getElementById('comfort-fill');

        if (indexElement) {
            indexElement.textContent = Math.round(comfortScore);
            indexElement.className = `index-value ${comfortScore > 70 ? 'good' : comfortScore > 40 ? 'warning' : 'danger'}`;
        }

        if (fillElement) {
            fillElement.style.width = `${comfortScore}%`;
        }
    }

    // Connection Status
    updateConnectionStatus(connected) {
        this.state.mqttConnected = connected;
        
        const indicator = document.querySelector('.status-indicator');
        const statusText = document.querySelector('.status-text');

        if (indicator) {
            indicator.className = `status-indicator ${connected ? 'mqtt-connected' : 'mqtt-disconnected'}`;
        }

        if (statusText) {
            statusText.textContent = connected ? 'متصل به MQTT' : 'قطع از MQTT';
        }
    }

    checkInternetConnection() {
        const updateStatus = () => {
            const statusElement = document.getElementById('internet-status');
            const isOnline = navigator.onLine;
            
            this.state.internetConnected = isOnline;
            
            if (statusElement) {
                statusElement.textContent = isOnline ? 'متصل' : 'قطع';
                statusElement.className = `status-value ${isOnline ? 'connected' : 'disconnected'}`;
            }
        };

        window.addEventListener('online', updateStatus);
        window.addEventListener('offline', updateStatus);
        updateStatus();
    }

    updateLastUpdateTime() {
        const updateElement = document.getElementById('last-update');
        if (updateElement) {
            const now = new Date();
            updateElement.textContent = now.toLocaleTimeString('fa-IR');
        }
    }

    startAutoUpdate() {
        setInterval(() => {
            this.updateLastUpdateTime();
            
            // Simulate sensor updates in demo mode
            if (!this.state.mqttConnected) {
                this.simulateSensorUpdates();
            }
        }, this.config.updateInterval);
    }

    simulateSensorUpdates() {
        // Generate random sensor data for demo purposes
        this.config.rooms.forEach(room => {
            const baseTemp = 24 + (Math.random() - 0.5) * 4;
            const baseHumidity = 45 + (Math.random() - 0.5) * 20;
            const baseLight = 350 + (Math.random() - 0.5) * 300;

            this.updateSensorData('temperature', room, baseTemp);
            this.updateSensorData('humidity', room, baseHumidity);
            this.updateSensorData('light', room, baseLight);
        });
    }

    // Local Storage for Offline Operation
    storeLocalMessage(topic, message) {
        const pendingMessages = JSON.parse(localStorage.getItem('pending-mqtt-messages') || '[]');
        pendingMessages.push({ topic, message, timestamp: Date.now() });
        localStorage.setItem('pending-mqtt-messages', JSON.stringify(pendingMessages));

        // Keep only last 100 messages
        if (pendingMessages.length > 100) {
            pendingMessages.shift();
            localStorage.setItem('pending-mqtt-messages', JSON.stringify(pendingMessages));
        }
    }

    flushPendingMessages() {
        if (this.state.mqttConnected && this.mqttClient) {
            const pendingMessages = JSON.parse(localStorage.getItem('pending-mqtt-messages') || '[]');
            
            pendingMessages.forEach(msg => {
                this.sendMQTTMessage(msg.topic, msg.message);
            });

            localStorage.removeItem('pending-mqtt-messages');
        }
    }

    // Helper Functions
    getRoomName(roomId) {
        const names = {
            living: 'سالن پذیرایی',
            kitchen: 'آشپزخانه',
            bedroom1: 'اتاق خواب ۱',
            bedroom2: 'اتاق خواب ۲',
            bathroom: 'سرویس بهداشتی',
            entrance: 'راهروی ورودی',
            corridor: 'راهرو'
        };
        return names[roomId] || roomId;
    }

    initializeMockData() {
        // Initialize with some default values
        this.config.rooms.forEach(room => {
            this.state.sensors.temperature[room] = { value: 24.5, timestamp: Date.now() };
            this.state.sensors.humidity[room] = { value: 45, timestamp: Date.now() };
            this.state.sensors.light[room] = { value: 350, timestamp: Date.now() };
            
            this.state.controls.lights[room] = { state: true, brightness: 80 };
            this.state.controls.hvac[room] = { state: true, temperature: 24, mode: 'auto' };
        });
    }
}

// Request notification permission
if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
}

// Initialize dashboard when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new SmartHomeDashboard();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SmartHomeDashboard;
}
