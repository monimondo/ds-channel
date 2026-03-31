export default {
  title: 'Fundamentos/Bordas',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Tokens de borda do Channel Design System. Use `var(--chn-border-…)` e `var(--chn-border-radius-…)` em vez de valores px diretos.',
      },
    },
  },
};

export const Bordas = {
  name: 'Bordas e raios',
  render: () => `
    <div style="font-family:Arial,sans-serif;max-width:600px">

      <h2 style="font-size:13px;font-weight:bold;border-bottom:1px solid #e0e0e0;padding-bottom:6px;margin-bottom:16px">Propriedades de borda</h2>

      ${[
        { var: '--chn-border-width',      value: '1px',                     label: 'Largura padrão' },
        { var: '--chn-border-style',      value: 'solid',                   label: 'Estilo padrão' },
        { var: '--chn-border-color',      value: 'var(--chn-color-gray-500)', label: 'Cor padrão (#A0A0A0)' },
        { var: '--chn-border-color-dark', value: 'var(--chn-color-gray-600)', label: 'Cor escura (#808080)' },
      ].map(({ var: v, value, label }) => `
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:10px">
          <div style="width:220px;flex-shrink:0">
            <div style="font-size:11px;font-family:monospace;color:#606970">${v}</div>
            <div style="font-size:10px;color:#999">${value} — ${label}</div>
          </div>
          <div style="width:80px;height:32px;border:1px solid var(${v});border-radius:2px;background:#fafafa"></div>
        </div>
      `).join('')}

      <h2 style="font-size:13px;font-weight:bold;border-bottom:1px solid #e0e0e0;padding-bottom:6px;margin:28px 0 16px">Border radius</h2>

      ${[
        { var: '--chn-border-radius-none', value: '0px',   label: 'Sem raio (legado)' },
        { var: '--chn-border-radius-2',    value: '2px',   label: 'Sutil — botões' },
        { var: '--chn-border-radius-4',    value: '4px',   label: 'Padrão — alertas, cards' },
        { var: '--chn-border-radius-6',    value: '6px',   label: 'Médio' },
        { var: '--chn-border-radius-8',    value: '8px',   label: 'Grande' },
        { var: '--chn-border-radius-pill', value: '500px', label: 'Pílula — badges' },
      ].map(({ var: v, value, label }) => `
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:10px">
          <div style="width:220px;flex-shrink:0">
            <div style="font-size:11px;font-family:monospace;color:#606970">${v}</div>
            <div style="font-size:10px;color:#999">${value} — ${label}</div>
          </div>
          <div style="width:80px;height:32px;border:1px solid var(--chn-border-color);border-radius:var(${v});background:#E5E5E5"></div>
        </div>
      `).join('')}

    </div>
  `,
};
