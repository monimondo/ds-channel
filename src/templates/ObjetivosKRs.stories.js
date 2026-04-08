import './ObjetivosKRs.css';

export default {
  title: 'Templates/Objetivos Estratégicos com KR',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Tela consolidadora do layout de Objetivos com ações e KRs.',
      },
    },
  },
};

export const Template = {
  render: () => `
<div class="page-shell">
  <div class="page-breadcrumb">
    <span>Plano:</span> planoelkar21 &nbsp;&nbsp; <span>Ciclo:</span> 2025
  </div>

  <main class="page-content">
    <div class="section-header">
      <div class="section-title">Objetivos Estratégicos <span class="info-btn">i</span></div>
      <div class="section-actions">
        <button class="btn-section btn-primary-action">Incluir Objetivo</button>
      </div>
    </div>

    <!-- Padrão Responsivo do DS -->
    <div class="chn-table-responsive">
      <table class="legacy-table">
        <thead>
          <tr style="background:#E5E5E5">
            <th style="width:30px"></th>
            <th>Nome do Objetivo</th>
            <th style="width:150px">Perspectiva</th>
            <th style="width:120px">Tipo</th>
            <th style="width:100px; text-align:center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center"><span class="fa fa-caret-right"></span></td>
            <td><b>Aumentar Market Share em 15%</b></td>
            <td>Clientes</td>
            <td>Estratégico</td>
            <td style="text-align:center"><i class="fa fa-pencil"></i></td>
          </tr>
          <tr>
            <td style="text-align:center"><span class="fa fa-caret-right"></span></td>
            <td><b>Reduzir custos operacionais</b></td>
            <td>Financeiro</td>
            <td>Estratégico</td>
            <td style="text-align:center"><i class="fa fa-pencil"></i></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="page-legend">
      <span class="legend-label">Legenda:</span>
      <div class="legend-item-row">
        <i class="fa fa-pencil"></i> <span>Editar</span>
      </div>
    </div>
  </main>
</div>
  `,
};