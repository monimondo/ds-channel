export default {
  title: 'Fundamentos/Cores',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Paleta de cores do Channel Design System. Use sempre as variáveis CSS `var(--chn-color-…)` — nunca valores hex diretos.',
      },
    },
  },
};

function swatchGroup(title, swatches) {
  const items = swatches
    .map(
      ({ name, var: v, hex }) => `
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <div style="width:48px;height:48px;border-radius:4px;border:1px solid #ddd;background:${v ? `var(${v})` : hex};flex-shrink:0"></div>
        <div>
          <div style="font-size:12px;font-weight:bold;font-family:monospace">${v || ''}</div>
          <div style="font-size:11px;color:#666;font-family:monospace">${hex || ''}</div>
          <div style="font-size:11px;color:#999">${name}</div>
        </div>
      </div>
    `
    )
    .join('');

  return `
    <div style="margin-bottom:32px">
      <h2 style="font-size:13px;font-weight:bold;font-family:Arial,sans-serif;border-bottom:1px solid #e0e0e0;padding-bottom:6px;margin-bottom:16px">${title}</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:4px">
        ${items}
      </div>
    </div>
  `;
}

export const TodasAsCores = {
  name: 'Paleta completa',
  render: () => `
    <div style="font-family:Arial,sans-serif;max-width:900px">

      ${swatchGroup('Marca', [
        { name: 'Primary',       var: '--chn-color-primary',       hex: '#606970' },
        { name: 'Primary hover', var: '--chn-color-primary-hover',  hex: '#4e555c' },
        { name: 'Navbar',        var: '--chn-color-navbar',         hex: '#2F313E' },
      ])}

      ${swatchGroup('Semânticas', [
        { name: 'Success text', var: '--chn-color-success-text', hex: '#49773D' },
        { name: 'Success bg',   var: '--chn-color-success-bg',   hex: '#D4EDDA' },
        { name: 'Error text',   var: '--chn-color-error-text',   hex: '#CC6562' },
        { name: 'Error bg',     var: '--chn-color-error-bg',     hex: '#FFE1E1' },
        { name: 'Warning text', var: '--chn-color-warning-text', hex: '#BD9F28' },
        { name: 'Warning bg',   var: '--chn-color-warning-bg',   hex: '#FFF6D1' },
        { name: 'Pending text', var: '--chn-color-pending-text', hex: '#BD9F28' },
        { name: 'Link',         var: '--chn-color-link',         hex: '#0066CC' },
      ])}

      ${swatchGroup('Escala de cinza', [
        { name: 'gray-100', var: '--chn-color-gray-100', hex: '#FDFDFD' },
        { name: 'gray-200', var: '--chn-color-gray-200', hex: '#F5F5F5' },
        { name: 'gray-300', var: '--chn-color-gray-300', hex: '#E5E5E5' },
        { name: 'gray-400', var: '--chn-color-gray-400', hex: '#CCCCCC' },
        { name: 'gray-500', var: '--chn-color-gray-500', hex: '#A0A0A0' },
        { name: 'gray-600', var: '--chn-color-gray-600', hex: '#808080' },
        { name: 'gray-700', var: '--chn-color-gray-700', hex: '#606060' },
        { name: 'gray-800', var: '--chn-color-gray-800', hex: '#404040' },
        { name: 'gray-900', var: '--chn-color-gray-900', hex: '#32373D' },
        { name: 'black',    var: '--chn-color-black',    hex: '#000000' },
        { name: 'white',    var: '--chn-color-white',    hex: '#FFFFFF' },
      ])}

    </div>
  `,
};
