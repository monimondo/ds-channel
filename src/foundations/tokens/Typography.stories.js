export default {
  title: 'Fundamentos/Tipografia',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Escala tipográfica do Channel Design System. Fonte principal: Arial/Helvetica. Use sempre `var(--chn-font-size-…)` e `var(--chn-font-weight-…)`.',
      },
    },
  },
};

export const Escala = {
  name: 'Escala de tamanhos',
  render: () => `
    <div style="font-family:Arial,sans-serif;max-width:700px">

      <h2 style="font-size:13px;font-weight:bold;border-bottom:1px solid #e0e0e0;padding-bottom:6px;margin-bottom:16px">Headings</h2>
      ${[
        { label: 'H1', var: '--chn-font-size-h1', size: '38px', tag: 'h1' },
        { label: 'H2', var: '--chn-font-size-h2', size: '30px', tag: 'h2' },
        { label: 'H3', var: '--chn-font-size-h3', size: '24px', tag: 'h3' },
        { label: 'H4', var: '--chn-font-size-h4', size: '18px', tag: 'h4' },
        { label: 'H5', var: '--chn-font-size-h5', size: '16px', tag: 'h5' },
      ].map(({ label, var: v, size, tag }) => `
        <div style="display:flex;align-items:baseline;gap:16px;margin-bottom:12px;border-bottom:1px solid #f0f0f0;padding-bottom:12px">
          <div style="width:80px;flex-shrink:0">
            <div style="font-size:11px;font-family:monospace;color:#999">${v}</div>
            <div style="font-size:10px;color:#bbb">${size}</div>
          </div>
          <${tag} style="margin:0;font-family:Arial,sans-serif">Canal Estratégia</${tag}>
        </div>
      `).join('')}

      <h2 style="font-size:13px;font-weight:bold;border-bottom:1px solid #e0e0e0;padding-bottom:6px;margin:24px 0 16px">Corpo de texto</h2>
      ${[
        { label: 'XL',   var: '--chn-font-size-xl',   size: '20px' },
        { label: 'LG',   var: '--chn-font-size-lg',   size: '16px' },
        { label: 'Base', var: '--chn-font-size-base',  size: '12px' },
        { label: '11px', var: '--chn-font-size-11',    size: '11px' },
        { label: 'SM',   var: '--chn-font-size-sm',    size: '10px' },
      ].map(({ label, var: v, size }) => `
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:10px">
          <div style="width:80px;flex-shrink:0">
            <div style="font-size:11px;font-family:monospace;color:#999">${v}</div>
            <div style="font-size:10px;color:#bbb">${size}</div>
          </div>
          <span style="font-size:var(${v});font-family:Arial,sans-serif">Texto de exemplo — Plano de ação estratégico</span>
        </div>
      `).join('')}

      <h2 style="font-size:13px;font-weight:bold;border-bottom:1px solid #e0e0e0;padding-bottom:6px;margin:24px 0 16px">Pesos</h2>
      ${[
        { label: 'Regular (400)', var: '--chn-font-weight-regular', weight: '400' },
        { label: 'Medium (500)',  var: '--chn-font-weight-medium',  weight: '500' },
        { label: 'Bold (600)',    var: '--chn-font-weight-bold',    weight: '600' },
      ].map(({ label, var: v, weight }) => `
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:10px">
          <div style="width:80px;flex-shrink:0">
            <div style="font-size:11px;font-family:monospace;color:#999">${v}</div>
          </div>
          <span style="font-size:14px;font-weight:${weight};font-family:Arial,sans-serif">Aa Bb Cc — ${label}</span>
        </div>
      `).join('')}

    </div>
  `,
};
