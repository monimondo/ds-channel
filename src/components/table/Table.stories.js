import './Table.css';
import { Button } from '../button/Button.js';

export default {
  title: 'Componentes/Tabela',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Tabelas do sistema Channel. Suportam filtros inline, paginação, seleção por checkbox, accordion e legenda.',
      },
    },
  },
};

// Global helper for story interactions
if (typeof window !== 'undefined') {
  document.addEventListener('click', (e) => {
    // 1. Toggle Table Section (Header level)
    const groupHeader = e.target.closest('.legacy-table-group-header');
    if (groupHeader) {
      const section = groupHeader.closest('.table-section');
      const table = section.querySelector('.legacy-table');
      const icon = groupHeader.querySelector('.fa-caret-down, .fa-caret-right');
      if (table) {
        const isHidden = table.style.display === 'none';
        table.style.display = isHidden ? 'table' : 'none';
        if (icon) {
          icon.classList.toggle('fa-caret-down', isHidden);
          icon.classList.toggle('fa-caret-right', !isHidden);
        }
      }
    }

    // 2. Toggle Accordion Row (Line level)
    const accordionTitle = e.target.closest('.accordion-row-title');
    if (accordionTitle) {
      const detailsRow = accordionTitle.nextElementSibling;
      if (detailsRow && detailsRow.classList.contains('accordion-row-details')) {
        const isOpen = detailsRow.classList.contains('is-open');
        detailsRow.classList.toggle('is-open');
        accordionTitle.classList.toggle('is-active');
        accordionTitle.classList.toggle('is-open');
        const icon = accordionTitle.querySelector('.expander-icon');
        if (icon) {
          icon.classList.toggle('fa-caret-down', !isOpen);
          icon.classList.toggle('fa-caret-right', isOpen);
        }
      }
    }
  });

  // Checkbox interactivity to change row color
  document.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox' && e.target.closest('tbody')) {
      const row = e.target.closest('tr');
      if (row) {
        if (e.target.checked) {
          row.classList.add('row-selected');
        } else {
          row.classList.remove('row-selected');
        }
      }
    }
  });
}

const paginacao = (total) => `
  <div class="legacy-pagination">
    <div class="pagination-pages">
      <span>Página 1 de ${total}</span>
      <div class="pagination-numbers">
        <span style="font-weight:bold; color: var(--chn-color-primary-navbar)">1</span>
        <span>2</span>
        <span>3</span>
        <span>►</span>
      </div>
    </div>
    <div style="display:flex; align-items:center; gap:8px">
      <select class="pagination-select">
        <option>25 itens por página</option>
        <option>50 itens por página</option>
      </select>
    </div>
  </div>
`;

const legenda = `
  <div class="legacy-table-legend">
    <div class="legend-item">
      <div class="legend-color" style="background:#D4EDDA"></div>
      <span>Plano associado diretamente a este objetivo estratégico</span>
    </div>
    <div class="legend-item">
      <img src="assets/img/ico_bola_amarela.gif" style="margin-right:4px"/>
      <span>Plano já associado a este objetivo, via grupo de planos de ações</span>
    </div>
  </div>
`;

const actionIcons = `
  <div style="display:flex; justify-content:center; gap:6px">
     <img src="assets/img/ico-info-mini-novo.png" style="cursor:pointer" title="Info"/>
     <img src="assets/img/ico-lupa.gif" style="cursor:pointer" title="Visualizar"/>
  </div>
`;

export const PadraoCompleta = {
  render: () => `
    <div style="width:100%; display:flex; flex-direction:column; gap:20px">
      <div class="table-section">
        <div class="legacy-table-group-header" style="cursor:pointer">
          <div class="legacy-table-group-title">
            <span class="fa fa-caret-down"></span>
            <span>Planos de Ação (134 itens) (2 associados)</span>
          </div>
          <div class="legacy-table-group-actions">
           <div class="legacy-table-action-tool">
              <input type="checkbox" checked style="width:11px; height:11px">
              <span>Mostrar somente associados</span>
            </div>
          </div>
        </div>
        <table class="legacy-table">
          <thead>
            <tr style="background:#E5E5E5">
              <th style="width:30px; text-align:center">Associar</th>
              <th style="width:80px">Código</th>
              <th>Nome</th>
              <th style="width:150px">Gestor</th>
              <th style="width:100px">Status</th>
              <th style="width:100px">Data Limite</th>
              <th style="width:80px; text-align:center">Ações</th>
            </tr>
            <tr style="background:#F5F5F5">
              <td style="text-align:center"><input type="checkbox"/></td>
              <td><input type="text" style="width:100%"/></td>
              <td><input type="text" style="width:100%"/></td>
              <td><select style="width:100%"><option>Todos</option></select></td>
              <td><select style="width:100%"><option>Selecione</option></select></td>
              <td><input type="text" style="width:100%"/></td>
              <td style="text-align:center">
                ${Button({ label: 'Filtrar', variant: 'primary', extra: 'style="padding:0 4px; font-size:10px"' })}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr class="row-selected">
              <td style="text-align:center"><input type="checkbox" checked/></td>
              <td>1</td>
              <td>Plano de Estratégia Comercial</td>
              <td>Marcos Souza</td>
              <td>Em andamento</td>
              <td>12/12/2026</td>
              <td>${actionIcons}</td>
            </tr>
            <tr class="row-associated-group">
              <td style="text-align:center"><input type="checkbox"/></td>
              <td>PH-01</td>
              <td><img src="assets/img/ico_bola_amarela.gif"/> Projeto de Expansão Norte</td>
              <td>Ana Paula</td>
              <td>Aguardando</td>
              <td>20/11/2026</td>
              <td>${actionIcons}</td>
            </tr>
            <tr>
              <td style="text-align:center"><input type="checkbox"/></td>
              <td>99</td>
              <td>Migração de Infraestrutura Cloud</td>
              <td>Carlos Lima</td>
              <td>Não iniciado</td>
              <td>05/01/2027</td>
              <td>${actionIcons}</td>
            </tr>
          </tbody>
        </table>
        ${paginacao(6)}
        ${legenda}
      </div>
    </div>
  `,
};

export const SimplesSemFiltro = {
  render: () => `
    <table class="legacy-table">
      <thead>
        <tr style="background:#E5E5E5">
          <th style="width:30px"></th>
          <th>Módulo</th>
          <th>Responsável</th>
          <th style="text-align:center">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox"/></td>
          <td>Módulo Financeiro</td>
          <td>Setor Fiscal</td>
          <td style="text-align:center">Ativo</td>
        </tr>
        <tr>
          <td><input type="checkbox"/></td>
          <td>Módulo RH</td>
          <td>Recursos Humanos</td>
          <td style="text-align:center">Ativo</td>
        </tr>
      </tbody>
    </table>
  `,
};

export const AcordeonConfigurado = {
  render: () => `
    <div style="width:100%">
      <div class="legacy-table-group-header" style="cursor:pointer">
        <div class="legacy-table-group-title">
          <span class="fa fa-caret-down"></span>
          <span>Grupos de Planos de Ações (2 itens)</span>
        </div>
      </div>
      <table class="legacy-table">
        <thead>
          <tr style="background:#E5E5E5">
             <th style="width:30px"></th>
             <th>Nome do Grupo</th>
             <th>Responsável</th>
             <th style="width:100px; text-align:center">Planos</th>
             <th style="width:80px; text-align:center">Ações</th>
          </tr>
        </thead>
        <tbody>
           <tr class="accordion-row-title is-active is-open">
              <td style="text-align:center" onclick="event.stopPropagation()"><input type="checkbox" checked/></td>
              <td style="display:flex; align-items:center; gap:8px; border:none; height:32px">
                <span class="expander-icon fa fa-caret-down"></span>
                <span>Grupo Logística</span>
              </td>
              <td>Ricardo Mendes</td>
              <td style="text-align:center">5</td>
              <td style="text-align:center">${actionIcons}</td>
           </tr>
           <tr class="accordion-row-details is-open">
             <td colspan="5">
                <div class="nested-table-container">
                  <div class="nested-table-title">Planos do Grupo:</div>
                  <table class="nested-table">
                    <thead>
                      <tr><th>Código</th><th>Nome do Plano</th><th>Status</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>L-01</td><td>Frota Própria</td><td>Finalizado</td></tr>
                    </tbody>
                  </table>
                </div>
             </td>
           </tr>
        </tbody>
      </table>
    </div>
  `,
};
