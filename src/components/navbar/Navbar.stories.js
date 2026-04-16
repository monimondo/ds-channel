/**
 * Navbar — Legacy Channel
 *
 * Fiel ao sistema em produção.
 * Cada story abre um menu diferente para inspeção visual.
 * A story "Interativo" simula navegação real com clique.
 */
import './Navbar.css';

export default {
  title: 'Componentes/Navbar',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'channel-light' },
    docs: {
      description: {
        component:
          'Barra de navegação principal do sistema Channel. Usa tokens do Design System e ícones Font Awesome 4.',
      },
    },
  },
  // Garantir que haja espaço para mostrar os submenus sem scroll
  decorators: [
    (Story) => {
      // Pequeno script para rodar no Storybook e permitir interatividade
      setTimeout(() => {
        const navItems = document.querySelectorAll('.navbar-item');
        navItems.forEach(item => {
          const trigger = item.querySelector('.navbar-item-trigger');
          if (trigger && !trigger.dataset.hasListener) {
            trigger.dataset.hasListener = 'true';
            trigger.addEventListener('click', (e) => {
              e.stopPropagation();
              const isOpen = item.classList.contains('is-open');
              // Fecha todos
              navItems.forEach(i => i.classList.remove('is-open'));
              // Toggle no atual
              if (!isOpen) item.classList.add('is-open');
            });
          }
        });

        // Fechar ao clicar fora
        if (!window.hasNavbarGlobalListener) {
          window.hasNavbarGlobalListener = true;
          document.addEventListener('click', () => {
            document.querySelectorAll('.navbar-item').forEach(i => i.classList.remove('is-open'));
          });
        }
      }, 0);

      return `
        <div style="min-height: 600px; background: #fff; padding: 20px;">
          ${Story()}
        </div>
      `;
    },
  ],
};

/* ─── HTML dos dropdowns ─── */

const dropdownMeuChannel = `
  <div class="navbar-dropdown">
    <!-- Coluna 1 -->
    <div class="navbar-dropdown-col">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-refresh"></i> Operações
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Minhas demandas abertas</a></li>
          <li><a href="#">Minhas demandas finalizadas</a></li>
          <li><a href="#">Demandas pendentes</a></li>
          <li><a href="#">Incluir nova demanda</a></li>
        </ul>
      </div>
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-bar-chart"></i> Reuniões
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Ações das reuniões</a></li>
          <li><a href="#">Decisões das reuniões</a></li>
          <li><a href="#">Minhas reuniões</a></li>
        </ul>
      </div>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 2 -->
    <div class="navbar-dropdown-col">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-briefcase"></i> Portfólios
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Proposição de projetos</a></li>
        </ul>
      </div>
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-file-text-o"></i> Planos de ação
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Meus planos de ação</a></li>
          <li><a href="#">Minhas ações</a></li>
          <li><a href="#">Minhas aprovações</a></li>
        </ul>
      </div>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 3 -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-line-chart"></i> Indicadores
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Indicadores que sou responsável</a></li>
          <li><a href="#">Aprovações de medições pendentes</a></li>
          <li><a href="#">Relatório de medições pendentes</a></li>
          <li><a href="#">Minhas medições reprovadas</a></li>
        </ul>
      </div>
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-exclamation-triangle"></i> Riscos corporativos
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Reportar incidente</a></li>
          <li><a href="#">Reportar risco</a></li>
          <li><a href="#">Meus Riscos</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

const dropdownPlanoEstrategico = `
  <div class="navbar-dropdown">
    <div class="navbar-dropdown-col">
      <a class="navbar-direct-link" href="#"><i class="fa fa-flag"></i> Objetivos</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-puzzle-piece"></i> Diretrizes</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-puzzle-piece"></i> Mapa estratégico</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-bar-chart"></i> Reuniões</a>
    </div>

    <div class="navbar-col-divider"></div>

    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-adjust"></i> Desempenho
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Planejamento de metas</a></li>
          <li><a href="#">Medições de indicadores</a></li>
        </ul>
      </div>
      <div class="navbar-section" style="margin-top: 12px;">
        <div class="navbar-section-title">
          <i class="fa fa-cog"></i> Configurações
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Revisões</a></li>
          <li><a href="#">Perspectivas</a></li>
          <li><a href="#">Temas Estratégicos</a></li>
          <li><a href="#" class="link-more">Ver mais</a></li>
        </ul>
      </div>
    </div>

    <div class="navbar-col-divider"></div>

    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-list"></i> Relatórios
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Acompanhamento de desempenho estratégico</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

const dropdownEstrategia = `
  <div class="navbar-dropdown">
    <div class="navbar-dropdown-col">
      <a class="navbar-direct-link" href="#"><i class="fa fa-plus-square-o"></i> Planos estratégicos</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-flag"></i> Objetivos operacionais</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-briefcase"></i> Portfólios</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-th-list"></i> Programas</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-exclamation-triangle"></i> Riscos corporativos</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-calendar"></i> Acompanhamento de reuniões</a>
    </div>

    <div class="navbar-col-divider"></div>

    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-bar-chart"></i> Relatórios
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Acompanhamento de desempenho estratégico</a></li>
          <li><a href="#">Visualização de planos estratégicos</a></li>
        </ul>
      </div>
    </div>

    <div class="navbar-col-divider"></div>

    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-cog"></i> Configurações
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Catálogo de processos</a></li>
          <li><a href="#">Categorias de fator de risco</a></li>
          <li><a href="#">Categorias de reuniões</a></li>
          <li><a href="#">Consulta propostas de projetos</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

const dropdownDesempenho = `
  <div class="navbar-dropdown">
    <div class="navbar-dropdown-col">
      <a class="navbar-direct-link" href="#"><i class="fa fa-calendar-check-o"></i> Planejamento de metas</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-line-chart"></i> Medições de indicador</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-file-text-o"></i> Planos de ação</a>
    </div>

    <div class="navbar-col-divider"></div>

    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-bar-chart"></i> Relatórios
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Acompanhamento de indicadores</a></li>
          <li><a href="#">Visão histórica de indicadores</a></li>
          <li><a href="#">Benchmarking de indicadores</a></li>
          <li><a href="#">Acompanhamento de planos de ação</a></li>
          <li><a href="#">Consolidado de ações</a></li>
          <li><a href="#">Painéis de controle</a></li>
          <li><a href="#">Apresentação de painéis de controle</a></li>
          <li><a href="#">Painel de indicadores de projetos</a></li>
        </ul>
      </div>
    </div>

    <div class="navbar-col-divider"></div>

    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-cog"></i> Configurações
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Indicadores</a></li>
          <li><a href="#">Faixas de atenção</a></li>
          <li><a href="#">Configurações de alertas de indicadores</a></li>
          <li><a href="#" class="link-more">Ver mais</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

function buildNavbar(openMenu = null, contextMenu = null) {
  const assetsBase = '/';
  const items = [];

  if (contextMenu === 'plano-estrategico') {
    items.push({
      id: 'plano-estrategico',
      iconFa: 'fa-puzzle-piece',
      label: 'Plano estratégico',
      dropdown: dropdownPlanoEstrategico,
      isActiveOverride: true
    });
  }

  items.push(
    {
      id: 'meu-channel',
      iconSvg: assetsBase + 'assets/img/meu_channel_menul.svg',
      label: 'Meu Channel',
      dropdown: dropdownMeuChannel,
    },
    {
      id: 'estrategia',
      iconSvg: assetsBase + 'assets/img/estrategia_menu.svg',
      label: 'Estratégia',
      dropdown: dropdownEstrategia,
    },
    {
      id: 'desempenho',
      iconSvg: assetsBase + 'assets/img/desempenho_menu.svg',
      label: 'Desempenho',
      dropdown: dropdownDesempenho,
    },
    {
      id: 'projetos-demandas',
      iconSvg: assetsBase + 'assets/img/projetos_demandas_menu.svg',
      label: 'Planos e demandas',
      dropdown: '', 
    },
    {
      id: 'administracao',
      iconSvg: assetsBase + 'assets/img/administracao_meni.svg',
      label: 'Administração',
      dropdown: '',
    },
  );

  const itemsHtml = items
    .map(
      (item) => `
    <div class="navbar-item${openMenu === item.id ? ' is-open' : ''}${item.isActiveOverride ? ' is-active-page' : ''}" data-menu="${item.id}">
      <div class="navbar-item-trigger">
        ${item.iconSvg 
          ? `<img src="${item.iconSvg}" alt="${item.label}" class="navbar-module-icon" />` 
          : `<i class="fa ${item.iconFa}" style="color:#F97316;"></i>`}
        ${item.label}
      </div>
      ${item.dropdown}
    </div>
  `
    )
    .join('');

  return `
    <nav class="legacy-navbar" id="legacy-navbar">
      <div class="navbar-home">
        <i class="fa fa-home"></i>
      </div>
      ${itemsHtml}
      <div class="navbar-item-plain" style="margin-left: auto;">
        <span style="font-size:13px; color:#ccc; font-weight:bold;">?</span>
      </div>
      <div class="navbar-item-plain">
        <i class="fa fa-info-circle"></i>
      </div>
    </nav>
  `;
}


export const Padrao = {
  name: 'Padrão (Default)',
  render: () => buildNavbar(),
};

export const ComPlanoEstrategico = {
  name: 'Variação: Com Plano Estratégico',
  render: () => buildNavbar(null, 'plano-estrategico'),
};

export const Interativo = {
  name: '▶ Interativo (clique nos menus)',
  render: () => buildNavbar(null, 'plano-estrategico'),
};
