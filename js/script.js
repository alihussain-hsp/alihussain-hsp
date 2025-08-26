
// Mobile nav
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const storageKey = 'theme';
const getPreferred = () => localStorage.getItem(storageKey) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
const setTheme = t => {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem(storageKey, t);
};
setTheme(getPreferred());
themeToggle?.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();
