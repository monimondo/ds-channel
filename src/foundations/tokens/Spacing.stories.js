export default {
  title: 'Fundamentos/Espaçamento',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Escala de espaçamento e alturas de controle. Use `var(--chn-margin-…)` e `var(--chn-padding-…)` em vez de valores px diretos.',
      },
    },
  },
};

function spacingRow(v, px, label) {
  return `
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:8px">
      <div style="width:140px;flex-shrink:0">
        <div style="font-size:11px;font-family:monospace;color:#606970">${v}</div>
        <div style="font-size:10px;color:#999">${px} — ${label}</div>
      </div>
      <div style="height:16px;background:var(--chn-color-primary);opacity:0.7;border-radius:2px;width:${px}"></div>
    </div>
  `;
}

function controlRow(v, px, label) {
  return `
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:8px">
      <div style="width:140px;flex-shrink:0">
        <div style="font-size:11px;font-family:monospace;color:#606970">${v}</div>
        <div style="font-size:10px;color:#999">${px} — ${label}</div>
      </div>
      <div style="height:${px};width:120px;background:#E5E5E5;border:1px solid #ccc;border-radius:2px;display:flex;align-items:center;padding:0 8px;font-size:11px;color:#666;box-sizing:border-box">input / button</div>
    </div>
  `;
}

export const Escala = {
  name: 'Escala de espaçamento',
  render: () => `
    <div style="font-family:Arial,sans-serif;max-width:600px">

      <h2 style="font-size:13px;font-weight:bold;border-bottom:1px solid #e0e0e0;padding-bottom:6px;margin-bottom:16px">Margin / Padding</h2>
      ${spacingRow('--chn-margin-xxs / --chn-padding-xxs', '4px',  'xxs')}
      ${spacingRow('--chn-margin-xs  / --chn-padding-xs',  '6px',  'xs')}
      ${spacingRow('--chn-margin-sm  / --chn-padding-sm',  '8px',  'sm')}
      ${spacingRow('--chn-margin-md  / --chn-padding-md',  '12px', 'md')}
      ${spacingRow('--chn-margin-default / --chn-padding-default', '16px', 'default')}
      ${spacingRow('--chn-margin-lg  / --chn-padding-lg',  '24px', 'lg')}
      ${spacingRow('--chn-margin-xl  / --chn-padding-xl',  '32px', 'xl')}
      ${spacingRow('--chn-margin-xxl / --chn-padding-xxl', '48px', 'xxl')}

      <h2 style="font-size:13px;font-weight:bold;border-bottom:1px solid #e0e0e0;padding-bottom:6px;margin:28px 0 16px">Alturas de controle</h2>
      ${controlRow('--chn-control-height-xs',      '16px', 'xs')}
      ${controlRow('--chn-control-height-sm',      '24px', 'sm — botões e inputs')}
      ${controlRow('--chn-control-height-default', '32px', 'default')}
      ${controlRow('--chn-control-height-lg',      '40px', 'lg')}

      <h2 style="font-size:13px;font-weight:bold;border-bottom:1px solid #e0e0e0;padding-bottom:6px;margin:28px 0 16px">Alturas legadas fixas</h2>
      ${controlRow('--chn-header-height',   '55px', 'Header principal')}
      ${controlRow('--chn-menubar-height',  '31px', 'Barra de menus')}
      ${controlRow('--chn-row-height',      '27px', 'Linha de tabela')}

    </div>
  `,
};
