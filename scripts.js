document.addEventListener('DOMContentLoaded', () => {
    console.log('Weekend Circle initialized');
    
    // Dynamic element centering
    const container = document.querySelector('.container');
    const centerContent = () => {A
        const windowHeight = window.innerHeight;
        const contentHeight = container.offsetHeight;
        container.style.marginTop = `${Math.max(0, (windowHeight - contentHeight)/2)}px`;
    };
    
    centerContent();
    window.addEventListener('resize', centerContent);
});
