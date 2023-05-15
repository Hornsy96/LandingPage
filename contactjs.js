const horns = document.querySelector('.horns');

horns.addEventListener('mouseover', () => {
    horn.classList.add('wobble');
});
horns.addEventListener('mouseout', () => {
    horns.classList.remove('wobble');
});