const storageKey = 'preferred-theme';
const root = document.documentElement;
const toggleButton = document.getElementById('theme-toggle');
const statusText = document.getElementById('theme-status');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem(storageKey, theme);

  const isDark = theme === 'dark';
  toggleButton.setAttribute('aria-pressed', String(isDark));
  statusText.textContent = `Сейчас: ${isDark ? 'темная' : 'светлая'}`;
}

function getInitialTheme() {
  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

applyTheme(getInitialTheme());

toggleButton.addEventListener('click', () => {
  const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
});
