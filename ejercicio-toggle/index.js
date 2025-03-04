const toggle = document.querySelector('.toggle__switch');

if (toggle) [
    toggle.addEventListener('click', () => {
        
        if (toggle.classList.contains('active')) {
            toggle.classList.remove('active')
        } else {
            toggle.classList.add('active')
            }
        }
    )
];

