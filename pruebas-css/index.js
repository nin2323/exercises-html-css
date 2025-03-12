// Mewtwo

const card = document.querySelector('.card-mewtwo');

card.addEventListener('mousemove', (event) => {
    const cardPosition = card.getBoundingClientRect();

    let x = event.clientX - cardPosition.left;
    let y = event.clientY - cardPosition.top;
    
    const rotateX = ((y / cardPosition.height) - 0.5) * -60;
    const rotateY = ((x / cardPosition.width) - 0.5) * 60;

    const shadowX = -(rotateY / 2); 
    const shadowY = (rotateX / 2);

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.71)`; // Aplica el box-shadow

    const glowX = -(rotateY / 2);
    const glowY = (rotateX / 2);

    const glow = `radial-gradient(circle at ${50 + glowX}% ${50 + glowY}%, 
                  rgba(238, 203, 8, 0.3), transparent 90%)`;

    // Aplicamos el brillo dinámico al pseudo-elemento ::after
    card.style.setProperty('--glow', glow);
    card.querySelector('::after').style.background = glow;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    card.style.boxShadow = `none`; 
    card.style.setProperty('--glow', 'transparent');
});

// Magikarp y Gyarados

const magikarp = document.querySelector('.card-magikarp');
const gyarados = document.querySelector('.card-gyarados')

magikarp.addEventListener('click', () => {
    magikarp.classList.toggle('hidden');
    gyarados.classList.toggle('hidden');
    magikarp.classList.add('explode');  
    gyarados.classList.add('explode');  
    setTimeout(() => {
        magikarp.classList.remove('explode');  
        gyarados.classList.remove('explode');  
    }, 1500);
});

gyarados.addEventListener('click', () => {
    magikarp.classList.toggle('hidden');
    gyarados.classList.toggle('hidden');
    magikarp.classList.add('explode');  
    gyarados.classList.add('explode');  
    setTimeout(() => {
        magikarp.classList.remove('explode');  
        gyarados.classList.remove('explode');  
    }, 1500);
});

// magikarp.addEventListener('click', ()=> {
//     magikarp.classList.toggle('hidden');
//     gyarados.classList.toggle('hidden');

//     // magikarp.style.transform = 'translateX(-300px) rotateY(90deg)';
//     // magikarp.style.opacity = '0';

//     // setTimeout(() => {
//     //     magikarp.classList.add('hidden');
//     //     magikarp.classList.remove('hidden');
//     //     gyarados.style.transform = 'translateX(300px) rotateY(-90deg)';

//     //     setTimeout(() => {
//     //         gyarados.style.transform = 'translateX(0) rotateY(0)';
//     //         gyarados.style.opacity = '1';
//     //     },100);
//     // },500);
// });

// gyarados.addEventListener('click', ()=> {
//     magikarp.classList.toggle('hidden');
//     gyarados.classList.toggle('hidden');
// });

