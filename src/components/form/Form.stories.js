import { Button } from '../button/Button.js';

export default {
  title: 'Componentes/Formulário',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Padrões de formulário do sistema Channel. Usa tokens do DS para inputs e selects, e o componente `Button` para ações.',
      },
    },
  },
};

const fieldStyle = `
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 140px;
  flex: 1;
`;

const labelStyle = `
  font-size: 11px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

const inputStyle = `
  border: 1px solid #CCCCCC;
  height: 20px;
  padding: 0 4px;
  background: #F5F5F5;
  font-size: 11px;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  box-sizing: border-box;
`;

const selectStyle = `
  border: 1px solid #CCCCCC;
  height: 20px;
  font-size: 11px;
  background: #F5F5F5;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
`;

export const CamposBasicos = {
  name: 'Campos Básicos',
  render: () => `
    <div class="legacy-page" style="width:100%;max-width:700px">
      <h1 style="font-size:14px;font-weight:bold;margin-bottom:4px;font-family:Arial,Helvetica,sans-serif">Filtros</h1>
      <div style="border-top:1px solid #000;margin-bottom:12px"></div>

      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px">
        <div style="${fieldStyle}">
          <label style="${labelStyle}">Nome</label>
          <input type="text" style="${inputStyle}">
        </div>
        <div style="${fieldStyle}">
          <label style="${labelStyle}">Status</label>
          <select style="${selectStyle}">
            <option>Todos</option>
            <option>Rascunho</option>
            <option>Em andamento</option>
            <option>Finalizado</option>
          </select>
        </div>
        <div style="${fieldStyle}">
          <label style="${labelStyle}">Área</label>
          <select style="${selectStyle}">
            <option>Selecione</option>
            <option>RH</option>
            <option>Financeiro</option>
            <option>TI</option>
          </select>
        </div>
      </div>

      <div style="display:flex;justify-content:flex-end;gap:6px">
        ${Button({ label: 'Limpar', variant: 'secondary' })}
        ${Button({ label: 'Filtrar', variant: 'primary' })}
      </div>
    </div>
  `,
};

export const ComDataEBusca = {
  name: 'Com Data e Busca',
  render: () => `
    <div class="legacy-page" style="width:100%;max-width:800px">
      <h1 style="font-size:14px;font-weight:bold;margin-bottom:4px;font-family:Arial,Helvetica,sans-serif">Filtros avançados</h1>
      <div style="border-top:1px solid #000;margin-bottom:12px"></div>

      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px">
        <div style="${fieldStyle}">
          <label style="${labelStyle}">Responsável</label>
          <div style="position:relative">
            <input type="text" placeholder="Digite 3 caracteres..." style="${inputStyle}padding-right:20px">
            <span style="position:absolute;right:4px;top:2px;font-size:11px;color:#999;pointer-events:none">🔍</span>
          </div>
          <div style="font-size:8px;color:#999;margin-top:1px">Aperte seta ↓ ou digite 3 caracteres</div>
        </div>
        <div style="${fieldStyle}">
          <label style="${labelStyle}">Categoria</label>
          <select style="${selectStyle}">
            <option>Todos</option>
            <option>Estratégico</option>
            <option>Tático</option>
            <option>Operacional</option>
          </select>
        </div>
        <div style="display:flex;flex-direction:column;gap:4px;min-width:220px;flex:2">
          <label style="${labelStyle}">Data Limite</label>
          <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap">
            <input type="text" placeholder="dd/mm/aaaa" style="width:82px;border:1px solid #CCCCCC;height:20px;padding:0 4px;background:#F5F5F5;font-size:10px;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif">
            <button style="height:20px;width:20px;border:1px solid #B6B6B6;background:#F1F1F1;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;flex-shrink:0">
              <span style="font-size:11px;color:#0066CC">📅</span>
            </button>
            <span style="font-size:10px;color:#666">a</span>
            <input type="text" placeholder="dd/mm/aaaa" style="width:82px;border:1px solid #CCCCCC;height:20px;padding:0 4px;background:#F5F5F5;font-size:10px;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif">
            <button style="height:20px;width:20px;border:1px solid #B6B6B6;background:#F1F1F1;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;flex-shrink:0">
              <span style="font-size:11px;color:#0066CC">📅</span>
            </button>
          </div>
        </div>
      </div>

      <div style="display:flex;justify-content:flex-end;gap:6px">
        ${Button({ label: 'Limpar', variant: 'secondary' })}
        ${Button({ label: 'Filtrar', variant: 'primary' })}
      </div>
    </div>
  `,
};

export const ComJustificativa = {
  name: 'Com Justificativa',
  render: () => `
    <div class="legacy-page" style="width:100%;max-width:600px">

      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px">
        <div style="${fieldStyle}">
          <label style="${labelStyle}">Nome *</label>
          <input type="text" style="${inputStyle}">
        </div>
        <div style="${fieldStyle}">
          <label style="${labelStyle}">Responsável</label>
          <input type="text" style="${inputStyle}">
        </div>
      </div>

      <div style="margin-bottom:12px">
        <label style="${labelStyle};display:block;margin-bottom:4px">Justificativa *</label>
        <textarea style="width:100%;border:1px solid #CCCCCC;padding:4px;background:#F5F5F5;font-size:11px;font-family:Arial,Helvetica,sans-serif;box-sizing:border-box" rows="4" maxlength="500"></textarea>
        <div style="font-size:10px;color:#8B7355;margin-top:2px">(máximo 500 caracteres)</div>
      </div>

      <div style="margin-bottom:12px">
        <label style="display:flex;align-items:center;gap:6px;font-size:11px;cursor:pointer;font-family:Arial,Helvetica,sans-serif">
          <input type="checkbox" style="width:12px;height:12px">
          Incluir subáreas
        </label>
      </div>

      <div style="border-top:1px solid #CCCCCC;padding-top:8px;display:flex;justify-content:flex-end;gap:6px">
        ${Button({ label: 'Cancelar', variant: 'secondary' })}
        ${Button({ label: 'Salvar', variant: 'primary' })}
      </div>
    </div>
  `,
};
