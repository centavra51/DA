// Portfolio cards data
// To add a new project, simply add a new object to this array
const portfolioData = [
      {
        id: 'Premium-Lending',
        title: {
            ru: 'Premium Studio',
            en: 'Premium Studio',
            ro: 'Premium Studio'
        },
        category: {
            ru: 'VibeCoding',
            en: 'VibeCoding',
            ro: 'VibeCoding'
        },
        description: {
            ru: 'Лендинг для услуг Дизайн студии.',
            en: 'Landing page for Design Studio .',
            ro: 'Landing page pentru servicii Design Studio.'
        },
        image: 'images/premium 1.webp',
        link: 'https://preumium.vercel.app/',
        gridArea: 'auto',
        size: 'medium'
    },

    {
        id: 'barber',
        title: {
            ru: 'Barber Pro',
            en: 'Barber Pro',
            ro: 'Barber Pro'
        },
        category: 'E-COMMERCE',
        description: {
            ru: 'Веб-сайт барбершоп, витрина магазина - дизайн и рабочий прототип, выполненные за 4 часа.',
            en: 'Barbershop website, store showcase - design and working prototype completed in 4 hours.',
            ro: 'Site-ul barberului, vitrină de magazin - design și prototip de lucru finalizate în 4 ore.'
        },
        image: 'images/barber.webp',
        link: 'https://da.amz-creator.com/works/barber/',
        gridArea: 'main', // Uses area-main class for large card
        size: 'large'
    },
    {
        id: 'renovation',
        title: {
            ru: 'TM™',
            en: 'TM™',
            ro: 'TM™'
        },
        category: 'RENOVATIONS',
        description: {
            ru: 'Платформа ремонта квартир с дизайном и выбором мастеров.',
            en: 'Interior renovation platform with design consultation and contractors.',
            ro: 'Platforma de renovare cu consultant de design și alegerea meșterilor.'
        },
        image: 'images/renovation.webp',
        link: 'https://da.amz-creator.com/works/remont/1/',
        gridArea: 'pink', // Uses area-pink class
        size: 'medium',
        gradient: true
    },
    {
        id: 'coffe',
        title: {
            ru: 'Coffee Shop',
            en: 'Coffee Shop',
            ro: 'Coffee Shop'
        },
        category: 'COFFEE SHOP',
        description: {
            ru: 'современный онлайн-магазин кофе с чистым, минималистичным дизайном и акцентом на продукт.',
            en: 'A modern online coffee shop with a clean, minimalistic design and focus on the product.',
            ro: 'Un magazin online de cafea modern, cu un design curat și minimalist, cu accent pe produs.'
        },
        image: 'images/coffe.webp',
        link: 'https://da.amz-creator.com/works/coffe/',
        gridArea: 'wide', // Uses area-wide class
        size: 'large'
    },
    {
        id: 'beauty',
        title: {
            ru: 'BeautyHub',
            en: 'BeautyHub',
            ro: 'BeautyHub'
        },
        category: 'BEAUTY',
        description: {
            ru: 'Маркетплейс салонов красоты с бронированием и профилями.',
            en: 'Beauty salon marketplace with booking and customer profiles.',
            ro: 'Marketplace pentru saloane de frumusete cu rezervări și profiluri.'
        },
        image: 'images/beauty.webp',
        link: 'https://da.amz-creator.com/works/beauty/',
        gridArea: 'std', // Uses area-std class
        size: 'medium'
    },
    {
        id: 'detailing',
        title: {
            ru: 'AutoDetail',
            en: 'AutoDetail',
            ro: 'AutoDetail'
        },
        category: 'DETAILING',
        description: {
            ru: 'Платформа услуг автодетейлинга с онлайн личным расписанием.',
            en: 'Professional car detailing service platform with scheduling.',
            ro: 'Platforma de servicii de detailing auto cu programare online.'
        },
        image: 'images/deteilru.webp',
        link: 'https://car-stile.ru/',
        gridArea: 'tech', // Uses area-tech class
        size: 'medium',
        gray: true
    },
    {
        id: 'support-bot',
        title: {
            ru: 'AI Sales Agent',
            en: 'AI Sales Agent',
            ro: 'AI Sales Agent'
        },
        category: 'AI AGENT',
        description: {
            ru: 'Агент для фильтрации лидов на сайте с автоматической квалификацией клиентов.',
            en: 'Agent for filtering leads on the site with automatic client qualification.',
            ro: 'Agent pentru filtrarea lead-urilor pe site cu calificarea automată a clienților.'
        },
        image: 'images/AiSalesAgent.webp',
        link: 'ai-agent.html',
        gridArea: 'auto', // Standard grid auto placement
        size: 'medium'
    },
    {
        id: 'wordpress-elementor',
        title: {
            ru: 'Амазон креатор',
            en: 'Amazon Creator',
            ro: 'Amazon Creator'
        },
        category: {
            ru: 'КАСТОМНЫЙ КОД',
            en: 'CUSTOM CODE',
            ro: 'COD PERSONALIZAT'
        },
        description: {
            ru: 'Лендинг для услуг Amazon Creator, с AI-чатом 24/7.',
            en: 'Landing page for Amazon Creator services with a 24/7 AI chat.',
            ro: 'Landing page pentru servicii Amazon Creator, cu chat AI 24/7.'
        },
        image: 'images/amzcreat.webp',
        link: 'https://amz-creator.com/',
        gridArea: 'auto',
        size: 'medium'
    },
    {
    id: 'Contractor-Service',
    title: {
        ru: 'Сервис мастеров',
        en: 'Contractor Services',
        ro: 'Servicii Meșteri'
    },
    category: {
        ru: 'VibeCoding',
        en: 'VibeCoding',
        ro: 'VibeCoding'
    },
    description: {
        ru: 'Лендинг для сервиса подрядчиков и мастеров различных услуг.',
        en: 'Landing page for contractor and home service providers.',
        ro: 'Landing page pentru servicii de meșteri și contractori.'
    },
    image: 'images/service.webp',
    link: 'https://service-lemon-two.vercel.app/',
    gridArea: 'auto',
    size: 'medium'
},

{
    id: 'Plumber-SEO',
    title: {
        ru: 'Сантехник SEO',
        en: 'Plumber SEO Landing',
        ro: 'Landing SEO Instalator'
    },
    category: {
        ru: 'VibeCoding',
        en: 'VibeCoding',
        ro: 'VibeCoding'
    },
    description: {
        ru: 'Лендинг для мастера-сантехника с десятью SEO-оптимизированными страницами.',
        en: 'Landing page for a plumber with 10 SEO optimized pages.',
        ro: 'Landing page pentru instalator cu 10 pagini optimizate SEO.'
    },
    image: 'images/santehnic.webp',
    link: 'https://santehnic.vercel.app/',
    gridArea: 'auto',
    size: 'medium'
},

{
    id: 'Electrician-Pro',
    title: {
        ru: 'Электрик PRO',
        en: 'Electrician PRO',
        ro: 'Electrician PRO'
    },
    category: {
        ru: 'VibeCoding',
        en: 'VibeCoding',
        ro: 'VibeCoding'
    },
    description: {
        ru: 'Лендинг для электрика с SEO-страницами, калькулятором услуг, виджетами и формой заказа.',
        en: 'Landing page for an electrician with SEO pages, service calculator, widgets and order form.',
        ro: 'Landing page pentru electrician cu pagini SEO, calculator servicii, widget și formular comandă.'
    },
    image: 'images/prewiuelectric.webp',
    link: 'https://electric-eta.vercel.app/',
    gridArea: 'auto',
    size: 'medium'
}
    


    // ========================================
    // ДОБАВЛЯЙТЕ НОВЫЕ ПРОЕКТЫ ЗДЕСЬ:
    // ========================================
    // {
    //     id: 'unique-id',
    //     title: {
    //         ru: 'Название на русском',
    //         en: 'Title in English',
    //         ro: 'Titlu în română'
    //     },
    //     category: 'CATEGORY NAME',
    //     description: {
    //         ru: 'Описание на русском',
    //         en: 'Description in English',
    //         ro: 'Descriere în română'
    //     },
    //     image: 'images/your-image.webp', // or null for placeholder
    //     link: '#',
    //     gridArea: 'auto', // auto | main | pink | wide | std | tech | item5-8
    //     size: 'medium', // small | medium | large
    //     gradient: false, // true for pink gradient background
    //     gray: false // true for gray background
    // },
];
