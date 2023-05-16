/* This is to make my links bounce when hovered over*/

const links = document.querySelectorAll('.bouncelinks');

links.forEach(bounce => {
    bounce.addEventListener('mouseover', () => {
        bounce.style.transform = 'translateY(-5px)';
        bounce.style.transition = 'transform 0.2s ease-out';
    });

links.forEach(bounce => {
    bounce.addEventListener('mouseout', () => {
        bounce.style.transform('translateY(0)');
        bounce.style.transition('transform 0.2s ease-out')
    })
    });
})

/* This one makes my logo wobble while the mouse is on it */
const horns = document.querySelector('.horns');

horns.addEventListener('mouseover', () => {
    horns.classList.add('wobble');
});
horns.addEventListener('mouseout', () => {
    horns.classList.remove('wobble');
});

