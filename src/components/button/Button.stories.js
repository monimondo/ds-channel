import { Button } from './Button.js';

export default {
  title: 'Componentes/Botão',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Botão base do Channel Design System. Importe `Button` de `components/button/Button.js` para reutilizar em qualquer story.',
      },
    },
  },
  args: {
    label: 'Botão',
    variant: 'primary',
    type: 'button',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto exibido no botão',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      description: 'Variante visual',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Atributo HTML type',
    },
  },
  render: (args) => Button(args),
};

export const Primario = {
  name: 'Primário',
  args: { label: 'Confirmar', variant: 'primary' },
};

export const Secundario = {
  name: 'Secundário',
  args: { label: 'Cancelar', variant: 'secondary' },
};

export const Perigo = {
  name: 'Perigo',
  args: { label: 'Excluir', variant: 'danger' },
};
