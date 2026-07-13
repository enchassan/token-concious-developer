const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');

  function updateThemeToggleLabel(theme) {
    if (!themeToggle) return;
    themeToggle.innerHTML = theme === 'dark' ? 'Light mode' : 'Dark mode';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeToggleLabel(theme);
  }

  const savedTheme = localStorage.getItem('theme');
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(savedTheme || preferredTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  function toggleCheck(el) {
    const isChecked = el.dataset.checked === 'true';
    if (isChecked) {
      el.dataset.checked = 'false';
      el.style.background = '';
      el.style.borderColor = '';
      el.style.color = 'transparent';
      el.closest('.check-item').style.opacity = '1';
    } else {
      el.dataset.checked = 'true';
      el.style.background = '#4f46e5';
      el.style.borderColor = '#4f46e5';
      el.style.color = 'white';
      el.closest('.check-item').style.opacity = '0.6';
    }
  }

document.addEventListener("DOMContentLoaded", () => {
    const tokenSpan = document.querySelector(".animate-pulse");
    if (!tokenSpan) return;
    
    let currentTokens = 12480;
    const targetTokens = 184512;
    const increment = 4300;
    
    const counterLoop = setInterval(() => {
        currentTokens += increment;
        if (currentTokens >= targetTokens) {
            currentTokens = targetTokens;
            clearInterval(counterLoop);
        }
        tokenSpan.textContent = currentTokens.toLocaleString();
    }, 25);
});