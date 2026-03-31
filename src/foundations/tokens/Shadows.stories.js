export default {
  title: 'Fundamentos/Sombras',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Tokens de elevação do Channel Design System. O sistema legado usa principalmente bordas para separação; sombras são usadas com moderação em modais e dropdowns.',
      },
    },
  },
};

export const Sombras = {
  name: 'Níveis de elevação',
  render: () => `
    <div style="font-family:Arial,sans-serif;max-width:600px">

      ${[
        { var: '--chn-shadow-none', value: 'none',                                      label: 'Sem sombra — elementos planos, tabelas' },
        { var: '--chn-shadow-sm',   value: '0 .125rem .25rem rgba(0,0,0,.075)',          label: 'Sutil — hover de botão' },
        { var: '--chn-shadow-md',   value: '0 .5rem 1rem rgba(0,0,0,.15)',              label: 'Média — dropdowns, tooltips' },
        { var: '--chn-shadow-lg',   value: '0 1rem 3rem rgba(0,0,0,.175)',              label: 'Forte — modais, painéis flutuantes' },
      ].map(({ var: v, value, label }) => `
        <div style="display:flex;align-items:center;gap:24px;margin-bottom:28px">
          <div style="
            width:120px;height:64px;flex-shrink:0;
            background:#ffffff;
            border:1px solid #eeeeee;
            border-radius:4px;
            box-shadow:${value};
          "></div>
          <div>
            <div style="font-size:12px;font-weight:bold;font-family:monospace;color:#606970">${v}</div>
            <div style="font-size:11px;color:#999;margin-top:2px;font-family:monospace">${value}</div>
            <div style="font-size:11px;color:#aaa;margin-top:4px">${label}</div>
          </div>
        </div>
      `).join('')}

    </div>
  `,
};
