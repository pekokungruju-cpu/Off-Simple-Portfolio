const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.textContent = '☀️';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌙';
    }
});
