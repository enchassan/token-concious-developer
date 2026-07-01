tailwind.config = {
      darkMode: ['class', '[data-theme="dark"]'],
      theme: {
        extend: {
          colors: {
            ink: 'var(--ink)',
            'ink-soft': 'var(--ink-soft)',
            'ink-muted': 'var(--ink-muted)',
            surface: 'var(--surface)',
            'surface-2': 'var(--surface-2)',
            'surface-3': 'var(--surface-3)',
            accent: 'var(--accent)',
            'accent-2': 'var(--accent-2)',
            'accent-light': 'var(--accent-light)',
            green: 'var(--green)',
            'green-light': 'var(--green-light)',
            amber: 'var(--amber)',
            'amber-light': 'var(--amber-light)',
            red: 'var(--red)',
            'red-light': 'var(--red-light)',
            'theme-border': 'var(--border)',
            shadow: 'var(--shadow)',
          },
          fontFamily: {
            mono: 'var(--mono)',
            sans: 'var(--sans)',
            display: 'var(--display)',
          }
        }
      }
    }