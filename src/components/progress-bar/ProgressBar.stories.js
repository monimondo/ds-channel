import './ProgressBar.css';

export default {
  title: 'Componentes/Barra de Processamento',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['not-started', 'in-progress', 'complete'],
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    color: {
      control: { type: 'select' },
      options: ['blue', 'green', 'yellow', 'red', 'gray'],
    }
  },
};

const Template = ({ status, value, color, label }) => {
  const colorClass = color ? `color-${color}` : '';
  const statusClass = status ? `status-${status}` : '';
  const fillStyle = value !== undefined ? `style="width: ${value}%"` : '';
  
  return `
    <div style="width: 300px;">
      <div class="ds-progress-bar ${statusClass} ${colorClass}">
        <div class="ds-progress-bar-fill" ${fillStyle}></div>
      </div>
      ${label ? `<div class="ds-progress-label">${label}</div>` : ''}
    </div>
  `;
};

export const NaoIniciado = {
  render: (args) => Template(args),
  args: {
    status: 'not-started',
    value: 0,
    label: '0% - Não iniciado',
  },
};

export const EmProgresso = {
  render: (args) => Template(args),
  args: {
    status: 'in-progress',
    value: 65,
    label: '65% - Em progresso',
  },
};

export const Completo = {
  render: (args) => Template(args),
  args: {
    status: 'complete',
    value: 100,
    label: '100% - Concluído',
  },
};

export const VermelhoCritico = {
  render: (args) => Template(args),
  args: {
    color: 'red',
    value: 15,
    label: '15% - Crítico',
  },
};
