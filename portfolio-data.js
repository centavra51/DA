// Portfolio cards data
// To add a new project, simply add a new object to this array
const portfolioData = [
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
        link: '#',
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
        link: '#',
        gridArea: 'pink', // Uses area-pink class
        size: 'medium',
        gradient: true
    },
    {
        id: 'coffe',
        title: {
            ru: 'Crypto Dash',
            en: 'Crypto Dash',
            ro: 'Crypto Dash'
        },
        category: 'DEFI',
        description: {
            ru: 'Децентрализованная биржа с фарминг и стейкинг пулами.',
            en: 'Decentralized exchange with yield farming and staking pools.',
            ro: 'Schimb descentralizat cu farming și staking pools.'
        },
        image: 'images/coffe.webp',
        link: '#',
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
        link: '#',
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
        image: 'images/deteil.webp',
        link: '#',
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
            ru: 'WordPress + Elementor',
            en: 'WordPress + Elementor',
            ro: 'WordPress + Elementor'
        },
        category: 'WEB DEVELOPMENT',
        description: {
            ru: 'Разработка сайтов на WordPress с помощью Elementor - быстро, красиво, функционально.',
            en: 'WordPress website development with Elementor - fast, beautiful, functional.',
            ro: 'Dezvoltare site-uri WordPress cu Elementor - rapid, frumos, funcțional.'
        },
        image: 'images/beauty.webp', // Temporary placeholder - replace with wordpress-elementor.webp
        link: '#',
        gridArea: 'auto',
        size: 'medium'
    },


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
