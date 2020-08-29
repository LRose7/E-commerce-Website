// SIDEBAR TOGGLE
const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeSidebar = document.querySelector('.sidebar-close-btn');
// const navLinks = document.querySelectorAll('.sidebar-link');

sidebarToggle.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-open');
});

closeSidebar.addEventListener('click', () => {
    document.body.classList.remove('sidebar-open');
});