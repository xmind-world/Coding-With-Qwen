/* ============================================
   TRANSLATIONS DATABASE
   ============================================ */
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'Building IoT Monitoring Systems, Automation Dashboards and MATLAB Solutions',
        'hero.subtitle': 'Helping engineers, researchers and businesses transform technical ideas into working systems.',
        'hero.cta.services': 'View Services',
        'hero.cta.contact': 'Contact Me',
        
        // Expertise Section
        'expertise.title': 'Technical Expertise',
        'expertise.subtitle': 'Specialized solutions for engineering challenges',
        'expertise.iot.title': 'IoT Systems',
        'expertise.iot.desc': 'End-to-end IoT monitoring and control systems with real-time data collection',
        'expertise.matlab.title': 'MATLAB & Simulink',
        'expertise.matlab.desc': 'Engineering simulations, data analysis and algorithm development',
        'expertise.nodered.title': 'Node-RED Solutions',
        'expertise.nodered.desc': 'Visual automation flows and integration platforms for IoT',
        'expertise.docker.title': 'Docker Deployment',
        'expertise.docker.desc': 'Containerized infrastructure for scalable IoT applications',
        'expertise.esp32.title': 'ESP32 Development',
        'expertise.esp32.desc': 'Custom firmware and sensor integration for embedded systems',
        'expertise.dataviz.title': 'Data Visualization',
        'expertise.dataviz.desc': 'Interactive dashboards and analytics for informed decision-making',
        
        // Services Section
        'services.title': 'What I Deliver',
        'services.subtitle': 'Practical solutions for real engineering problems',
        'services.badge.popular': 'Popular',
        'services.matlab.title': 'MATLAB Training & Consulting',
        'services.matlab.desc': 'From simulation to implementation - get expert guidance on MATLAB projects',
        'services.matlab.item1': 'System modeling',
        'services.matlab.item2': 'Algorithm development',
        'services.matlab.item3': 'Data analysis',
        'services.iot.title': 'IoT Monitoring Systems Design',
        'services.iot.desc': 'Complete sensor networks with real-time monitoring capabilities',
        'services.iot.item1': 'Sensor integration',
        'services.iot.item2': 'MQTT communication',
        'services.iot.item3': 'Cloud connectivity',
        'services.dashboard.title': 'Automation Dashboards Development',
        'services.dashboard.desc': 'Visual interfaces for controlling and monitoring your systems',
        'services.dashboard.item1': 'Real-time displays',
        'services.dashboard.item2': 'Control panels',
        'services.dashboard.item3': 'Alert systems',
        'services.learnMore': 'Learn More →',
        'services.viewAll': 'View All Services',
        
        // Portfolio Section
        'portfolio.title': 'Featured Projects',
        'portfolio.subtitle': 'Case studies demonstrating practical solutions',
        'tags.iot': 'IoT',
        'tags.hardware': 'Hardware',
        'tags.nodered': 'Node-RED',
        'tags.automation': 'Automation',
        'tags.matlab': 'MATLAB',
        'tags.analysis': 'Analysis',
        'portfolio.project1.title': 'ESP32 Sensor Monitoring',
        'portfolio.project1.desc': 'Wireless sensor network with real-time data transmission and cloud dashboard',
        'portfolio.project2.title': 'Node-RED Automation Dashboard',
        'portfolio.project2.desc': 'Industrial automation control system with visual flow programming',
        'portfolio.project3.title': 'MATLAB Engineering Simulations',
        'portfolio.project3.desc': 'Complex system modeling and simulation for research applications',
        'portfolio.viewDetails': 'View Details →',
        'portfolio.viewAll': 'View All Projects',
        
        // Trust Section
        'trust.projects': 'Projects Completed',
        'trust.years': 'Years Experience',
        'trust.satisfaction': 'Client Satisfaction',
        'trust.techStack': 'Technology Stack',
        'trust.downloadCV': 'Download CV',
        
        // CTA Section
        'cta.title': 'Ready to Transform Your Ideas?',
        'cta.subtitle': "Let's discuss how I can help you build practical technical solutions",
        'cta.button': 'Start a Conversation',
        
        // Footer
        'footer.tagline': 'Technical Consultant & IoT Solution Builder',
        'footer.navigation': 'Quick Links',
        'footer.connect': 'Connect',
        'footer.rights': 'All rights reserved.',
        
        // Services Page
        'services.pageTitle': 'Services',
        'services.pageSubtitle': 'Comprehensive technical solutions for engineering challenges',
        'services.full.matlab.title': 'MATLAB Training & Consulting',
        'services.full.matlab.desc': 'Expert guidance for MATLAB and Simulink projects, from academic assignments to industrial applications.',
        'services.full.iot.title': 'IoT Monitoring Systems Design',
        'services.full.iot.desc': 'Complete IoT solutions from sensor selection to cloud dashboard implementation.',
        'services.full.dashboard.title': 'Automation Dashboards Development',
        'services.full.dashboard.desc': 'Visual interfaces for controlling and monitoring your automated systems.',
        'services.full.docker.title': 'Technical Infrastructure Deployment',
        'services.full.docker.desc': 'Containerized solutions for scalable and reliable application deployment.',
        'services.full.esp32.title': 'ESP32 Development',
        'services.full.esp32.desc': 'Custom embedded solutions with WiFi, Bluetooth, and low-power capabilities.',
        'services.full.dataviz.title': 'Data Collection & Visualization',
        'services.full.dataviz.desc': 'Transform raw data into actionable insights through effective visualization.',
        'services.full.problem': 'Problem I Solve:',
        'services.full.solution': 'Solution:',
        'services.full.result': 'Expected Result:',
        'services.full.matlab.problem': 'Complex engineering problems requiring mathematical modeling, simulation, or data analysis that seem overwhelming or time-consuming.',
        'services.full.matlab.solution1': 'Custom algorithm development',
        'services.full.matlab.solution2': 'System modeling and simulation',
        'services.full.matlab.solution3': 'Data visualization and analysis',
        'services.full.matlab.solution4': 'Code optimization and debugging',
        'services.full.matlab.solution5': 'One-on-one training sessions',
        'services.full.matlab.result': 'Working MATLAB code, comprehensive documentation, and deeper understanding of your system behavior.',
        'services.full.iot.problem': 'Need to collect, monitor, and analyze data from physical environments but lack the technical expertise to build a reliable system.',
        'services.full.iot.solution1': 'Sensor selection and integration',
        'services.full.iot.solution2': 'ESP32/Arduino firmware development',
        'services.full.iot.solution3': 'MQTT communication setup',
        'services.full.iot.solution4': 'Cloud platform integration',
        'services.full.iot.solution5': 'Real-time monitoring dashboards',
        'services.full.iot.result': 'Fully functional IoT system with real-time data collection, remote monitoring capabilities, and actionable insights.',
        'services.full.dashboard.problem': 'Multiple systems operating independently without centralized control or visibility into operations.',
        'services.full.dashboard.solution1': 'Node-RED flow development',
        'services.full.dashboard.solution2': 'Custom UI/dashboard design',
        'services.full.dashboard.solution3': 'Real-time data visualization',
        'services.full.dashboard.solution4': 'Alert and notification systems',
        'services.full.dashboard.solution5': 'Integration with existing tools',
        'services.full.dashboard.result': 'Centralized control panel with real-time monitoring, automated workflows, and reduced manual intervention.',
        'services.full.docker.problem': 'Applications that work on your machine but fail in production, or systems that are difficult to scale and maintain.',
        'services.full.docker.solution1': 'Docker containerization',
        'services.full.docker.solution2': 'Docker Compose configuration',
        'services.full.docker.solution3': 'Service orchestration',
        'services.full.docker.solution4': 'Environment standardization',
        'services.full.docker.solution5': 'Deployment automation',
        'services.full.docker.result': 'Portable, scalable infrastructure that runs consistently across different environments with simplified deployment.',
        'services.full.esp32.problem': 'Need custom hardware functionality but off-the-shelf solutions do not meet your specific requirements.',
        'services.full.esp32.solution1': 'Custom firmware development',
        'services.full.esp32.solution2': 'Sensor integration',
        'services.full.esp32.solution3': 'WiFi/Bluetooth connectivity',
        'services.full.esp32.solution4': 'Low-power optimization',
        'services.full.esp32.solution5': 'OTA update implementation',
        'services.full.esp32.result': 'Reliable embedded device with custom functionality, wireless connectivity, and efficient power management.',
        'services.full.dataviz.problem': 'Large amounts of data being collected but no clear way to understand patterns or make decisions.',
        'services.full.dataviz.solution1': 'Data pipeline setup',
        'services.full.dataviz.solution2': 'Database design',
        'services.full.dataviz.solution3': 'Grafana dashboard creation',
        'services.full.dataviz.solution4': 'Custom visualization development',
        'services.full.dataviz.solution5': 'Automated reporting',
        'services.full.dataviz.result': 'Clear visual representation of your data with interactive dashboards enabling informed decision-making.',
        'process.title': 'How I Work',
        'process.subtitle': 'A structured approach to delivering results',
        'process.step1.title': 'Discovery',
        'process.step1.desc': 'Understanding your requirements, constraints, and desired outcomes through detailed discussion.',
        'process.step2.title': 'Planning',
        'process.step2.desc': 'Creating a technical roadmap with clear milestones, deliverables, and timeline.',
        'process.step3.title': 'Development',
        'process.step3.desc': 'Building the solution with regular updates and opportunities for feedback.',
        'process.step4.title': 'Delivery',
        'process.step4.desc': 'Deploying the final solution with documentation and knowledge transfer.',
        'process.step5.title': 'Support',
        'process.step5.desc': 'Ongoing assistance to ensure smooth operation and address any questions.',
        'cta.services.title': 'Ready to Start Your Project?',
        'cta.services.subtitle': "Let's discuss how I can help solve your technical challenges",
        'cta.services.button': 'Get in Touch',
        
        // Portfolio Page
        'portfolio.pageTitle': 'Portfolio',
        'portfolio.pageSubtitle': 'Real-world projects demonstrating practical solutions',
        'portfolio.filter.all': 'All',
        'portfolio.filter.iot': 'IoT',
        'portfolio.filter.matlab': 'MATLAB',
        'portfolio.filter.automation': 'Automation',
        'portfolio.filter.infrastructure': 'Infrastructure',
        'portfolio.case.problem': 'The Problem',
        'portfolio.case.solution': 'The Solution',
        'portfolio.case.technologies': 'Technologies',
        'portfolio.case.outcome': 'Outcome',
        'portfolio.project1.fulltitle': 'ESP32 Sensor Monitoring System',
        'portfolio.project1.problem': 'Client needed to monitor environmental conditions across multiple locations with real-time alerts.',
        'portfolio.project1.solution': 'Developed a wireless sensor network using ESP32 devices with MQTT communication to a central Node-RED dashboard.',
        'portfolio.project1.outcome': 'Successfully deployed 20+ sensor nodes providing continuous monitoring with 99.9% uptime.',
        'portfolio.project2.fulltitle': 'Node-RED Industrial Automation',
        'portfolio.project2.problem': 'Manufacturing facility required automated control system for production line monitoring.',
        'portfolio.project2.solution': 'Built comprehensive Node-RED flows integrating PLC data, creating visual dashboards and automated alerts.',
        'portfolio.project2.outcome': 'Reduced manual monitoring by 80% and enabled predictive maintenance capabilities.',
        'portfolio.project3.fulltitle': 'MATLAB Control System Simulation',
        'portfolio.project3.problem': 'Research team needed simulation of complex control algorithms before hardware implementation.',
        'portfolio.project3.solution': 'Created detailed Simulink models with custom MATLAB scripts for algorithm optimization.',
        'portfolio.project3.outcome': 'Accelerated development cycle by 60% through virtual testing and validation.',
        'portfolio.project4.fulltitle': 'Docker-based IoT Platform',
        'portfolio.project4.problem': 'Startup needed scalable infrastructure for their growing IoT application.',
        'portfolio.project4.solution': 'Designed containerized architecture with Docker Compose for easy deployment and scaling.',
        'portfolio.project4.outcome': 'Enabled seamless deployment across multiple environments with 90% reduction in setup time.',
        'portfolio.project5.fulltitle': 'Grafana Analytics Dashboard',
        'portfolio.project5.problem': 'Organization had data scattered across multiple sources with no unified view.',
        'portfolio.project5.solution': 'Integrated data sources into PostgreSQL and created comprehensive Grafana dashboards.',
        'portfolio.project5.outcome': 'Provided real-time business intelligence enabling data-driven decision making.',
        'portfolio.project6.fulltitle': 'Smart Building Automation',
        'portfolio.project6.problem': 'Office building needed energy-efficient automation for HVAC and lighting systems.',
        'portfolio.project6.solution': 'Implemented IoT-based control system with occupancy sensors and automated scheduling.',
        'portfolio.project6.outcome': 'Achieved 35% reduction in energy costs with improved occupant comfort.'
    },
    
    fa: {
        // Navigation
        'nav.home': 'خانه',
        'nav.services': 'خدمات',
        'nav.portfolio': 'نمونه‌کارها',
        'nav.about': 'درباره من',
        'nav.contact': 'تماس',
        
        // Hero Section
        'hero.title': 'طراحی و پیاده‌سازی سیستم‌های IoT، داشبوردهای مانیتورینگ و راهکارهای MATLAB',
        'hero.subtitle': 'کمک به مهندسان، پژوهشگران و کسب‌وکارها برای تبدیل ایده‌های فنی به سیستم‌های عملیاتی',
        'hero.cta.services': 'مشاهده خدمات',
        'hero.cta.contact': 'تماس با من',
        
        // Expertise Section
        'expertise.title': 'تخصص‌های فنی',
        'expertise.subtitle': 'راهکارهای تخصصی برای چالش‌های مهندسی',
        'expertise.iot.title': 'سیستم‌های IoT',
        'expertise.iot.desc': 'سیستم‌های کامل مانیتورینگ و کنترل IoT با جمع‌آوری داده بلادرنگ',
        'expertise.matlab.title': 'MATLAB و Simulink',
        'expertise.matlab.desc': 'شبیه‌سازی مهندسی، تحلیل داده و توسعه الگوریتم',
        'expertise.nodered.title': 'راهکارهای Node-RED',
        'expertise.nodered.desc': 'جریان‌های اتوماسیون بصری و پلتفرم‌های یکپارچه‌سازی برای IoT',
        'expertise.docker.title': 'استقرار Docker',
        'expertise.docker.desc': 'زیرساخت کانتینری برای برنامه‌های IoT مقیاس‌پذیر',
        'expertise.esp32.title': 'توسعه ESP32',
        'expertise.esp32.desc': 'فریم‌ور سفارشی و یکپارچه‌سازی سنسور برای سیستم‌های تعبیه‌شده',
        'expertise.dataviz.title': 'تصویرسازی داده',
        'expertise.dataviz.desc': 'داشبوردهای تعاملی و تحلیل برای تصمیم‌گیری آگاهانه',
        
        // Services Section
        'services.title': 'آنچه ارائه می‌دهم',
        'services.subtitle': 'راهکارهای عملی برای مسائل واقعی مهندسی',
        'services.badge.popular': 'محبوب',
        'services.matlab.title': 'آموزش و مشاوره MATLAB',
        'services.matlab.desc': 'از شبیه‌سازی تا پیاده‌سازی - راهنمایی تخصصی پروژه‌های MATLAB',
        'services.matlab.item1': 'مدل‌سازی سیستم',
        'services.matlab.item2': 'توسعه الگوریتم',
        'services.matlab.item3': 'تحلیل داده',
        'services.iot.title': 'طراحی سیستم‌های مانیتورینگ IoT',
        'services.iot.desc': 'شبکه‌های کامل سنسور با قابلیت‌های مانیتورینگ بلادرنگ',
        'services.iot.item1': 'یکپارچه‌سازی سنسور',
        'services.iot.item2': 'ارتباطات MQTT',
        'services.iot.item3': 'اتصال به ابر',
        'services.dashboard.title': 'توسعه داشبوردهای اتوماسیون',
        'services.dashboard.desc': 'رابط‌های بصری برای کنترل و مانیتورینگ سیستم‌های شما',
        'services.dashboard.item1': 'نمایشگرهای بلادرنگ',
        'services.dashboard.item2': 'پنل‌های کنترل',
        'services.dashboard.item3': 'سیستم‌های هشدار',
        'services.learnMore': 'ادامه مطلب ←',
        'services.viewAll': 'مشاهده همه خدمات',
        
        // Portfolio Section
        'portfolio.title': 'پروژه‌های شاخص',
        'portfolio.subtitle': 'مطالعات موردی که راهکارهای عملی را نشان می‌دهند',
        'tags.iot': 'اینترنت اشیاء',
        'tags.hardware': 'سخت‌افزار',
        'tags.nodered': 'نود-رد',
        'tags.automation': 'اتوماسیون',
        'tags.matlab': 'متلب',
        'tags.analysis': 'تحلیل',
        'portfolio.project1.title': 'مانیتورینگ سنسور با ESP32',
        'portfolio.project1.desc': 'شبکه سنسور بی‌سیم با انتقال داده بلادرنگ و داشبورد ابری',
        'portfolio.project2.title': 'داشبورد اتوماسیون Node-RED',
        'portfolio.project2.desc': 'سیستم کنترل اتوماسیون صنعتی با برنامه‌نویسی جریان بصری',
        'portfolio.project3.title': 'شبیه‌سازی‌های مهندسی MATLAB',
        'portfolio.project3.desc': 'مدل‌سازی و شبیه‌سازی سیستم‌های پیچیده برای کاربردهای پژوهشی',
        'portfolio.viewDetails': 'مشاهده جزئیات ←',
        'portfolio.viewAll': 'مشاهده همه پروژه‌ها',
        
        // Trust Section
        'trust.projects': 'پروژه تکمیل‌شده',
        'trust.years': 'سال تجربه',
        'trust.satisfaction': 'رضایت مشتری',
        'trust.techStack': 'فناوری‌ها',
        'trust.downloadCV': 'دانلود رزومه',
        
        // CTA Section
        'cta.title': 'آماده تبدیل ایده‌هایتان هستید؟',
        'cta.subtitle': 'بیایید درباره نحوه کمک من به شما برای ساخت راهکارهای فنی عملی صحبت کنیم',
        'cta.button': 'شروع گفتگو',
        
        // Footer
        'footer.tagline': 'مشاور فنی و سازنده راهکارهای IoT',
        'footer.navigation': 'دسترسی سریع',
        'footer.connect': 'ارتباط',
        'footer.rights': 'تمام حقوق محفوظ است.',
        
        // Services Page
        'services.pageTitle': 'خدمات',
        'services.pageSubtitle': 'راهکارهای جامع فنی برای چالش‌های مهندسی',
        'services.full.matlab.title': 'آموزش و مشاوره MATLAB',
        'services.full.matlab.desc': 'راهنمایی تخصصی برای پروژه‌های MATLAB و Simulink، از تکالیف دانشگاهی تا کاربردهای صنعتی',
        'services.full.iot.title': 'طراحی سیستم‌های مانیتورینگ IoT',
        'services.full.iot.desc': 'راهکارهای کامل IoT از انتخاب سنسور تا پیاده‌سازی داشبورد ابری',
        'services.full.dashboard.title': 'توسعه داشبوردهای اتوماسیون',
        'services.full.dashboard.desc': 'رابط‌های بصری برای کنترل و مانیتورینگ سیستم‌های اتوماتیک شما',
        'services.full.docker.title': 'استقرار زیرساخت فنی',
        'services.full.docker.desc': 'راهکارهای کانتینری برای استقرار مقیاس‌پذیر و قابل اعتماد برنامه‌ها',
        'services.full.esp32.title': 'توسعه ESP32',
        'services.full.esp32.desc': 'راهکارهای تعبیه‌شده سفارشی با قابلیت‌های WiFi، Bluetooth و مصرف پایین',
        'services.full.dataviz.title': 'جمع‌آوری و تصویرسازی داده',
        'services.full.dataviz.desc': 'تبدیل داده خام به بینش‌های عملی از طریق تصویرسازی موثر',
        'services.full.problem': 'مسئله‌ای که حل می‌کنم:',
        'services.full.solution': 'راهکار:',
        'services.full.result': 'نتیجه مورد انتظار:',
        'services.full.matlab.problem': 'مسائل پیچیده مهندسی که نیاز به مدل‌سازی ریاضی، شبیه‌سازی یا تحلیل داده دارند و دشوار یا زمان‌بر به نظر می‌رسند.',
        'services.full.matlab.solution1': 'توسعه الگوریتم سفارشی',
        'services.full.matlab.solution2': 'مدل‌سازی و شبیه‌سازی سیستم',
        'services.full.matlab.solution3': 'تصویرسازی و تحلیل داده',
        'services.full.matlab.solution4': 'بهینه‌سازی و اشکال‌زدایی کد',
        'services.full.matlab.solution5': 'جلسات آموزشی انفرادی',
        'services.full.matlab.result': 'کد MATLAB کارآمد، مستندات جامع و درک عمیق‌تر از رفتار سیستم شما.',
        'services.full.iot.problem': 'نیاز به جمع‌آوری، مانیتورینگ و تحلیل داده از محیط‌های فیزیکی دارید اما تخصص فنی برای ساخت سیستم قابل اعتماد را ندارید.',
        'services.full.iot.solution1': 'انتخاب و یکپارچه‌سازی سنسور',
        'services.full.iot.solution2': 'توسعه فریم‌ور ESP32/Arduino',
        'services.full.iot.solution3': 'راه‌اندازی ارتباطات MQTT',
        'services.full.iot.solution4': 'یکپارچه‌سازی پلتفرم ابری',
        'services.full.iot.solution5': 'داشبوردهای مانیتورینگ بلادرنگ',
        'services.full.iot.result': 'سیستم IoT کاملاً عملکردی با جمع‌آوری داده بلادرنگ، قابلیت‌های مانیتورینگ از راه دور و بینش‌های عملی.',
        'services.full.dashboard.problem': 'چندین سیستم به صورت مستقل بدون کنترل متمرکز یا دید نسبت به عملیات کار می‌کنند.',
        'services.full.dashboard.solution1': 'توسعه جریان Node-RED',
        'services.full.dashboard.solution2': 'طراحی رابط/داشبورد سفارشی',
        'services.full.dashboard.solution3': 'تصویرسازی داده بلادرنگ',
        'services.full.dashboard.solution4': 'سیستم‌های هشدار و اعلان',
        'services.full.dashboard.solution5': 'یکپارچه‌سازی با ابزارهای موجود',
        'services.full.dashboard.result': 'پنل کنترل متمرکز با مانیتورینگ بلادرنگ، گردش کار خودکار و کاهش مداخله دستی.',
        'services.full.docker.problem': 'برنامه‌هایی که روی سیستم شما کار می‌کنند اما در تولید شکست می‌خورند، یا سیستم‌هایی که مقیاس‌دهی و نگهداری آنها دشوار است.',
        'services.full.docker.solution1': 'کانتینری‌سازی Docker',
        'services.full.docker.solution2': 'پیکربندی Docker Compose',
        'services.full.docker.solution3': 'ارکستراسیون سرویس',
        'services.full.docker.solution4': 'استانداردسازی محیط',
        'services.full.docker.solution5': 'اتوماسیون استقرار',
        'services.full.docker.result': 'زیرساخت قابل حمل و مقیاس‌پذیر که به طور مداوم در محیط‌های مختلف با استقرار ساده اجرا می‌شود.',
        'services.full.esp32.problem': 'به قابلیت سخت‌افزاری سفارشی نیاز دارید اما راهکارهای آماده نیازهای خاص شما را برآورده نمی‌کنند.',
        'services.full.esp32.solution1': 'توسعه فریم‌ور سفارشی',
        'services.full.esp32.solution2': 'یکپارچه‌سازی سنسور',
        'services.full.esp32.solution3': 'اتصال WiFi/Bluetooth',
        'services.full.esp32.solution4': 'بهینه‌سازی مصرف پایین',
        'services.full.esp32.solution5': 'پیاده‌سازی به‌روزرسانی OTA',
        'services.full.esp32.result': 'دستگاه تعبیه‌شده قابل اعتماد با قابلیت سفارشی، اتصال بی‌سیم و مدیریت کارآمد انرژی.',
        'services.full.dataviz.problem': 'مقادیر زیادی داده جمع‌آوری می‌شود اما راه واضحی برای درک الگوها یا تصمیم‌گیری وجود ندارد.',
        'services.full.dataviz.solution1': 'راه‌اندازی خط لوله داده',
        'services.full.dataviz.solution2': 'طراحی پایگاه داده',
        'services.full.dataviz.solution3': 'ایجاد داشبورد Grafana',
        'services.full.dataviz.solution4': 'توسعه تصویرسازی سفارشی',
        'services.full.dataviz.solution5': 'گزارش‌دهی خودکار',
        'services.full.dataviz.result': 'نمایش بصری واضح از داده‌های شما با داشبوردهای تعاملی که تصمیم‌گیری آگاهانه را امکان‌پذیر می‌کند.',
        'process.title': 'روش کار من',
        'process.subtitle': 'رویکردی ساختاریافته برای ارائه نتایج',
        'process.step1.title': 'کشف',
        'process.step1.desc': 'درک نیازها، محدودیت‌ها و نتایج مورد نظر شما از طریق بحث مفصل.',
        'process.step2.title': 'برنامه‌ریزی',
        'process.step2.desc': 'ایجاد نقشه راه فنی با نقاط عطف، تحویل‌دادنی‌ها و زمان‌بندی مشخص.',
        'process.step3.title': 'توسعه',
        'process.step3.desc': 'ساخت راهکار با به‌روزرسانی‌های منظم و فرصت‌هایی برای بازخورد.',
        'process.step4.title': 'تحویل',
        'process.step4.desc': 'استقرار راهکار نهایی با مستندات و انتقال دانش.',
        'process.step5.title': 'پشتیبانی',
        'process.step5.desc': 'کمک مستمر برای اطمینان از عملکرد روان و پاسخ به هرگونه سوال.',
        'cta.services.title': 'آماده شروع پروژه خود هستید؟',
        'cta.services.subtitle': 'بیایید درباره نحوه کمک من به شما برای حل چالش‌های فنی صحبت کنیم',
        'cta.services.button': 'تماس بگیرید',
        
        // Portfolio Page
        'portfolio.pageTitle': 'نمونه‌کارها',
        'portfolio.pageSubtitle': 'پروژه‌های دنیای واقعی که راهکارهای عملی را نشان می‌دهند',
        'portfolio.filter.all': 'همه',
        'portfolio.filter.iot': 'اینترنت اشیاء',
        'portfolio.filter.matlab': 'متلب',
        'portfolio.filter.automation': 'اتوماسیون',
        'portfolio.filter.infrastructure': 'زیرساخت',
        'portfolio.case.problem': 'مسئله',
        'portfolio.case.solution': 'راهکار',
        'portfolio.case.technologies': 'فناوری‌ها',
        'portfolio.case.outcome': 'نتیجه',
        'portfolio.project1.fulltitle': 'سیستم مانیتورینگ سنسور ESP32',
        'portfolio.project1.problem': 'مشتری نیاز به مانیتورینگ شرایط محیطی در چندین مکان با هشدارهای بلادرنگ داشت.',
        'portfolio.project1.solution': 'توسعه شبکه سنسور بی‌سیم با استفاده از دستگاه‌های ESP32 با ارتباط MQTT به داشبورد مرکزی Node-RED.',
        'portfolio.project1.outcome': 'استقرار موفق بیش از ۲۰ گره سنسور با ارائه مانیتورینگ مداوم با آپ‌تایم ۹۹.۹٪.',
        'portfolio.project2.fulltitle': 'اتوماسیون صنعتی Node-RED',
        'portfolio.project2.problem': 'تأسیسات تولیدی نیاز به سیستم کنترل خودکار برای مانیتورینگ خط تولید داشت.',
        'portfolio.project2.solution': 'ساخت جریان‌های جامع Node-RED با یکپارچه‌سازی داده PLC، ایجاد داشبوردهای بصری و هشدارهای خودکار.',
        'portfolio.project2.outcome': 'کاهش ۸۰٪ مانیتورینگ دستی و امکان‌پذیر شدن قابلیت‌های نگهداری پیشگیرانه.',
        'portfolio.project3.fulltitle': 'شبیه‌سازی سیستم کنترل MATLAB',
        'portfolio.project3.problem': 'تیم پژوهشی نیاز به شبیه‌سازی الگوریتم‌های کنترل پیچیده قبل از پیاده‌سازی سخت‌افزار داشت.',
        'portfolio.project3.solution': 'ایجاد مدل‌های دقیق Simulink با اسکریپت‌های MATLAB سفارشی برای بهینه‌سازی الگوریتم.',
        'portfolio.project3.outcome': 'شتاب بخشیدن به چرخه توسعه به میزان ۶۰٪ از طریق آزمایش و اعتبارسنجی مجازی.',
        'portfolio.project4.fulltitle': 'پلتفرم IoT مبتنی بر Docker',
        'portfolio.project4.problem': 'استارتاپ به زیرساخت مقیاس‌پذیر برای برنامه IoT در حال رشد خود نیاز داشت.',
        'portfolio.project4.solution': 'طراحی معماری کانتینری با Docker Compose برای استقرار و مقیاس‌دهی آسان.',
        'portfolio.project4.outcome': 'امکان استقرار بدون وقفه در چندین محیط با کاهش ۹۰٪ زمان راه‌اندازی.',
        'portfolio.project5.fulltitle': 'داشبورد تحلیل Grafana',
        'portfolio.project5.problem': 'سازمان داده‌های پراکنده در چندین منبع بدون دید یکپارچه داشت.',
        'portfolio.project5.solution': 'یکپارچه‌سازی منابع داده به PostgreSQL و ایجاد داشبوردهای جامع Grafana.',
        'portfolio.project5.outcome': 'ارائه هوش تجاری بلادرنگ که تصمیم‌گیری مبتنی بر داده را امکان‌پذیر کرد.',
        'portfolio.project6.fulltitle': 'اتوماسیون ساختمان هوشمند',
        'portfolio.project6.problem': 'ساختمان اداری نیاز به اتوماسیون کارآمد انرژی برای سیستم‌های HVAC و روشنایی داشت.',
        'portfolio.project6.solution': 'پیاده‌سازی سیستم کنترل مبتنی بر IoT با سنسورهای اشغال و زمان‌بندی خودکار.',
        'portfolio.project6.outcome': 'دستیابی به کاهش ۳۵٪ هزینه‌های انرژی با بهبود آسایش ساکنان.'
    }
};

/* ============================================
   STATE MANAGEMENT
   ============================================ */
let currentLang = localStorage.getItem('lang') || 'en';

/* ============================================
   DOM ELEMENTS
   ============================================ */
const htmlElement = document.documentElement;
const langSwitchBtn = document.getElementById('langSwitch');
const langCurrentSpan = document.querySelector('.lang-current');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');

/* ============================================
   INITIALIZATION
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initNavigation();
    initScrollEffects();
    initCounterAnimation();
    updateYear();
});

/* ============================================
   LANGUAGE SYSTEM
   ============================================ */
function initLanguage() {
    applyLanguage(currentLang);
    
    if (langSwitchBtn) {
        langSwitchBtn.addEventListener('click', toggleLanguage);
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fa' : 'en';
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
}

function applyLanguage(lang) {
    // Update HTML attributes
    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
    
    // Update language switcher button
    if (langCurrentSpan) {
        langCurrentSpan.textContent = lang === 'en' ? 'FA' : 'EN';
    }
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update font family
    document.body.style.fontFamily = lang === 'fa' 
        ? 'var(--font-fa)' 
        : 'var(--font-en)';
}

/* ============================================
   NAVIGATION
   ============================================ */
function initNavigation() {
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link
        updateActiveNavLink();
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `/#${currentSection}` || 
            (currentSection === '' && link.getAttribute('href') === '/')) {
            link.classList.add('active');
        }
    });
}

/* ============================================
   SCROLL EFFECTS
   ============================================ */
function initScrollEffects() {
    // Reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/* ============================================
   COUNTER ANIMATION
   ============================================ */
function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');
    let hasAnimated = false;
    
    const animateCounters = () => {
        const trustSection = document.querySelector('.trust');
        if (!trustSection) return;
        
        const sectionTop = trustSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75 && !hasAnimated) {
            hasAnimated = true;
            
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
            });
        }
    };
    
    window.addEventListener('scroll', animateCounters);
    animateCounters(); // Trigger once on load
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */
function updateYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/* ============================================
   FORM HANDLING (For Contact Page)
   ============================================ */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a backend
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
}

// Initialize contact form if it exists
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
} else {
    initContactForm();
}

/* ============================================
   PERFORMANCE OPTIMIZATION
   ============================================ */
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for resize events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply debounced scroll
const debouncedScroll = debounce(() => {
    // Scroll-related operations
}, 10);

// Apply throttled resize
const throttledResize = throttle(() => {
    // Resize-related operations
}, 250);

window.addEventListener('scroll', debouncedScroll);
window.addEventListener('resize', throttledResize);

/* ============================================
   ACCESSIBILITY ENHANCEMENTS
   ============================================ */
// Keyboard navigation for language switcher
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target === langSwitchBtn) {
        toggleLanguage();
    }
});

// Focus trap for mobile menu
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// Initialize focus trap for mobile menu
if (navMenu) {
    navMenu.addEventListener('transitionend', () => {
        if (navMenu.classList.contains('active')) {
            trapFocus(navMenu);
        }
    });
}
