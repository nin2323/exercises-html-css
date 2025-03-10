const card = document.querySelector('.card-mewtwo');

card.addEventListener('mousemove', (event) => {
    const cardPosition = card.getBoundingClientRect();

    let x = event.clientX - cardPosition.left;
    let y = event.clientY - cardPosition.top;
    
    const rotateX = ((y / cardPosition.height) - 0.5) * -60;
    const rotateY = ((x / cardPosition.width) - 0.5) * 60;

    const shadowX = (rotateY / 2); 
    const shadowY = (rotateX / 2);

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.3)`; // Aplica el box-shadow

});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    card.style.boxShadow = `none`; 
});



