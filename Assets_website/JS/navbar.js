document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const navList = document.querySelector('.nav-list');

    if (toggler && navList) {
        toggler.addEventListener('click', () => {
            navList.classList.toggle('show');
        });
    }
});
