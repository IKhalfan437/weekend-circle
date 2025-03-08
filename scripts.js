document.addEventListener('DOMContentLoaded', () => {
    // Dynamic vertical centering
    const container = document.querySelector('.container');
    const centerContent = () => {
        const windowHeight = window.innerHeight;
        const contentHeight = container.offsetHeight;
        container.style.marginTop = `${Math.max(0, (windowHeight - contentHeight)/2)}px`;
    };
    
    // Initial centering
    centerContent();
    window.addEventListener('resize', centerContent);

    // Add hover effect to info card
    const infoCard = document.querySelector('.info-card');
    if(infoCard) {
        infoCard.addEventListener('mouseenter', () => {
            infoCard.style.transform = 'translateY(-5px)';
            infoCard.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)';
        });
        
        infoCard.addEventListener('mouseleave', () => {
            infoCard.style.transform = 'translateY(0)';
            infoCard.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
        });
    }
});
