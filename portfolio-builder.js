// Portfolio card renderer
function renderPortfolioCards() {
    const container = document.getElementById('portfolio-cards-container');
    if (!container) return;

    const currentLang = localStorage.getItem('language') || 'ru';

    container.innerHTML = ''; // Clear existing content

    portfolioData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'bento-item';

        // Add grid area class if specified
        if (project.gridArea && project.gridArea !== 'auto') {
            card.classList.add('area-' + project.gridArea);
        }

        // Add special classes
        if (project.gradient) {
            card.classList.add('item-pink-gradient');
        }
        if (project.gray) {
            card.classList.add('item-gray');
        }

        // Add background image if available
        if (project.image) {
            card.style.backgroundImage = `url('${project.image}')`;
        } else {
            // Placeholder for projects without images
            card.style.background = '#1a1a1a';
            const placeholder = document.createElement('div');
            placeholder.className = 'item-gray';
            placeholder.style.cssText = 'width:100%; height:100%; display:flex; align-items:center; justify-content:center;';
            placeholder.innerHTML = '<h3 style="color:rgba(255,255,255,0.1);">Coming Soon</h3>';
            card.appendChild(placeholder);
        }

        // Create card link
        const link = document.createElement('a');
        link.href = project.link;
        link.className = 'bento-card-link';

        const categoryText = typeof project.category === 'object'
            ? (project.category[currentLang] || project.category.ru || '')
            : (project.category || '');

        // Create overlay with description
        const overlay = document.createElement('div');
        overlay.className = 'bento-overlay';
        overlay.innerHTML = `
            <span class="tech-tag">${categoryText}</span>
            <h3>${project.title[currentLang] || project.title.ru}</h3>
            <p class="small-desc">${project.description[currentLang] || project.description.ru}</p>
        `;

        link.appendChild(overlay);
        // link.appendChild(neonHover); // Removed hover effect
        card.appendChild(link);
        container.appendChild(card);
    });

    // Apply translations to newly created elements
    if (typeof changeLang === 'function') {
        document.querySelectorAll('[data-i18n="btn-order"]').forEach(el => {
            const key = 'btn-order';
            if (translations[currentLang] && translations[currentLang][key]) {
                el.innerText = translations[currentLang][key];
            }
        });
    }
}

// Update cards when language changes
function updatePortfolioLanguage(lang) {
    const currentLang = lang || localStorage.getItem('language') || 'ru';

    portfolioData.forEach((project, index) => {
        const cards = document.querySelectorAll('.bento-item');
        if (cards[index]) {
            const overlay = cards[index].querySelector('.bento-overlay');
            if (overlay) {
                const tag = overlay.querySelector('.tech-tag');
                const title = overlay.querySelector('h3');
                const desc = overlay.querySelector('.small-desc');
                const categoryText = typeof project.category === 'object'
                    ? (project.category[currentLang] || project.category.ru || '')
                    : (project.category || '');
                if (tag) tag.textContent = categoryText;
                if (title) title.textContent = project.title[currentLang] || project.title.ru;
                if (desc) desc.textContent = project.description[currentLang] || project.description.ru;
            }

            // Removed neonHover update logic
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderPortfolioCards();
});
