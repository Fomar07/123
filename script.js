const storageKey = 'preferred-theme';
const root = document.documentElement;
const toggleButton = document.getElementById('theme-toggle');
const statusText = document.getElementById('theme-status');

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function readStoredTheme() {
  const savedTheme = localStorage.getItem(storageKey);
  return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : null;
}

function renderThemeState(theme) {
  root.setAttribute('data-theme', theme);

  if (!toggleButton || !statusText) {
    return;
  }

  const isDark = theme === 'dark';
  toggleButton.setAttribute('aria-pressed', String(isDark));
  statusText.textContent = `Сейчас: ${isDark ? 'темная' : 'светлая'}`;
}

function applyTheme(theme, options = {}) {
  renderThemeState(theme);

  if (!options.skipStorage) {
    localStorage.setItem(storageKey, theme);
  }
}

function initTheme() {
  const initialTheme = readStoredTheme() ?? getSystemTheme();
  renderThemeState(initialTheme);
}

initTheme();

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

window.addEventListener('storage', (event) => {
  if (event.key !== storageKey) {
    return;
  }

  const nextTheme = event.newValue === 'light' || event.newValue === 'dark'
    ? event.newValue
    : getSystemTheme();

  applyTheme(nextTheme, { skipStorage: true });
});
