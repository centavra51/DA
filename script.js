const canvas = document.getElementById('parallax-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;
const navbar = document.getElementById('navbar');

const frameCount = 140;
const currentFrame = index => (
    `https://mbajvfzehudjjwvvkujw.supabase.co/storage/v1/object/public/Webp%20Supabase/frame_${index.toString().padStart(3, '0')}_delay-0.04s.webp`
);

const translations = {
    ru: {
        "nav-port": "Проекты", "nav-services": "Услуги", "nav-ai-agent": "AI Агент", "nav-price": "Стоимость", "nav-contact": "Начать проект",
        "hero-label": "WEB DEVELOPMENT & AI 2026",
        "hero-h1-1": "Не сливайте <span style=\"color: var(--accent);\">бюджет.</span>", "hero-h1-2": "Инвестируйте в <span style=\"color: var(--accent);\">прибыль.</span>",
        "hero-desc": "Ваш сайт должен приносить деньги. Создаю системы, превращающие посетителей в клиентов.",
        "btn-main": "Рассчитать стоимость", "btn-chat": "Спросить у AI →",
        "phil-title": "Бизнес теряет 60% клиентов<br>на первом экране.",
        "phil-p1": "В 2026 году у вас нет второго шанса. Медленная загрузка? Шаблонный дизайн? Клиент уходит.",
        "stat-desc": "Время на захват внимания. Мы делаем это за 0.5 секунды.",
        "sol-title": "Гибридная Архитектура", "sol-desc": "Мы берем лучшее от CMS и чистого кода.",
        "f1-t": "WordPress Core", "f1-d": "Удобная админка. Вы меняете контент сами.",
        "f2-t": "Custom Frontend", "f2-d": "Чистый код. 100/100 скорость Google.",
        "f3-t": "Sales AI", "f3-d": "ИИ, который прогревает клиентов.",
        "tech-label": "Применяемые технологии",
        "m1": "Рост заявок", "m2": "Загрузка страницы", "m3": "Работа Авто-воронок",
        "port-title": "Избранные Проекты", "port-card-desc": "ИННОВАЦИОННЫЙ ДИЗАЙН.", "port-card-desc1": "Веб-сайт барбершоп, витрина магазина -  дизайн и рабочий прототип, выполненные за 4 часа.", "port-card-desc2": "Платформа ремонта квартир с дизайном и выбором мастеров.", "port-card-desc3": "Децентрализованная биржа с текингом и стейкингом.", "port-card-desc4": "Маркетплейс салонов красоты с бронированием и профилями.", "port-card-desc5": "Платформа услуг автодетейлинга с онлайн личным расписанием.", "port-card-desc6": "Агент для фильтрации лидов на сайте с автоматической квалификацией клиентов.",
        "ai-sec-title": "Ваш лучший сотрудник,<br>который не спит.",
        "ai-sec-desc": "RAG-агент знает ваш прайс и условия. Он консультирует и передает вам готовый лид.",
        "price-title": "Стоимость Разработки",
        "p1-desc": "Лендинг для быстрого теста.", "p1-l1": "WordPress или Code", "p1-l2": "Адаптив", "p1-l3": "Срок: 3-5 дней",
        "p2-desc": "Корпоративный сайт / Магазин.", "p2-l1": "CMS + Custom Design", "p2-l2": "Анимации", "p2-l3": "Срок: 7-14 дней",
        "p3-desc": "Автоматизация продаж.", "p3-l1": "RAG Чат-бот", "p3-l2": "n8n Сценарии", "p3-l3": "Техподдержка",
        "ai-box-label": "All-Inclusive Content",
        "ai-box-title": "Нет контента? Не проблема.",
        "ai-box-desc": "Вам не нужно нанимать копирайтера, фотографа и дизайнера. Я использую генеративный ИИ и передовые нейросети, чтобы создать уникальную айдентику. Мы наполним сайт смыслами, которые продают, и визуалом, который гипнотизирует.",
        "faq-title": "Частые вопросы",
        "faq-q1": "Нужна ли предоплата?", "faq-a1": "На первом этапе мы создаем для вас интерактивный прототип будущего сайта абсолютно бесплатно. Предоплата (50%) потребуется только после того, как вы увидите структуру, утвердите прототип и будете готовы двигаться дальше (заполняем договор если требуется). Это гарантирует вам прозрачность и безопасность на старте.",
        "faq-q2": "Могу ли я потом сам изменять текст и картинки на сайте, добавлять новый контент?", "faq-a2": "Да, через удобную админку WordPress.",
        "faq-q3": "Что если не понравится?", "faq-a3": "Правки на этапе прототипа бесплатны.",
        "faq-q4": "Вы можете установить автоматизацию по написанию SEO-контента?", "faq-a4": "Да, это одно из наших ключевых направлений. Мы внедряем AI-системы, которые автоматически генерируют уникальные SEO-оптимизированные статьи и описания товаров. Система сама подбирает актуальные темы в вашей нише, находит ключевые слова и публикует контент, который помогает вашему сайту расти в поиске без участия копирайтеров.",
        "faq-q5": "Что такое ИИ-Менеджер и зачем он мне?", "faq-a5": "ИИ-Менеджер — это ваш виртуальный сотрудник, который работает 24/7 без выходных. Он мгновенно отвечает на вопросы клиентов на сайте, в Telegram или WhatsApp, квалифицирует лидов и передает вам только «горячих» клиентов, готовых к покупке. Это позволяет не терять ночные заявки и освободить ваших менеджеров от рутинных консультаций.",
        "cta-title": "Хватит терять клиентов.<br>Давайте работать.",
        "btn-send": "Получить консультацию",
        "form-name": "Имя", "form-contact": "Telegram / WhatsApp",
        "form-service-select": "Выберите услугу (необязательно)",
        "form-service-website": "Разработка сайта",
        "form-service-ai": "AI Agent для бизнеса",
        "form-service-automation": "Автоматизация процессов",
        "form-service-consulting": "Консультация",
        "form-service-other": "Другое",
        "form-message": "Ваше сообщение (необязательно)",
        "contact-direct-btn": "Связаться напрямую",
        "chat-header": "✨ AI Ассистент", "chat-welcome": "◆ Добрый день! Я ваш персональный AI консультант\n\n◈ Помогу вам:\n<span style=\"color: var(--accent)\">✓</span> Ответить на любые вопросы о наших услугах\n<span style=\"color: var(--accent)\">✓</span> Рассчитать стоимость вашего проекта\n<span style=\"color: var(--accent)\">✓</span> Провести профессиональную консультацию\n<span style=\"color: var(--accent)\">✓</span> Оформить заказ на разработку\n\n→ Что вас интересует?", "chat-placeholder": "Напишите ваш вопрос...", "chat-footer": "Разработано Digital Architect", "chat-ask": "Задать вопрос",
        "promo-1": "Теряете клиентов ночью? 💤", "promo-2": "Захват лидов 24/7 без пропусков 🎯", "promo-3": "Дайте менеджерам супер силу 💪",
        "port-title": "Избранные Проекты",
        "port-h-1": "Neon Store",
        "port-desc-1": "Высокопроизводительный маркетплейс с гибридной архитектурой и AI-консультантом.",
        "port-h-2": "Barber Pro",
        "port-desc-2": "Автоматизация записей и CRM-система, созданная специально для индустрии красоты.",
        "port-h-3": "Vision Dashboard",
        "port-desc-3": "Интерфейс мониторинга бизнес-процессов с использованием предиктивной аналитики.",
        "port-page-title": "Портфолио", "port-page-subtitle": "Все проекты", "btn-order": "Заказать", "btn-all-projects": "Смотреть все", "port-card-new1": "AI агент поддержки.", "port-card-new2": "Магазин неоновых вывесок.", "port-card-new3": "Лендинг для юриста.", "port-card-new4": "CRM панель управления.",
        "ai-hero-title": "ПОКА ВЫ ЧИТАЕТЕ ЭТО,<br>КОНКУРЕНТ УЖЕ ОТВЕЧАЕТ ВАШЕМУ КЛИЕНТУ",
        "ai-hero-desc": "Мы подключаем \"умное сито\", которое 24/7 отсеивает \"просто спросить\" и доставляет вам только тех, кто готов платить.",
        "ai-btn-trial": "Начать 7-дневный пробный период",
        "ai-btn-how": "Как это работает →",
        "ai-hero-sub": "* Демонстрация ИИ-Менеджера доступна в чат-виджете справа внизу (WhatsApp / Telegram)",
        "ai-btn-pricing": "Посмотреть цены →",
        "ai-brain-label": "7-ДНЕВНЫЙ ПУТЬ",
        "ai-process-desc": "Мы создаем для вас персональный Telegram-чат. Это ваш прямой канал связи с основателем проекта.",
        "ai-process-desc-ext": "В этот чат будут автоматически приходить готовые, отфильтрованные лиды. А я лично проконтролирую 3 ключевых этапа вашего 7-дневного тест-драйва:",
        "ai-step1-title": "1 Запуск:",
        "ai-step1-desc": "Проверю, что все корректно стартовало.",
        "ai-step2-title": "2. Промежуточный итог (через 3-4 дня):",
        "ai-step2-desc": "Дам краткий анализ первых результатов.",
        "ai-step3-title": "3. Финальный отчет:",
        "ai-step3-desc": "В конце 7-го дня подготовлю для вас полные выводы.",
        "ai-problem-title-bottom": "с вашего сайта не доходят до сделки?",
        "ai-prob1-title": "Слишком медленно",
        "ai-prob1-desc": "Клиент написал ночью. Ваш менеджер ответил утром. Конкурент, у которого стоит ИИ-Менеджер, ответил за 20-25 секунд. Клиент уже купил у них.",
        "ai-prob2-title": "Куча нецелевых",
        "ai-prob2-desc": "Ваш лучший продавец тратит 2 часа на 'пустые' диалоги с теми, кто 'просто спросить'. За это время он мог бы закрыть реальную сделку. Наш ИИ-Менеджер берет весь мусор на себя.",
        "ai-prob3-title": "Неразбериха и хаос",
        "ai-prob3-desc": "Заявки с сайта, из WhatsApp, из Telegram... Все сыпется в разные места и теряется. <strong>Наш ИИ-Менеджер собирает горячих лидов из всех каналов в одно место</strong> и передает их вашим менеджерам.",
        "ai-sol-label": "Решение",
        "ai-solution-desc": "Мы подключаем AI-агента, который живет на сайте, в WhatsApp и Telegram. Он подключается к диалогу за 2 часа (технически) и реагирует за 5 секунд.<br><br><strong>Он не просто отвечает на вопросы.</strong> Он квалифицирует лида (бюджет, сроки, задача), отсеивает нецелевых и передает вам в Telegram или CRM только тех, кто готов покупать.",
        "ai-solution-bold": "Он не просто отвечает на вопросы.",
        "ai-roi": "Окупаемость: с 1-й сделки",
        "ai-btn-try-free": "Попробовать бесплатно",
        "ai-btn-purchase": "Приобрести",
        "ai-process-desc": "Мы создаем для вас персональный Telegram-чат. Это ваш прямой канал связи с основателем проекта.",
        "ai-process-desc-ext": "В этот чат будут автоматически приходить готовые, отфильтрованные лиды. А я лично проконтролирую 3 ключевых этапа вашего 7-дневного тест-драйва:",
        "ai-step1-title": "1 Запуск:",
        "ai-step1-desc": "Проверю, что все корректно стартовало.",
        "ai-step2-title": "2. Промежуточный итог (через 3-4 дня):",
        "ai-step2-desc": "Дам краткий анализ первых результатов.",
        "ai-step3-title": "3. Финальный отчет:",
        "ai-step3-desc": "В конце 7-го дня подготовлю для вас полные выводы.",
        "ai-founder-msg": "\"Никаких менеджеров и глухих телефонов. Вы покупаете не только результат, но и прозрачность процесса.\" — Александр.",
        "ai-pricing-title": "Наши Продукты: Готовые ИИ-Решения для Вашего Роста.",
        "ai-prod1-title": "ИИ-Менеджер для Сайта",
        "ai-prod1-desc": "Наш главный продукт. Превращает ваш сайт в круглосуточного сотрудника, который 24/7 отсеивает 'мусорные заявки' и передает 'горячих' лидов вашим менеджерам.",
        "ai-prod1-price": "$100 / месяц + $165 единоразовое внедрение",
        "ai-features-title": "Что входит в решение:",
        "ai-prod1-f1": "- Текстовый ИИ-виджет для вашего сайта.",
        "ai-prod1-f2": "- Внедрение 'под ключ': мы сами все настроим и запустим за вас.",
        "ai-prod1-f3": "- Адаптация под ваш бизнес: настроим 3-5 ключевых вопросов для фильтрации лидов.",
        "ai-prod1-f4": "- Интеграция с вашим Telegram или Email для получения заявок.",
        "ai-prod1-roi": "Окупаемость: с 1-й сделки*",
        "ai-btn-try": "Попробовать бесплатно",
        "ai-prod2-title": "ИИ-Менеджер для Мессенджеров",
        "ai-prod2-desc": "Тот же 'умный мозг', но для ваших соц. сетей. Превращает хаос в WhatsApp или Telegram в упорядоченный конвейер теплых лидов.",
        "ai-prod2-price": "$100 / месяц + $165 единоразовое внедрение",
        "ai-prod2-add": "Каждая дополнительная соц сеть: +$55 / мес.",
        "ai-prod2-f1": "- Интеграция с 1 мессенджером на выбор (WhatsApp или Telegram).",
        "ai-prod2-f2": "- Внедрение 'под ключ': мы полностью берем на себя всю техническую часть.",
        "ai-prod2-f3": "- Адаптация под ваш бизнес: настроим 3-5 ключевых вопросов для фильтрации лидов.",
        "ai-prod2-f4": "- Интеграция с вашим CRM / Telegram / Email для получения горячих заявок.",
        "ai-prod2-roi": "Хит продаж",
        "ai-prod2-tg-example": "🤖 Посмотреть пример в ТГ",
        "ai-btn-buy": "Приобрести",
        "ai-prod3-title": "Индивидуальная разработка",
        "ai-prod3-desc": "Нестандартные сценарии/источники, особые правила отбора. Отдельный бриф, уникальные задачи.",
        "ai-prod3-price": "Цена: по ТЗ (индивидуально)",
        "ai-prod3-roi": "Окупаемость: по расчёту под ваш кейс*",
        "ai-btn-discuss": "Обсудить",
        "ai-cta-pilot": "ЗАПУСТИТЬ МОЙ БЕСПЛАТНЫЙ ПИЛОТ",
        "ai-faq-title": "Ответы на вопросы",
        "ai-faq-cat1": "Категория 1: Процесс и Результаты",
        "ai-faq1-q": "В чем подвох?",
        "ai-faq1-a": "Подвоха нет. Есть 7-дневный бесплатный тест-драйв. Мы не просим верить нам на слово. Мы предлагаем убедиться на практике. Мы уверены в нашем продукте, поэтому даем вам возможность проверить его в реальном бою на вашем сайте, не рискуя ничем.",
        "ai-faq2-q": "Окупится ли это?",
        "ai-faq2-a": "Да. Наш \"ИИ-Менеджер\" стоит в 2-3 раза дешевле зарплаты младшего менеджера, но работает 24/7. В вашей нише один 'пойманный' клиент, которого вы раньше бы упустили, полностью окупает стоимость сервиса на несколько месяцев вперед. Тест-драйв как раз и создан, чтобы вы сами в этом убедились.",
        "ai-faq3-q": "Мне нужно будет настраивать самому?",
        "ai-faq3-a": "Именно поэтому мы не продаем \"коробку\". Наш главный принцип - \"Внедрение 'под ключ'\". На этапе настройки мы вместе с вами определяем 3-5 ключевых квалификационных вопросов, которые важны именно для вашего бизнеса. ИИ-Менеджер будет говорить на вашем языке и решать ваши задачи.",
        "ai-faq-cat2": "Категория 2: Технические Детали",
        "ai-faq4-q": "Как проходит тест-драйв технически?",
        "ai-faq4-a": "Вы тестируете один из наших двух стартовых продуктов в реальных условиях. Либо \"ИИ-Менеджера для Сайта\" на вашем сайте, либо \"ИИ-Менеджера для Мессенджеров\" в одном из ваших каналов (WhatsApp, TG ). В тест-драйв входит базовая настройка под вас и доставка лидов в Telegram или на Email.",
        "ai-faq5-q": "Это сложно подключить?",
        "ai-faq5-a": "Максимально просто. Мы либо делаем это за вас через временный гостевой доступ, либо на 5-минутном созвоне показываем, куда вставить несколько строчек кода. От вас не требуется никаких технических знаний.",
        "ai-faq6-q": "Не будет ли бот раздражать клиентов?",
        "ai-faq6-a": "Нет. Наоборот. Клиенты получают мгновенный ответ на свой вопрос, а не ждут часами. Наш \"ИИ-Менеджер\" обучен вести диалог вежливо, профессионально и по делу. Он не \"тупой бот\", а эффективный консультант, который повышает уровень вашего сервиса.",
        "ai-faq-cat3": "Категория 3: Деньги и Условия",
        "ai-faq7-q": "Почему внедрение платное?",
        "ai-faq7-a": "Потому что это не \"установка\". Это - консалтинговая работа \"под ключ\". Мы тратим наше экспертное время, чтобы проанализировать ваши задачи и идеально адаптировать ассистента под ваш бизнес. Это также наш фильтр, который отсеивает \"туристов\" и позволяет нам фокусироваться на клиентах, серьезно настроенных на результат.",
        "ai-faq8-q": "Кому принадлежат лиды?",
        "ai-faq8-a": "Только вы. Всегда. Мы - лишь инструмент для обработки. Все данные, все лиды принадлежат вам.",
        "ai-faq9-q": "Что если не будет результата за 7 дней?",
        "ai-faq9-a": "Отличный, честный вопрос. Тест-драйв - это не просто тест, это бесплатная диагностика вашего бизнеса. И у него всегда положительный результат.<br><br><strong>Сценарий 1:</strong> Вы получаете лиды. Отлично, мы доказали, что наш 'ИИ-Помощник' приносит вам деньги, которые вы раньше теряли.<br><br><strong>Сценарий 2:</strong> Вы не получаете лидов. Это еще более ценный результат. Значит, мы нашли вашу настоящую проблему — не 'обработку', а 'генерацию' трафика. В любом случае, вы получаете не 'ноль', а бесценный диагностический отчет о главном узком месте в вашей воронке. А под эту проблему у нас есть другие решения.",
        "ai-cta-title": "Не нашли свой вопрос?",
        "ai-cta-desc": "Это значит, он достаточно серьезный, чтобы обсудить его лично с основателем. Лучший способ получить ответ - оставить быструю заявку на бесплатный тест-драйв. Я (Александр) лично изучу ваш вопрос и свяжусь с вами в Telegram для детального обсуждения.",
        "ai-form-offer": "Первые 7 дней — бесплатно",
        "ai-form-noobligation": "Никаких обязательств, платежных данных и сложных настроек. Только результат.",
        "form-label-contact": "1. Ваш контакт для связи (номер / telegram / whatsapp)",
        "form-label-website": "2. Сайт, для которого мы подготовим код виджета",
        "form-label-delivery": "3. Куда присылать готовых лидов?",
        "form-delivery-email": "На мой E-mail",
        "form-delivery-telegram": "В отдельную Telegram-группу",
        "btn-signup": "Записаться",
        "ai-cta-start-pilot": "ЗАПУСТИТЬ МОЙ БЕСПЛАТНЫЙ ПИЛОТ",
        "ai-custom-pricing": "По ТЗ (индивидуально)",
        "ai-custom-roi": "Окупаемость: по расчёту под ваш кейс",
        "ai-additional-messenger": "Примечание: Каждая дополнительная соц сеть: +$55 / мес.",
        "ai-pricing-transparent-title": "Прозрачная Цена",
        "ai-pricing-integration": "Внедрение",
        "ai-pricing-support": "Поддержка",
        "ai-pricing-setup-desc": "$165 разово",
        "ai-pricing-support-desc": "$165 / мес.",
        "form-placeholder-contact": "+373 67 732 256 или @username",
        "form-placeholder-website": "https://вашсайт.com"
    },
    en: {
        "nav-port": "Projects", "nav-services": "Services", "nav-ai-agent": "AI Agent", "nav-price": "Pricing", "nav-contact": "Start Project",
        "hero-label": "WEB DEVELOPMENT & AI 2026",
        "hero-h1-1": "Stop Wasting <span style=\"color: var(--accent);\">Budget.</span>", "hero-h1-2": "Invest in <span style=\"color: var(--accent);\">Profit.</span>",
        "hero-desc": "Your site should make money. I build systems that turn visitors into clients.",
        "btn-main": "Get Quote", "btn-chat": "Ask AI →",
        "phil-title": "Businesses lose 60% of clients<br>on the first screen.",
        "phil-p1": "In 2026, you have no second chance. Slow loading? Generic design? The client leaves.",
        "stat-desc": "Time to capture attention. We do it in 0.5s.",
        "sol-title": "Hybrid Architecture", "sol-desc": "The best of CMS and clean code.",
        "f1-t": "WordPress Core", "f1-d": "Easy admin panel. You control the content.",
        "f2-t": "Custom Frontend", "f2-d": "Clean code. 100/100 Google Speed.",
        "f3-t": "Sales AI", "f3-d": "AI that warms up leads for you.",
        "tech-label": "Applied Technologies",
        "m1": "Lead Growth", "m2": "Page Load", "m3": "Auto-Funnels",
        "port-title": "Selected Works", "port-card-desc": "INNOVATION DRIVEN DESIGN.", "port-card-desc1": "Barbershop website, store showcase - design and working prototype completed in 4 hours.", "port-card-desc2": "Interior renovation platform with design consultation and contractors.", "port-card-desc3": "Decentralized exchange with yield farming and staking pools.", "port-card-desc4": "Beauty salon marketplace with booking and customer profiles.", "port-card-desc5": "Professional car detailing service platform with scheduling.", "port-card-desc6": "Lead filtering agent for websites with automatic client qualification.",
        "ai-sec-title": "Your best employee<br>who never sleeps.",
        "ai-sec-desc": "RAG Agent knows your pricing. It consults clients and hands you a hot lead.",
        "price-title": "Investment",
        "p1-desc": "Landing Page for quick testing.", "p1-l1": "WordPress or Code", "p1-l2": "Responsive", "p1-l3": "Time: 3-5 days",
        "p2-desc": "Corporate Site / Store.", "p2-l1": "CMS + Custom Design", "p2-l2": "Animations", "p2-l3": "Time: 7-14 days",
        "p3-desc": "Sales Automation.", "p3-l1": "RAG Chatbot", "p3-l2": "n8n Workflows", "p3-l3": "Tech Support",
        "ai-box-label": "All-Inclusive Content",
        "ai-box-title": "Content is on me.",
        "ai-box-desc": "You don't need to hire a copywriter or designer. I use Generative AI and advanced neural networks to create a unique identity. We will fill the site with meaning that sells and visuals that hypnotize.",
        "faq-title": "FAQ",
        "faq-q1": "Do you need a deposit?", "faq-a1": "In the first stage, we create an interactive prototype of your future site absolutely free. Prepayment (50%) is only required after you see the structure, approve the prototype, and are ready to move forward (we sign a contract if required). This ensures transparency and security from the start.",
        "faq-q2": "Can I later change text and images on the site myself, and add new content?", "faq-a2": "Yes, via easy WordPress admin.",
        "faq-q3": "What if I don't like it?", "faq-a3": "Revisions during prototyping are free.",
        "faq-q4": "Can you install automation for writing SEO content?", "faq-a4": "Yes, this is one of our key areas. We implement AI systems that automatically generate unique SEO-optimized articles and product descriptions. The system selects trending topics in your niche, finds keywords, and publishes content that helps your site grow in search results without the need for human copywriters.",
        "faq-q5": "What is an AI Manager and why do I need it?", "faq-a5": "An AI Manager is your virtual employee working 24/7 without days off. It instantly responds to client inquiries on your website, Telegram, or WhatsApp, qualifies leads, and passes only 'hot' prospects ready to buy to you. This ensures no leads are lost at night and frees your staff from routine consultations.",
        "cta-title": "Stop losing clients.<br>Let's work.",
        "btn-send": "Get Consultation",
        "form-name": "Name", "form-contact": "Telegram / WhatsApp",
        "form-service-select": "Select service (optional)",
        "form-service-website": "Website Development",
        "form-service-ai": "AI Agent for Business",
        "form-service-automation": "Process Automation",
        "form-service-consulting": "Consultation",
        "form-service-other": "Other",
        "form-message": "Your message (optional)",
        "contact-direct-btn": "Contact Directly",
        "chat-header": "✨ AI Assistant", "chat-welcome": "◆ Good day! I'm your personal AI consultant\n\n◈ How I can help:\n<span style=\"color: var(--accent)\">✓</span> Answer any questions about our services\n<span style=\"color: var(--accent)\">✓</span> Calculate your project cost\n<span style=\"color: var(--accent)\">✓</span> Provide professional consultation\n<span style=\"color: var(--accent)\">✓</span> Process your order\n\n→ What interests you?", "chat-placeholder": "Type your question here...", "chat-footer": "Developed by Digital Architect", "chat-ask": "Ask a question",
        "promo-1": "Losing clients at night? 💤", "promo-2": "Lead capture 24/7 without missing 🎯", "promo-3": "Give managers super power 💪",
        "port-title": "Selected Works",
        "port-h-1": "Neon Store",
        "port-desc-1": "High-performance marketplace with hybrid architecture and AI assistant.",
        "port-h-2": "Barber Pro",
        "port-desc-2": "Booking automation and CRM system built specifically for the beauty industry.",
        "port-h-3": "Vision Dashboard",
        "port-desc-3": "Business process monitoring interface using predictive analytics.",
        "port-page-title": "Portfolio", "port-page-subtitle": "All Projects", "btn-order": "Order", "btn-all-projects": "View All", "port-card-new1": "AI Support Agent.", "port-card-new2": "Neon Sign Store.", "port-card-new3": "Lawyer Landing Page.",
        "port-card-new4": "CRM Dashboard UI.",
        "ai-hero-title": "WHILE YOU READ THIS,<br>A COMPETITOR IS ALREADY ANSWERING YOUR CLIENT",
        "ai-hero-desc": "We connect a \"smart sieve\" that filters out \"just asking\" 24/7 and delivers only those ready to pay.",
        "ai-btn-trial": "Start 7-Day Free Trial",
        "ai-btn-how": "How it works →",
        "ai-hero-sub": "* AI Manager demo available in chat widget (WhatsApp / Telegram)",
        "ai-btn-pricing": "View Pricing →",
        "ai-brain-label": "7-DAY JOURNEY",
        "ai-process-desc": "We create a personal Telegram chat for you. This is your direct communication channel with the project founder.",
        "ai-process-desc-ext": "Ready, filtered leads will automatically arrive in this chat. And I will personally control 3 key stages of your 7-day test drive:",
        "ai-step1-title": "1 Launch:",
        "ai-step1-desc": "I will check that everything started correctly.",
        "ai-step2-title": "2. Intermediate Result (after 3-4 days):",
        "ai-step2-desc": "I will provide a brief analysis of the first results.",
        "ai-step3-title": "3. Final Report:",
        "ai-step3-desc": "At the end of the 7th day, I will prepare complete conclusions for you.",
        "ai-problem-title-bottom": "from your site don't reach a deal?",
        "ai-prob1-title": "Too slow",
        "ai-prob1-desc": "Client wrote at night. Your manager replied in the morning. A competitor with an AI Manager replied in 20-25 seconds. The client already bought from them.",
        "ai-prob2-title": "Junk leads",
        "ai-prob2-desc": "Your best salesperson spends 2 hours on 'empty' dialogues with those who are 'just asking'. In that time, they could have closed a real deal. Our AI Manager takes all the trash upon itself.",
        "ai-prob3-title": "Chaos and confusion",
        "ai-prob3-desc": "Requests from site, WhatsApp, Telegram... Everything flows into different places and gets lost. <strong>Our AI Manager collects hot leads from all channels in one place</strong> and passes them to your managers.",
        "ai-sol-label": "Solution",
        "ai-solution-desc": "We connect an AI agent that lives on your site, in WhatsApp, and Telegram. It connects to the dialogue in 2 hours (technically) and responds in 5 seconds.<br><br><strong>It doesn't just answer questions.</strong> It qualifies the lead (budget, timing, task), filters out junk, and sends you only those ready to buy in Telegram or CRM.",
        "ai-solution-bold": "It doesn't just answer questions.",
        "ai-roi": "ROI: from 1st deal",
        "ai-btn-try-free": "Try for Free",
        "ai-btn-purchase": "Purchase",
        "ai-process-desc": "We create a personal Telegram chat for you. This is your direct communication channel with the project founder.",
        "ai-process-desc-ext": "Ready, filtered leads will automatically arrive in this chat. And I will personally control 3 key stages of your 7-day test drive:",
        "ai-step1-title": "1 Launch:",
        "ai-step1-desc": "I will check that everything started correctly.",
        "ai-step2-title": "2. Intermediate Result (after 3-4 days):",
        "ai-step2-desc": "I will provide a brief analysis of the first results.",
        "ai-step3-title": "3. Final Report:",
        "ai-step3-desc": "At the end of the 7th day, I will prepare complete conclusions for you.",
        "ai-founder-msg": "\"No managers and broken telephones. You buy not just a result, but process transparency.\" — Alexander.",
        "ai-pricing-title": "Our Products: Ready AI Solutions for Your Growth.",
        "ai-prod1-title": "AI Manager for Site",
        "ai-prod1-desc": "Our main product. Turns your site into a 24/7 employee who filters 'junk requests' and passes 'hot' leads to your managers.",
        "ai-prod1-price": "$100 / month + $165 one-time setup",
        "ai-features-title": "What's included in the solution:",
        "ai-prod1-f1": "- Text AI widget for your site.",
        "ai-prod1-f2": "- \"Turnkey\" implementation: we set up and launch everything for you.",
        "ai-prod1-f3": "- Adaptation for your business: 3-5 key filtering questions.",
        "ai-prod1-f4": "- Integration with your Telegram or Email.",
        "ai-prod1-roi": "ROI: from 1st deal*",
        "ai-btn-try": "Try for Free",
        "ai-prod2-title": "AI Manager for Messengers",
        "ai-prod2-desc": "The same 'smart brain', but for your social media. Turns chaos in WhatsApp or Telegram into an ordered conveyor of warm leads.",
        "ai-prod2-price": "$100 / month + $165 one-time setup",
        "ai-prod2-add": "Each additional social network: +$55 / mo.",
        "ai-prod2-f1": "- Integration with 1 messenger of choice (WhatsApp or Telegram).",
        "ai-prod2-f2": "- \"Turnkey\" implementation: we take full care of the technical part.",
        "ai-prod2-f3": "- Adaptation for your business: 3-5 key filtering questions.",
        "ai-prod2-f4": "- Integration with CRM / Telegram / Email for hot leads.",
        "ai-prod2-roi": "Best Seller",
        "ai-prod2-tg-example": "🤖 See TG example",
        "ai-btn-buy": "Purchase",
        "ai-prod3-title": "Custom Development",
        "ai-prod3-desc": "Non-standard scenarios/sources, unique rules. Separate brief, unique tasks.",
        "ai-prod3-price": "Price: Custom Quote (individual)",
        "ai-prod3-roi": "ROI: calculated for your case*",
        "ai-btn-discuss": "Discuss",
        "ai-cta-pilot": "START MY FREE PILOT",
        "ai-faq-title": "Frequently Asked Questions",
        "ai-faq-cat1": "Category 1: Process and Results",
        "ai-faq1-q": "Is there a catch?",
        "ai-faq1-a": "No catch. There is a 7-day free test drive. We don't ask you to take our word for it. We offer you to verify in practice. We are confident in our product, so we give you the opportunity to test it in real battle on your site without risk.",
        "ai-faq2-q": "Will it pay off?",
        "ai-faq2-a": "Yes. Our \"AI Manager\" costs 2-3 times less than a junior manager's salary but works 24/7. In your niche, one 'caught' client you would have otherwise lost fully covers the service cost for months. The test drive is created specifically so you can verify this yourself.",
        "ai-faq3-q": "Do I have to set it up myself?",
        "ai-faq3-a": "That's why we don't sell a \"box\". Our main principle is \"Turnkey Implementation\". During setup, we define with you 3-5 key qualification questions important for your business. The AI Manager will speak your language and solve your tasks.",
        "ai-faq-cat2": "Category 2: Technical Details",
        "ai-faq4-q": "How does the test drive work technically?",
        "ai-faq4-a": "You test one of our two starter products in real conditions. Either \"AI Manager for Website\" on your site, or \"AI Manager for Messengers\" in one of your channels (WhatsApp, TG). Test drive includes basic setup and lead delivery to Telegram or Email.",
        "ai-faq5-q": "Is it hard to connect?",
        "ai-faq5-a": "As simple as possible. We either do it for you via temporary guest access, or show you where to paste a few lines of code in a 5-minute call. No technical knowledge required from you.",
        "ai-faq6-q": "Will the bot annoy clients?",
        "ai-faq6-a": "No. On the contrary. Clients get an instant answer instead of waiting hours. Our \"AI Manager\" is trained to be polite, professional, and to the point. He is not a \"dumb bot\", but an effective consultant raising your service level.",
        "ai-faq-cat3": "Category 3: Money and Conditions",
        "ai-faq7-q": "Why is setup paid?",
        "ai-faq7-a": "Because it's not an \"installation\". It is \"turnkey\" consulting work. We spend our expert time analyzing your tasks and perfectly adapting the assistant to your business. It is also our filter to separate seriously interested clients.",
        "ai-faq8-q": "Who owns the leads?",
        "ai-faq8-a": "Only you. Always. We are just a tool for processing. All data, all leads belong to you.",
        "ai-faq9-q": "What if there is no result in 7 days?",
        "ai-faq9-a": "Excellent question. The test drive is not just a test, it's a free diagnosis. And it always has a positive result.<br><br><strong>Scenario 1:</strong> You get leads. Great, we proved the value.<br><br><strong>Scenario 2:</strong> You don't get leads. This is even more valuable. It means we found your real problem — not 'processing', but 'traffic generation'. You get a priceless diagnostic report. We have other solutions for that.",
        "ai-cta-title": "Didn't find your question?",
        "ai-cta-desc": "This means it's serious enough to discuss personally with the founder. The best way to get an answer is to apply for the free test drive.",
        "ai-form-offer": "First 7 days — Free",
        "ai-form-noobligation": "No obligations, payment data, or complex settings. Only results.",
        "form-label-contact": "1. Your contact (number / telegram / whatsapp)",
        "form-label-website": "2. Website for widget preparation",
        "form-label-delivery": "3. Where to send ready leads?",
        "form-delivery-email": "To my E-mail",
        "form-delivery-telegram": "To a separate Telegram group",
        "btn-signup": "Sign Up",
        "ai-cta-start-pilot": "START MY FREE PILOT",
        "ai-custom-pricing": "Custom Quote",
        "ai-custom-roi": "ROI: calculated for your case",
        "ai-additional-messenger": "Note: Each additional social network: +$55 / mo.",
        "ai-pricing-transparent-title": "Transparent Pricing",
        "ai-pricing-integration": "Integration",
        "ai-pricing-support": "Support",
        "ai-pricing-setup-desc": "$165 one-time",
        "ai-pricing-support-desc": "$165 / mo.",
        "form-placeholder-contact": "+373 67 732 256 or @username",
        "form-placeholder-website": "https://yoursite.com"
    },
    ro: {
        "nav-port": "Proiecte", "nav-services": "Servicii", "nav-ai-agent": "AI Agent", "nav-price": "Prețuri", "nav-contact": "Începe Proiect",
        "hero-label": "WEB DEVELOPMENT & AI 2026",
        "hero-h1-1": "Nu pierde <span style=\"color: var(--accent);\">bugetul.</span>", "hero-h1-2": "Investește în <span style=\"color: var(--accent);\">profit.</span>",
        "hero-desc": "Site-ul tău trebuie să facă bani. Creez sisteme care convertesc vizitatorii.",
        "btn-main": "Vezi Prețuri", "btn-chat": "Întreabă AI →",
        "phil-title": "Afacerile pierd 60% clienți<br>pe primul ecran.",
        "phil-p1": "În 2026 nu ai a doua șansă. Site lent? Design șablon? Clientul pleacă.",
        "stat-desc": "Timp pentru a capta atenția. Noi o facem în 0.5s.",
        "sol-title": "Arhitectură Hibridă", "sol-desc": "Ce e mai bun din CMS și cod curat.",
        "f1-t": "WordPress Core", "f1-d": "Admin ușor. Tu controlezi conținutul.",
        "f2-t": "Custom Frontend", "f2-d": "Cod curat. 100/100 viteză Google.",
        "f3-t": "Sales AI", "f3-d": "AI care încălzește clienții.",
        "tech-label": "Tehnologii Aplicate",
        "m1": "Creștere Lead-uri", "m2": "Încărcare", "m3": "Auto-Funnels",
        "port-title": "Proiecte Selectate", "port-card-desc": "DESIGN INOVATOR.", "port-card-desc1": "Site-ul barberului, vitrină de magazin - design și prototip de lucru finalizate în 4 ore.", "port-card-desc2": "Platforma de renovare cu consultant de design și alegerea meșterilor.", "port-card-desc3": "Schimb descentralizat cu farming de randament și pool-uri de staking.", "port-card-desc4": "Marketplace pentru saloane de frumusete cu rezervări și profiluri.", "port-card-desc5": "Platforma de servicii de detailing auto cu programare online.", "port-card-desc6": "Agent de filtrare lead-uri pentru site-uri cu calificare automată a clienților.",
        "ai-sec-title": "Cel mai bun angajat<br>care nu doarme.",
        "ai-sec-desc": "Agentul RAG știe prețurile tale. El consultă clienții și îți dă lead-ul gata.",
        "price-title": "Investiție",
        "p1-desc": "Landing Page rapid.", "p1-l1": "WordPress sau Cod", "p1-l2": "Adaptiv", "p1-l3": "Timp: 3-5 zile",
        "p2-desc": "Site Corporate / Magazin.", "p2-l1": "CMS + Design Custom", "p2-l2": "Animații", "p2-l3": "Timp: 7-14 zile",
        "p3-desc": "Automatizare Vânzări.", "p3-l1": "Chatbot RAG", "p3-l2": "Scenarii n8n", "p3-l3": "Suport Tehnic",
        "ai-box-label": "All-Inclusive Content",
        "ai-box-title": "Conținutul e grija mea.",
        "ai-box-desc": "Nu trebuie să angajezi copywriter sau designer. Folosesc AI Generativ și rețele neuronale avansate pentru a crea o identitate unică. Vom umple site-ul cu sensuri care vând și vizual care hipnotizează.",
        "faq-title": "Întrebări Frecvente",
        "faq-q1": "E nevoie de avans?", "faq-a1": "În prima etapă, creăm un prototip interactiv al viitorului site absolut gratuit. Avansul (50%) este necesar doar după ce vedeți structura, aprobați prototipul și sunteți gata să mergeți mai departe (semnăm un contract dacă este necesar). Acest lucru vă garantează transparență și siguranță la început.",
        "faq-q2": "Pot schimba ulterior textul și imaginile de pe site singur și să adaug conținut nou?", "faq-a2": "Da, prin admin WordPress ușor.",
        "faq-q3": "Dacă nu îmi place?", "faq-a3": "Revizuirile la prototip sunt gratuite.",
        "faq-q4": "Puteți instala automatizare pentru scrierea de conținut SEO?", "faq-a4": "Da, aceasta este una dintre direcțiile noastre principale. Implementăm sisteme AI care generează automat articole și descrieri de produse unice, optimizate SEO. Sistemul selectează singur subiecte relevante în nișa dvs., găsește cuvinte cheie și publică conținut care ajută site-ul să crească în căutări fără intervenția copywriterilor umani.",
        "faq-q5": "Ce este un Manager AI și de ce am nevoie de el?", "faq-a5": "Un Manager AI este angajatul tău virtual care lucrează 24/7 fără zile libere. Acesta răspunde instantaneu la întrebările clienților pe site, în Telegram sau WhatsApp, califică lead-urile și îți transmite doar clienții „fierbinți”, gata de cumpărare. Acest lucru permite să nu pierzi cererile nocturne și să îți eliberezi managerii de consultările de rutină.",
        "cta-title": "Nu mai pierde clienți.<br>Hai să lucrăm.",
        "btn-send": "Obține Consultație", "form-name": "Nume", "form-contact": "Telegram / WhatsApp", "chat-ask": "Pune o întrebare",
        "form-service-select": "Selectează serviciul (opțional)",
        "form-service-website": "Dezvoltare Site",
        "form-service-ai": "AI Agent pentru Afaceri",
        "form-service-automation": "Automatizare Procese",
        "form-service-consulting": "Consultație",
        "form-service-other": "Altele",
        "form-message": "Mesajul tău (opțional)",
        "contact-direct-btn": "Contactează Direct",
        "promo-1": "Pierzi clienți noaptea? 💤", "promo-2": "Captură lead-uri 24/7 fără greșeli 🎯", "promo-3": "Dă-i managerilor super putere 💪",
        "chat-header": "✨ Asistent AI", "chat-welcome": "◆ Bună ziua! Sunt consulatul tău AI personal\n\n◈ Te pot ajuta cu:\n<span style=\"color: var(--accent)\">✓</span> Răspunsuri la orice întrebări\n<span style=\"color: var(--accent)\">✓</span> Calcul cost proiect\n<span style=\"color: var(--accent)\">✓</span> Consultație profesională\n<span style=\"color: var(--accent)\">✓</span> Procesare comandă\n\n→ Ce te interesează?", "chat-placeholder": "Scrie-ți întrebarea...", "chat-footer": "Dezvoltat de Digital Architect",
        "port-title": "Proiecte Selectate",
        "port-h-1": "Neon Store",
        "port-desc-1": "Marketplace performant cu arhitectură hibridă și asistent AI integrat.",
        "port-h-2": "Barber Pro",
        "port-desc-2": "Automatizarea programărilor și sistem CRM creat special pentru industria beauty.",
        "port-h-3": "Vision Dashboard",
        "port-desc-3": "Interfață de monitorizare a proceselor de business cu analiză predictivă.",
        "port-page-title": "Portofoliu", "port-page-subtitle": "Toate Proiectele", "btn-order": "Comandă", "btn-all-projects": "Vezi Tot", "port-card-new1": "Agent AI Suport.", "port-card-new2": "Magazin Neon.", "port-card-new3": "Landing Page Avocat.", "port-card-new4": "CRM Panou Control.",
        "ai-hero-title": "ÎN TIMP CE CITEȘTI ASTA,<br>CONCURENȚA RĂSPUNDE DEJA CLIENTUL TĂU",
        "ai-hero-desc": "Conectăm o \"sită inteligentă\" care filtrează 24/7 \"doar întreb\" și îți livrează doar pe cei gata să plătească.",
        "ai-btn-trial": "Începe Testarea de 7 Zile",
        "ai-btn-how": "Cum funcționează →",
        "ai-hero-sub": "* Demonstrația AI Manager disponibilă în widget-ul de chat (WhatsApp / Telegram)",
        "ai-btn-pricing": "Vezi prețurile →",
        "ai-brain-label": "CĂLĂTORIA DE 7 ZILE",
        "ai-process-desc": "Creăm un chat Telegram personal pentru tine. Acesta este canalul tău direct de comunicare cu fondatorul proiectului.",
        "ai-process-desc-ext": "Lead-urile gata pregătite și filtrate vor ajunge automat în acest chat. Iar eu personal voi controla 3 etape cheie ale testului tău de 7 zile:",
        "ai-step1-title": "1 Lansare:",
        "ai-step1-desc": "Voi verifica dacă totul a pornit corect.",
        "ai-step2-title": "2. Rezultat Intermediar (după 3-4 zile):",
        "ai-step2-desc": "Voi oferi o scurtă analiză a primelor rezultate.",
        "ai-step3-title": "3. Raport Final:",
        "ai-step3-desc": "La sfârșitul celei de-a 7-a zile, voi pregăti concluzii complete pentru tine.",
        "ai-problem-title-bottom": "de pe site-ul tău nu ajung la vânzare?",
        "ai-prob1-title": "Prea lent",
        "ai-prob1-desc": "Clientul a scris noaptea. Managerul tău a răspuns dimineața. Un concurent cu AI Manager a răspuns în 20-25 de secunde. Clientul a cumpărat deja de la ei.",
        "ai-prob2-title": "Lead-uri necalificate",
        "ai-prob2-desc": "Cel mai bun vânzător al tău pierde 2 ore în dialoguri 'goale' cu cei care 'doar întreabă'. În acest timp, ar fi putut încheia o afacere reală. AI Manager-ul nostru preia tot gunoiul.",
        "ai-prob3-title": "Haos și confuzie",
        "ai-prob3-desc": "Cererile de pe site, WhatsApp, Telegram... Totul curge în locuri diferite și se pierde. <strong>AI Manager-ul nostru colectează lead-uri fierbinți din toate canalele într-un singur loc</strong> și le transmite managerilor tăi.",
        "ai-sol-label": "Soluție",
        "ai-solution-desc": "Conectăm un agent AI care trăiește pe site, în WhatsApp și Telegram. Se conectează la dialog în 2 ore (tehnic) și răspunde în 5 secunde.<br><br><strong>Nu doar răspunde la întrebări.</strong> El califică lead-ul (buget, timp, sarcină), filtrează necalificații și îți trimite în Telegram sau CRM doar pe cei gata să cumpere.",
        "ai-solution-bold": "Nu doar răspunde la întrebări.",
        "ai-roi": "ROI: de la prima tranzacție",
        "ai-btn-try-free": "Încearcă Gratuit",
        "ai-btn-purchase": "Cumpără",
        "ai-process-desc": "Creăm un chat Telegram personal pentru tine. Acesta este canalul tău direct de comunicare cu fondatorul proiectului.",
        "ai-process-desc-ext": "Lead-urile gata pregătite și filtrate vor ajunge automat în acest chat. Iar eu personal voi controla 3 etape cheie ale testului tău de 7 zile:",
        "ai-step1-title": "1 Lansare:",
        "ai-step1-desc": "Voi verifica dacă totul a pornit corect.",
        "ai-step2-title": "2. Rezultat Intermediar (după 3-4 zile):",
        "ai-step2-desc": "Voi oferi o scurtă analiză a primelor rezultate.",
        "ai-step3-title": "3. Raport Final:",
        "ai-step3-desc": "La sfârșitul celei de-a 7-a zile, voi pregăti concluzii complete pentru tine.",
        "ai-founder-msg": "\"Fără manageri și telefoane stricate. Cumperi nu doar un rezultat, ci și transparența procesului.\" — Alexander.",
        "ai-pricing-title": "Produsele Noastre: Soluții AI Gata pentru Creșterea Ta.",
        "ai-prod1-title": "Manager AI pentru Site",
        "ai-prod1-desc": "Produsul nostru principal. Transformă site-ul tău într-un angajat 24/7 care filtrează cererile 'gunoi' și transmite lead-urile 'fierbinți' managerilor tăi.",
        "ai-prod1-price": "$100 / lună + $165 implementare unică",
        "ai-features-title": "Ce include soluția:",
        "ai-prod1-f1": "- Widget AI text pentru site-ul tău.",
        "ai-prod1-f2": "- Implementare \"la cheie\": configurăm și lansăm totul pentru tine.",
        "ai-prod1-f3": "- Adaptare pentru afacerea ta: 3-5 întrebări cheie de filtrare.",
        "ai-prod1-f4": "- Integrare cu Telegram sau Email.",
        "ai-prod1-roi": "ROI: de la prima tranzacție*",
        "ai-btn-try": "Încearcă Gratuit",
        "ai-prod2-title": "Manager AI pentru Messenger",
        "ai-prod2-desc": "Același 'creier inteligent', dar pentru rețelele tale sociale. Transformă haosul din WhatsApp sau Telegram într-un flux ordonat de lead-uri calde.",
        "ai-prod2-price": "$100 / lună + $165 implementare unică",
        "ai-prod2-add": "Fiecare rețea socială suplimentară: +$55 / lună.",
        "ai-prod2-f1": "- Integrare cu 1 messenger la alegere (WhatsApp sau Telegram).",
        "ai-prod2-f2": "- Implementare \"la cheie\": ne ocupăm în totalitate de partea tehnică.",
        "ai-prod2-f3": "- Adaptare pentru afacerea ta: 3-5 întrebări cheie de filtrare.",
        "ai-prod2-f4": "- Integrare cu CRM / Telegram / Email pentru lead-uri fierbinți.",
        "ai-prod2-roi": "Cel mai vândut",
        "ai-prod2-tg-example": "🤖 Vezi exemplu TG",
        "ai-btn-buy": "Cumpără",
        "ai-prod3-title": "Dezvoltare Individuală",
        "ai-prod3-desc": "Scenarii/surse non-standard, reguli unice. Brief separat, sarcini unice.",
        "ai-prod3-price": "Preț: Ofertă Personalizată (individual)",
        "ai-prod3-roi": "ROI: calculat pentru cazul tău*",
        "ai-btn-discuss": "Discută",
        "ai-cta-pilot": "LANSEAZĂ PILOTUL MEU GRATUIT",
        "ai-faq-title": "Întrebări Frecvente",
        "ai-faq-cat1": "Categoria 1: Proces și Rezultate",
        "ai-faq1-q": "Există vreo capcană?",
        "ai-faq1-a": "Nu există capcane. Există un test-drive gratuit de 7 zile. Nu cerem să ne credeți pe cuvânt. Vă oferim să verificați în practică. Suntem încrezători în produsul nostru, așa că vă oferim oportunitatea de a-l testa în luptă reală pe site-ul vostru fără riscuri.",
        "ai-faq2-q": "Se va amortiza?",
        "ai-faq2-a": "Da. \"Managerul nostru AI\" costă de 2-3 ori mai puțin decât salariul unui manager junior, dar lucrează 24/7. În nișa ta, un client 'prins', pe care altfel l-ai fi pierdut, acoperă complet costul serviciului pentru câteva luni înainte. Test-drive-ul este creat tocmai pentru ca tu să te convingi singur.",
        "ai-faq3-q": "Trebuie să configurez singur?",
        "ai-faq3-a": "Tocmai de aceea nu vindem o \"cutie\". Principiul nostru principal este \"Implementare la cheie\". În etapa de configurare, definim împreună cu tine 3-5 întrebări cheie de calificare importante pentru afacerea ta. Managerul AI va vorbi limba ta și va rezolva sarcinile tale.",
        "ai-faq-cat2": "Categoria 2: Detalii Tehnice",
        "ai-faq4-q": "Cum funcționează tehnic test-drive-ul?",
        "ai-faq4-a": "Testezi unul dintre cele două produse de start în condiții reale. Fie \"Manager AI pentru Site\" pe site-ul tău, fie \"Manager AI pentru Messenger\" într-unul din canalele tale (WhatsApp, TG). Test-drive-ul include configurarea de bază și livrarea lead-urilor pe Telegram sau Email.",
        "ai-faq5-q": "Este greu de conectat?",
        "ai-faq5-a": "Cât se poate de simplu. Fie o facem noi pentru tine prin acces temporar, fie îți arătăm într-un apel de 5 minute unde să inserezi câteva linii de cod. Nu sunt necesare cunoștințe tehnice din partea ta.",
        "ai-faq6-q": "Nu va enerva botul clienții?",
        "ai-faq6-a": "Nu. Dimpotrivă. Clienții primesc un răspuns instantaneu în loc să aștepte ore întregi. \"Managerul nostru AI\" este instruit să fie politicos, profesionist și scurt. Nu este un \"bot prost\", ci un consultant eficient care îți ridică nivelul serviciilor.",
        "ai-faq-cat3": "Categoria 3: Bani și Condiții",
        "ai-faq7-q": "De ce implementarea este plătită?",
        "ai-faq7-a": "Pentru că nu este o \"instalare\". Este o muncă de consultanță \"la cheie\". Ne petrecem timpul expert analizând sarcinile tale și adaptând perfect asistentul la afacerea ta. Este, de asemenea, filtrul nostru pentru a separa clienții serios interesați.",
        "ai-faq8-q": "Cui aparțin lead-urile?",
        "ai-faq8-a": "Doar ție. Întotdeauna. Noi suntem doar un instrument de procesare. Toate datele, toate lead-urile îți aparțin.",
        "ai-faq9-q": "Ce se întâmplă dacă nu există rezultate în 7 zile?",
        "ai-faq9-a": "O întrebare excelentă. Test-drive-ul nu este doar un test, este o diagnoză gratuită. Și are întotdeauna un rezultat pozitiv.<br><br><strong>Scenariul 1:</strong> Primești lead-uri. Super, am dovedit valoarea.<br><br><strong>Scenariul 2:</strong> Nu primești lead-uri. Acest lucru este și mai valoros. Înseamnă că am găsit adevărata ta problemă — nu 'procesarea', ci 'generarea' de trafic. Primești un raport de diagnosticare neprețuit. Avem alte soluții pentru asta.",
        "ai-cta-title": "Nu ai găsit întrebarea ta?",
        "ai-cta-desc": "Asta înseamnă că este suficient de serioasă pentru a o discuta personal cu fondatorul. Cel mai bun mod de a primi un răspuns este să te înscrii la test-drive-ul gratuit.",
        "ai-form-offer": "Primele 7 zile — Gratuit",
        "ai-form-noobligation": "Fără obligații, date de plată sau setări complexe. Doar rezultate.",
        "form-label-contact": "1. Contactul tău (număr / telegram / whatsapp)",
        "form-label-website": "2. Site-ul pentru pregătirea widget-ului",
        "form-label-delivery": "3. Unde trimitem lead-urile gata?",
        "form-delivery-email": "Pe E-mail-ul meu",
        "form-delivery-telegram": "Într-un grup Telegram separat",
        "btn-signup": "Înscrie-te",
        "ai-cta-start-pilot": "LANSEAZĂ PILOTUL MEU GRATUIT",
        "ai-custom-pricing": "Ofertă Personalizată",
        "ai-custom-roi": "ROI: calculat pentru cazul tău",
        "ai-additional-messenger": "Notă: Fiecare rețea socială suplimentară: +$55 / lună.",
        "ai-pricing-transparent-title": "Preț Transparent",
        "ai-pricing-integration": "Implementare",
        "ai-pricing-support": "Suport",
        "ai-pricing-setup-desc": "$165 o dată",
        "ai-pricing-support-desc": "$165 / lună",
        "form-placeholder-contact": "+373 67 732 256 sau @username",
        "form-placeholder-website": "https://siteulta.com"
    }
};

function changeLang(lang) {
    localStorage.setItem('language', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            const text = translations[lang][key];
            // Handle line breaks for chat messages
            if (el.id === 'chat-body' || el.className.includes('bot-msg')) {
                el.innerHTML = text.replace(/\\n/g, '<br>');
            } else {
                el.innerHTML = text;
            }
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    displayWelcomeMessage();

    // Update promo badge text on language change
    const promoText = document.getElementById('promo-text');
    if (promoText) {
        const currentKey = ['promo-1', 'promo-2', 'promo-3'][0];
        const text = translations[lang][currentKey] || translations['ru'][currentKey];
        promoText.textContent = text;
    }

    // Update portfolio cards language if function exists
    if (typeof updatePortfolioLanguage === 'function') {
        updatePortfolioLanguage(lang);
    }
}

function toggleChat() {
    const chat = document.getElementById('chatbot-widget');
    chat.classList.toggle('active');
}


// Auto-open chat on 50% scroll marker will be created in DOMContentLoaded
window.chatOpenedOnScroll = false;

// Generate or retrieve a unique session ID for the user
function getSessionId() {
    let sessionId = localStorage.getItem('chat_session_id');
    if (!sessionId) {
        sessionId = 'session-' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('chat_session_id', sessionId);
    }
    return sessionId;
}

async function sendMessage() {
    const input = document.getElementById('chat-input');
    const body = document.getElementById('chat-body');
    const msg = input.value;
    if (msg.trim() === '') return;

    // Add user message
    const userDiv = document.createElement('div');
    userDiv.className = 'user-msg';
    userDiv.textContent = msg; // use textContent for safety
    body.appendChild(userDiv);
    input.value = '';

    // Auto scroll to bottom
    body.scrollTop = body.scrollHeight;

    // Add loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'bot-msg loading';
    loadingDiv.innerHTML = '<span class="typing-dot">.</span><span class="typing-dot">.</span><span class="typing-dot">.</span>';
    body.appendChild(loadingDiv);
    body.scrollTop = body.scrollHeight;

    try {
        // Production webhook URL for n8n "Rag Sale" workflow
        const WEBHOOK_URL = 'https://auto.amz-creator.com/webhook/chat-lead-gen';

        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'sendMessage',
                chatInput: msg,
                sessionId: getSessionId()
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Log response for debugging
        console.log('n8n Response:', data);

        // Remove loading indicator
        if (body.contains(loadingDiv)) {
            body.removeChild(loadingDiv);
        }

        // Add bot response
        const botDiv = document.createElement('div');
        botDiv.className = 'bot-msg';

        // Handle various n8n output formats
        let botText = null;

        // Try different response formats
        if (data.output) {
            botText = data.output;
        } else if (data.text) {
            botText = data.text;
        } else if (data.message) {
            botText = data.message;
        } else if (data.response) {
            botText = data.response;
        } else if (typeof data === 'string') {
            botText = data;
        } else if (Array.isArray(data) && data.length > 0) {
            // Handle array responses
            botText = data[0].output || data[0].text || data[0].message || JSON.stringify(data[0]);
        } else {
            // Last resort: stringify the entire response
            console.warn('Unknown response format:', data);
            botText = JSON.stringify(data);
        }

        // Convert newlines to <br> for display
        botDiv.innerHTML = botText.replace(/\n/g, '<br>');

        body.appendChild(botDiv);

    } catch (error) {
        console.error('Chat Error:', error);

        // Remove loading indicator if present
        if (body.contains(loadingDiv)) {
            body.removeChild(loadingDiv);
        }

        const errorDiv = document.createElement('div');
        errorDiv.className = 'bot-msg error';
        errorDiv.textContent = 'Извините, сейчас я не могу ответить. Пожалуйста, попробуйте позже.';
        errorDiv.style.color = '#ff6b6b';
        body.appendChild(errorDiv);
    }

    body.scrollTop = body.scrollHeight;
}

// Function to display translated welcome message with line breaks
function displayWelcomeMessage() {
    const key = 'chat-welcome';
    const currentLang = localStorage.getItem('language') || 'ru';
    const welcomeText = translations[currentLang][key] || translations['ru'][key];
    const chatBody = document.getElementById('chat-body');

    if (chatBody) {
        const botDiv = chatBody.querySelector('.bot-msg');
        if (botDiv) {
            botDiv.innerHTML = welcomeText.replace(/\\n/g, '<br>');
        }
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

const images = [];
const airbnb = { frame: 0 };

function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('hide');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }
}

function showLoader() {
    let loader = document.getElementById('loader');
    if (!loader) {
        // Re-create loader if it was removed
        const loaderHTML = `
            <div id="loader">
                <div class="loader-content">
                    <div class="brand-font">Digital.</div>
                    <div class="progress-bar">
                        <div id="progress" style="width: 100%"></div>
                    </div>
                </div>
            </div>`;
        document.body.insertAdjacentHTML('afterbegin', loaderHTML);
        loader = document.getElementById('loader');
    }
    loader.style.display = 'flex';
    loader.classList.remove('hide');
    loader.classList.add('show');
}

function preloadImages() {
    let loaded = 0;
    const updateProgress = () => {
        loaded++;
        const p = Math.floor((loaded / frameCount) * 100);
        const bar = document.getElementById('progress');
        const txt = document.getElementById('percent');
        if (bar) bar.style.width = p + '%';
        if (txt) txt.innerText = p + '%';
        if (loaded === frameCount) {
            hideLoader();
        }
    };
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = updateProgress;
        img.onerror = updateProgress;
        images.push(img);
    }
}

function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
}

function render() {
    if (!canvas || !ctx) return;
    const img = images[airbnb.frame];
    if (img && img.complete && img.naturalHeight !== 0) {
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }
}

window.addEventListener('scroll', () => {
    if (!canvas) return;
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = maxScroll > 0 ? scrollTop / maxScroll : 0;
    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount * 1.5));
    airbnb.frame = frameIndex;
    requestAnimationFrame(render);
}, { passive: true });

// Only preload parallax images if canvas exists
if (canvas) {
    // Быстрая загрузка без ожидания всех кадров
    // Загружаем только первые несколько кадров для плавного старта
    let loaded = 0;
    const quickLoadCount = 10; // Загружаем только 10 кадров для быстрого старта

    const updateProgress = () => {
        loaded++;
        const p = Math.floor((loaded / quickLoadCount) * 100);
        const bar = document.getElementById('progress');
        if (bar) bar.style.width = p + '%';
        if (loaded === quickLoadCount) {
            hideLoader();
            // Загружаем остальные кадры в фоне
            for (let i = quickLoadCount; i < frameCount; i++) {
                const img = new Image();
                img.src = currentFrame(i);
                images.push(img);
            }
        }
    };

    // Загружаем только первые кадры
    for (let i = 0; i < quickLoadCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = updateProgress;
        img.onerror = updateProgress; // Продолжаем даже при ошибке
        images.push(img);
    }

    window.addEventListener('resize', resizeCanvas, { passive: true });
    resizeCanvas();
} else {
    // No canvas - hide loader immediately
    setTimeout(hideLoader, 300);
}

// Set default language and display welcome message and setup chat observer
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'ru';
    displayWelcomeMessage();

    // Add Enter key handler for chat input
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); // Prevent form submission if inside a form
                sendMessage();
            }
        });
    }

    // Link click interceptor for page transitions
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link &&
            link.href &&
            link.href.includes(window.location.origin) &&
            !link.href.includes('#') &&
            link.target !== '_blank') {

            e.preventDefault();
            const destination = link.href;
            showLoader();
            setTimeout(() => {
                window.location.href = destination;
            }, 600);
        }
    });

    // Setup promo badge text rotation
    let promoIndex = 0;
    const promoTexts = ['promo-1', 'promo-2', 'promo-3'];
    function updatePromoBadge() {
        const currentLang = localStorage.getItem('language') || 'ru';
        const key = promoTexts[promoIndex];
        const text = translations[currentLang][key] || translations['ru'][key];
        const promoText = document.getElementById('promo-text');
        if (promoText) {
            promoText.textContent = text;
        }
        promoIndex = (promoIndex + 1) % promoTexts.length;
    }
    updatePromoBadge();
    setInterval(updatePromoBadge, 4000);

    // Setup IntersectionObserver for chat auto-open at 50% scroll
    const observerOptions = {
        threshold: 0.5
    };
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !window.chatOpenedOnScroll) {
                window.chatOpenedOnScroll = true;
                const chat = document.getElementById('chatbot-widget');
                if (chat && !chat.classList.contains('active')) {
                    chat.classList.add('active');
                }
            }
        });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const marker = document.getElementById('scroll-marker-50');
    if (marker) {
        observer.observe(marker);
    }
});

// --- ЗАЩИТА ---
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('dragstart', event => event.preventDefault());
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 123) { event.preventDefault(); return false; }
    if (event.ctrlKey && event.shiftKey && (event.keyCode == 73 || event.keyCode == 74)) { event.preventDefault(); return false; }
    if (event.ctrlKey && event.keyCode == 85) { event.preventDefault(); return false; }
});

// FAQ Accordion logic
function toggleAccordion(header) {
    const item = header.parentElement;
    const body = item.querySelector('.faq-acc-body');
    const content = item.querySelector('.faq-acc-content');

    // Close all other accordions
    document.querySelectorAll('.faq-acc-item').forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            const otherBody = otherItem.querySelector('.faq-acc-body');
            if (otherBody) otherBody.style.maxHeight = null;
        }
    });

    // Toggle current accordion
    item.classList.toggle('active');

    if (item.classList.contains('active')) {
        body.style.maxHeight = content.scrollHeight + 'px';
    } else {
        body.style.maxHeight = null;
    }
}
// Mobile Menu Logic
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerBtn = document.querySelector('.burger-btn');

    if (mobileMenu && burgerBtn) {
        mobileMenu.classList.toggle('active');
        burgerBtn.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

// Close mobile menu when a link is clicked
document.addEventListener('DOMContentLoaded', () => {
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMobileMenu();
        });
    });

    // Close mobile menu when clicking on the overlay (outside menu content)
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', (e) => {
            // Only close if clicking directly on the overlay, not on its children
            if (e.target === mobileMenu) {
                toggleMobileMenu();

            }
        });
    }
});

// ============================================
// TELEGRAM INTEGRATION
// ============================================

// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = '8561438050:AAFhmp8i4IffhhWQZY1Ban3B7PU33nBv5Qc';
const TELEGRAM_CHAT_ID = '6608289488';

// Function to get page source name
function getPageSource() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);

    if (filename === 'index.html' || filename === '' || filename === '/') {
        return '🏠 Главная страница';
    } else if (filename === 'portfolio.html') {
        return '💼 Страница портфолио';
    } else if (filename === 'ai-agent.html') {
        return '🤖 Страница AI Agent';
    } else {
        return `📄 ${filename}`;
    }
}

// Function to send message to Telegram
async function sendToTelegram(name, contact, pageSource, service = '', message = '') {
    // Service name mapping
    const serviceNames = {
        'website': 'Разработка сайта',
        'ai-agent': 'AI Agent для бизнеса',
        'automation': 'Автоматизация процессов',
        'seo': 'SEO продвижение',
        'consulting': 'Консультация',
        'other': 'Другое'
    };

    let telegramMessage = `🔔 <b>Новая заявка с сайта!</b>

📄 <b>Страница:</b> ${pageSource}
👤 <b>Имя:</b> ${name}
📱 <b>Контакт:</b> ${contact}`;

    // Add service if provided
    if (service) {
        const serviceName = serviceNames[service] || service;
        telegramMessage += `\n🎯 <b>Услуга:</b> ${serviceName}`;
    }

    // Add message if provided
    if (message) {
        telegramMessage += `\n💬 <b>Сообщение:</b> ${message}`;
    }

    telegramMessage += `\n⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU', {
        timeZone: 'Europe/Chisinau',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })}`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: telegramMessage,
                parse_mode: 'HTML'
            })
        });

        if (!response.ok) {
            throw new Error(`Telegram API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        throw error;
    }
}

// Form submission handler
document.addEventListener('DOMContentLoaded', () => {
    const leadForms = document.querySelectorAll('#lead-form');

    leadForms.forEach(form => {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            // Get form data
            const formData = new FormData(this);
            const inputs = this.querySelectorAll('input[type="text"]');

            // Check for honeypot (bot protection)
            if (formData.get('bot-field')) {
                console.log('Bot detected, submission blocked');
                return;
            }

            // Extract form data using name attributes
            const name = formData.get('name') || '';
            const contact = formData.get('contact') || '';
            const service = formData.get('service') || '';
            const message = formData.get('message') || '';

            if (!name || !contact) {
                alert('Пожалуйста, заполните все поля');
                return;
            }

            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = '⏳ Отправка...';

            try {
                // Get page source
                const pageSource = getPageSource();

                // Send to Telegram with optional fields
                await sendToTelegram(name, contact, pageSource, service, message);

                // Success feedback
                submitButton.textContent = '✅ Отправлено!';
                submitButton.style.background = '#22c55e';

                // Reset form
                this.reset();

                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.textContent = originalButtonText;
                    submitButton.style.background = '';
                    submitButton.disabled = false;
                }, 3000);

            } catch (error) {
                console.error('Form submission error:', error);

                // Error feedback
                submitButton.textContent = '❌ Ошибка, попробуйте снова';
                submitButton.style.background = '#ef4444';

                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.textContent = originalButtonText;
                    submitButton.style.background = '';
                    submitButton.disabled = false;
                }, 3000);
            }
        });
    });
});

// ========================================
// Contact Direct Widget Logic
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    const contactBtn = document.getElementById('contactDirectBtn');
    const contactMenu = document.getElementById('contactDirectMenu');

    if (contactBtn && contactMenu) {
        // Toggle menu on button click
        contactBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            contactBtn.classList.toggle('active');
            contactMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!contactBtn.contains(e.target) && !contactMenu.contains(e.target)) {
                contactBtn.classList.remove('active');
                contactMenu.classList.remove('active');
            }
        });

        // Close menu when clicking on a contact option
        const contactOptions = contactMenu.querySelectorAll('.contact-option');
        contactOptions.forEach(option => {
            option.addEventListener('click', function () {
                contactBtn.classList.remove('active');
                contactMenu.classList.remove('active');
            });
        });
    }
});
