// Design tokens (ordem importa: tokens primeiro, globals por último)
import '../src/foundations/tokens/colors.css';
import '../src/foundations/tokens/typography.css';
import '../src/foundations/tokens/spacing.css';
import '../src/foundations/tokens/borders.css';
import '../src/foundations/tokens/shadows.css';
import '../src/foundations/tokens/globals.css';

// Component base styles
import '../src/components/button/Button.css';
import '../src/components/alert/Alert.css';

// Fonts
import '../src/assets/fonts/font-awesome/css/font-awesome.css';
import '../src/assets/fonts/conformit/font-conformit.css';

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  tags: ['autodocs'],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    docs: {
      autodocs: true,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;