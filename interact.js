const portlists = document.querySelectorAll('.portlist');

portlists.forEach(portlist => {
    portlist.addEventListener('mouseover', () => {
        portlist.classList.add('hover');
    });

portlists.forEach(portlist => {
    portlist.addEventListener('mouseout', () => {
        portlist.classList.remove('hover');
    })
    });
})