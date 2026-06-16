# 🏠 داشبورد هوشمند پایش محیطی ساختمان

یک سیستم کامل برای مانیتورینگ و کنترل هوشمند دما، رطوبت، نور و سیستم تهویه ساختمان با قابلیت اجرا به صورت لوکال و پردازش لبه‌ای.

## 📋 ویژگی‌ها

### ✅ امکانات اصلی
- **مانیتورینگ زنده**: نمایش لحظه‌ای دما، رطوبت و شدت نور برای هر اتاق
- **کنترل دستی و خودکار**: امکان کنترل چراغ‌ها و سیستم تهویه به صورت دستی یا هوشمند
- **شماتیک ساختمان**: نقشه گرافیکی از ساختمان با نمایش وضعیت تجهیزات
- **تم روشن/تاریک**: قابلیت تغییر تم رابط کاربری
- **هشدارهای چندکاناله**: ارسال اعلان از طریق تلگرام، ایمیل و پیامک
- **پردازش لبه‌ای**: کارکرد کامل سیستم بدون نیاز به اینترنت
- **زمان‌بندی**: برنامه‌ریزی عملیات بر اساس زمان روز

### 🏢 فضاهای تحت پوشش
- سالن پذیرایی
- آشپزخانه
- ۲ اتاق خواب
- سرویس بهداشتی
- راهروی ورودی
- راهرو

## 🛠️ زیرساخت فنی

### ارتباطات
- **MQTT**: پروتکل اصلی ارتباط بین سنسورها، سرور و داشبورد
- **WebSocket**: اتصال بلادرنگ مرورگر به broker MQTT
- **Local First**: طراحی شده برای اجرا در شبکه محلی

### پردازش منطق
- **Node-RED**: موتور اصلی پردازش قوانین و اتوماسیون
- **JavaScript**: منطق سمت کلاینت در داشبورد

### اطلاع‌رسانی
- **Telegram Bot API**: ارسال پیام به تلگرام
- **SMTP**: ارسال ایمیل
- **SMS Gateway**: ارسال پیامک (نیاز به سرویس شخص ثالث)

## 📁 ساختار فایل‌ها

```
smart-home-dashboard/
├── index.html              # رابط کاربری داشبورد
├── styles.css              # استایل‌ها و تم‌ها
├── app.js                  # منطق جاوااسکریپت داشبورد
├── node-red-flow.json      # فلوهای Node-RED
└── README.md               # این فایل
```

## 🚀 نصب و راه‌اندازی

### پیش‌نیازها

1. **Node.js** (نسخه 16 یا بالاتر)
2. **Node-RED**
3. **Mosquitto MQTT Broker**
4. **مرورگر وب مدرن**

### مرحله ۱: نصب MQTT Broker

```bash
# Ubuntu/Debian
sudo apt-get install mosquitto mosquitto-clients

# شروع سرویس
sudo systemctl start mosquitto
sudo systemctl enable mosquitto

# فعال‌سازی WebSocket (ویرایش /etc/mosquitto/conf.d/websocket.conf)
listener 9001
protocol websockets
```

### مرحله ۲: نصب Node-RED

```bash
# نصب سراسری
npm install -g node-red

# یا استفاده از Docker
docker run -it -p 1880:1880 nodered/node-red
```

### مرحله ۳: وارد کردن فلوهای Node-RED

1. Node-RED را باز کنید (http://localhost:1880)
2. از منوی همبرگری → Import
3. محتوای فایل `node-red-flow.json` را کپی و وارد کنید
4. Deploy کنید

### مرحله ۴: پیکربندی اطلاع‌رسانی

#### تلگرام
1. بات تلگرام بسازید (@BotFather)
2. توکن بات را در Node-RED ذخیره کنید:
```javascript
global.set('telegramBotToken', 'YOUR_BOT_TOKEN');
global.set('telegramChatId', 'YOUR_CHAT_ID');
```

#### ایمیل
1. در Node-RED node ایمیل را پیکربندی کنید
2. تنظیمات SMTP را وارد کنید

### مرحله ۵: اجرای داشبورد

```bash
# روش ۱: سرور ساده HTTP
cd smart-home-dashboard
python3 -m http.server 8080

# روش ۲: استفاده از Node.js http-server
npx http-server -p 8080

# روش ۳: سرویس‌دهی از طریق Node-RED
# یک endpoint HTTP در Node-RED ایجاد کنید
```

سپس مرورگر را باز کرده و به آدرس `http://localhost:8080` بروید.

## 📡 موضوعات MQTT

### سنسورها → سرور
```
home/sensors/temperature    # دما
home/sensors/humidity       # رطوبت
home/sensors/light          # شدت نور
```

### سرور → تجهیزات
```
home/control/light          # کنترل روشنایی
home/control/hvac           # کنترل تهویه
```

### سرور → داشبورد
```
home/status                 # وضعیت تجهیزات
home/alerts                 # هشدارها
```

### فرمت پیام‌ها

#### دما/رطوبت/نور
```json
{
  "room": "living",
  "value": 24.5,
  "timestamp": 1234567890
}
```

#### کنترل روشنایی
```json
{
  "room": "living",
  "device": "light",
  "state": true,
  "brightness": 80,
  "manual": true
}
```

#### کنترل تهویه
```json
{
  "room": "living",
  "device": "hvac",
  "state": true,
  "temperature": 24,
  "mode": "cool"
}
```

## 🔧 شبیه‌سازی سنسورها

برای تست سیستم بدون سخت‌افزار واقعی:

```bash
# نصب کلاینت MQTT
sudo apt-get install mosquitto-clients

# ارسال داده دما
mosquitto_pub -t "home/sensors/temperature" \
  -m '{"room":"living","value":28.5}'

# ارسال داده رطوبت
mosquitto_pub -t "home/sensors/humidity" \
  -m '{"room":"living","value":65}'

# ارسال داده نور
mosquitto_pub -t "home/sensors/light" \
  -m '{"room":"living","value":250}'
```

## 🌐 حالت آفلاین

سیستم به گونه‌ای طراحی شده که در صورت قطع اینترنت:

1. ✅ ارتباطات محلی MQTT ادامه می‌یابد
2. ✅ پردازش Node-RED به کار خود ادامه می‌دهد
3. ✅ داشبورد همچنان قابل دسترسی است
4. ✅ داده‌ها به صورت محلی ذخیره می‌شوند
5. ⚠️ فقط اطلاع‌رسانی‌های خارجی (تلگرام، ایمیل) متوقف می‌شوند

### بازیابی پس از اتصال مجدد

پیام‌های ذخیره شده به صورت خودکار هنگام بازگشت اتصال ارسال می‌شوند.

## 🎨 شخصی‌سازی

### تغییر آستانه هشدارها

در `app.js`:
```javascript
alertThresholds: {
    tempHigh: 30,      // دمای بالا
    tempLow: 15,       // دمای پایین
    humidityHigh: 70,  // رطوبت بالا
    lightMin: 300      // حداقل نور
}
```

### اضافه کردن اتاق جدید

1. در `index.html` بخش شماتیک، اتاق جدید را اضافه کنید
2. در `app.js` نام اتاق را به آرایه `rooms` اضافه کنید
3. در Node-RED فلوهای مربوطه را کپی کنید

### تغییر تم رنگی

در `styles.css` متغیرهای CSS را ویرایش کنید:
```css
:root {
    --primary-color: #2196F3;
    --secondary-color: #FF5722;
    /* ... */
}
```

## 🔐 امنیت

### توصیه‌ها

1. **MQTT Authentication**: احراز هویت را در Mosquitto فعال کنید
2. **HTTPS**: برای دسترسی از راه دور از HTTPS استفاده کنید
3. **Firewall**: پورت‌ها را محدود کنید
4. **API Keys**: توکن‌ها را در متغیرهای محیطی ذخیره کنید

### نمونه پیکربندی Mosquitto با احراز هویت

```conf
# /etc/mosquitto/conf.d/auth.conf
allow_anonymous false
password_file /etc/mosquitto/passwd
acl_file /etc/mosquitto/acl
```

## 📊 یکپارچه‌سازی با n8n

برای اتوماسیون پیشرفته‌تر می‌توانید از n8n استفاده کنید:

1. نصب n8n:
```bash
npm install -g n8n
n8n start
```

2. ایجاد workflow جدید با triggerهای MQTT
3. اتصال به سرویس‌های مختلف (Google Sheets, Notion, etc.)

## 🐛 عیب‌یابی

### مشکل: اتصال MQTT برقرار نمی‌شود
```bash
# بررسی وضعیت Mosquitto
sudo systemctl status mosquitto

# بررسی لاگ‌ها
sudo tail -f /var/log/mosquitto/mosquitto.log

# تست اتصال
mosquitto_sub -t "#" -v
```

### مشکل: Node-RED فلوها اجرا نمی‌شوند
- مطمئن شوید nodeهای مورد نیاز نصب هستند
- لاگ‌های Node-RED را بررسی کنید
- فلوها را مجدداً deploy کنید

### مشکل: داشبورد داده دریافت نمی‌کند
- کنسول مرورگر را بررسی کنید
- اتصال WebSocket را تست کنید
- مطمئن شوید MQTT Broker در حال اجراست

## 📈 توسعه آینده

- [ ] پشتیبانی از سنسورهای بیشتر (CO2، حرکت، درب/پنجره)
- [ ] تحلیل تاریخی داده‌ها با نمودار
- [ ] یادگیری الگوهای مصرف و بهینه‌سازی خودکار
- [ ] اپلیکیشن موبایل
- [ ] یکپارچه‌سازی با دستیارهای صوتی

## 📄 مجوز

این پروژه تحت مجوز MIT منتشر شده است.

## 👥 مشارکت

از ایده‌ها و贡献‌های شما استقبال می‌کنیم!

---

**طراحی شده با ❤️ برای خانه‌های هوشمند ایرانی**
