/**
 * Navbar â€” Legacy Channel
 *
 * Fiel ao sistema em produÃ§Ã£o.
 * Cada story abre um menu diferente para inspeÃ§Ã£o visual.
 * A story "Interativo" simula navegaÃ§Ã£o real com clique.
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
          'Barra de navegaÃ§Ã£o principal do sistema Channel. Usa tokens do Design System e Ã­cones Font Awesome 4.',
      },
    },
  },
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   HTML dos dropdowns
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const dropdownMeuChannel = `
  <div class="navbar-dropdown">
    <!-- Coluna 1 -->
    <div class="navbar-dropdown-col">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-refresh"></i> OperaÃ§Ãµes
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
          <i class="fa fa-bar-chart"></i> ReuniÃµes
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">AÃ§Ãµes das reuniÃµes</a></li>
          <li><a href="#">DecisÃµes das reuniÃµes</a></li>
          <li><a href="#">Minhas reuniÃµes</a></li>
        </ul>
      </div>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 2 -->
    <div class="navbar-dropdown-col">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-briefcase"></i> PortfÃ³lios
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">ProposiÃ§Ã£o de projetos</a></li>
        </ul>
      </div>
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-file-text-o"></i> Planos de aÃ§Ã£o
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Meus planos de aÃ§Ã£o</a></li>
          <li><a href="#">Minhas aÃ§Ãµes</a></li>
          <li><a href="#">Minhas aprovaÃ§Ãµes</a></li>
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
          <li><a href="#">Indicadores que sou responsÃ¡vel</a></li>
          <li><a href="#">AprovaÃ§Ãµes de mediÃ§Ãµes pendentes</a></li>
          <li><a href="#">RelatÃ³rio de mediÃ§Ãµes pendentes</a></li>
          <li><a href="#">Minhas mediÃ§Ãµes reprovadas</a></li>
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
    <!-- Coluna 1: links diretos -->
    <div class="navbar-dropdown-col">
      <a class="navbar-direct-link" href="#"><i class="fa fa-flag"></i> Objetivos</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-puzzle-piece"></i> Diretrizes</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-puzzle-piece"></i> Mapa estratÃ©gico</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-bar-chart"></i> ReuniÃµes</a>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 2: Desempenho e ConfiguraÃ§Ãµes -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-adjust"></i> Desempenho
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Planejamento de metas</a></li>
          <li><a href="#">MediÃ§Ãµes de indicadores</a></li>
        </ul>
      </div>
      <div class="navbar-section" style="margin-top: 12px;">
        <div class="navbar-section-title">
          <i class="fa fa-cog"></i> ConfiguraÃ§Ãµes
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">RevisÃµes</a></li>
          <li><a href="#">Perspectivas</a></li>
          <li><a href="#">Temas EstratÃ©gicos</a></li>
          <li><a href="#" class="link-more">Ver mais</a></li>
        </ul>
      </div>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 3: RelatÃ³rios -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-list"></i> RelatÃ³rios
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Acompanhamento de desempenho estratÃ©gico</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

const dropdownEstrategia = `
  <div class="navbar-dropdown">
    <!-- Coluna 1: links diretos -->
    <div class="navbar-dropdown-col">
      <a class="navbar-direct-link" href="#"><i class="fa fa-plus-square-o"></i> Planos estratÃ©gicos</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-flag"></i> Objetivos operacionais</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-briefcase"></i> PortfÃ³lios</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-th-list"></i> Programas</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-exclamation-triangle"></i> Riscos corporativos</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-calendar"></i> Acompanhamento de reuniÃµes</a>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 2: RelatÃ³rios -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-bar-chart"></i> RelatÃ³rios
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Acompanhamento de desempenho estratÃ©gico</a></li>
          <li><a href="#">VisualizaÃ§Ã£o de planos estratÃ©gicos</a></li>
        </ul>
      </div>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 3: ConfiguraÃ§Ãµes -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-cog"></i> ConfiguraÃ§Ãµes
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">CatÃ¡logo de processos</a></li>
          <li><a href="#">Categorias de fator de risco</a></li>
          <li><a href="#">Categorias de reuniÃµes</a></li>
          <li><a href="#">Consulta propostas de projetos</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

const dropdownDesempenho = `
  <div class="navbar-dropdown">
    <!-- Coluna 1: links diretos -->
    <div class="navbar-dropdown-col">
      <a class="navbar-direct-link" href="#"><i class="fa fa-calendar-check-o"></i> Planejamento de metas</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-line-chart"></i> MediÃ§Ãµes de indicador</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-file-text-o"></i> Planos de aÃ§Ã£o</a>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 2: RelatÃ³rios -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-bar-chart"></i> RelatÃ³rios
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Acompanhamento de indicadores</a></li>
          <li><a href="#">VisÃ£o histÃ³rica de indicadores</a></li>
          <li><a href="#">Benchmarking de indicadores</a></li>
          <li><a href="#">Acompanhamento de planos de aÃ§Ã£o</a></li>
          <li><a href="#">Consolidado de aÃ§Ãµes</a></li>
          <li><a href="#">PainÃ©is de controle</a></li>
          <li><a href="#">ApresentaÃ§Ã£o de painÃ©is de controle</a></li>
          <li><a href="#">Painel de indicadores de projetos</a></li>
        </ul>
      </div>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 3: ConfiguraÃ§Ãµes -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-cog"></i> ConfiguraÃ§Ãµes
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Indicadores</a></li>
          <li><a href="#">Faixas de atenÃ§Ã£o</a></li>
          <li><a href="#">ConfiguraÃ§Ãµes de alertas de indicadores</a></li>
          <li><a href="#" class="link-more">Ver mais</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

const dropdownProjetosEDemandas = `
  <div class="navbar-dropdown">
    <!-- Coluna 1: links diretos -->
    <div class="navbar-dropdown-col">
      <a class="navbar-direct-link" href="#"><i class="fa fa-list-alt"></i> Projetos</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-refresh"></i> OperaÃ§Ãµes</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-file-text"></i> Contratos</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-folder-open-o"></i> Documentos compartilhados</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-share-alt"></i> LiÃ§Ãµes aprendidas</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-pencil"></i> Painel de apontamentos</a>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 2: RelatÃ³rios -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-bar-chart"></i> RelatÃ³rios
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">RelatÃ³rios personalizados</a></li>
          <li><a href="#">Mapa de alocaÃ§Ã£o</a></li>
          <li><a href="#">Acompanhamento da execuÃ§Ã£o de projetos</a></li>
          <li><a href="#">Controle previsto x realizado</a></li>
          <li><a href="#">Desempenho de projetos</a></li>
          <li><a href="#">Problemas de projetos</a></li>
          <li><a href="#">Riscos de projetos</a></li>
          <li><a href="#">Entregas de projetos</a></li>
          <li><a href="#">Resultados financeiros de projetos</a></li>
          <li><a href="#">Consultar Dados Cadastrais de Empresas</a></li>
          <li><a href="#">Fluxo financeiro de projetos</a></li>
          <li><a href="#" class="link-more">Ver mais</a></li>
        </ul>
      </div>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 3: ConfiguraÃ§Ãµes + Carga -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-cog"></i> ConfiguraÃ§Ãµes
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">CalendÃ¡rios</a></li>
          <li><a href="#">Fluxos de trabalho</a></li>
          <li><a href="#">FormulÃ¡rios padrÃ£o</a></li>
          <li><a href="#" class="link-more">Ver mais</a></li>
        </ul>
      </div>
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-upload"></i> Carga
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">ImportaÃ§Ã£o de custos realizados multi projetos</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

const dropdownAdministracao = `
  <div class="navbar-dropdown is-single-col">
    <a class="navbar-admin-item" href="#"><i class="fa fa-user"></i> UsuÃ¡rios</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-users"></i> Grupos</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-building"></i> Empresas</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-sitemap"></i> Estrutura organizacional</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-search"></i> Trilha de auditoria</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-envelope-o"></i> HistÃ³rico de e-mails enviados</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-file-o"></i> HistÃ³rico de importaÃ§Ãµes de propostas</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-list"></i> Log IntegraÃ§Ã£o Compromisso</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-cog"></i> ConfiguraÃ§Ãµes gerais</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-database"></i> Configurar Fontes de Dados</a>
  </div>
`;

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   Builder da navbar
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function buildNavbar(openMenu = null, contextMenu = null) {
  const assetsBase = (() => {
    if (typeof window !== 'undefined' && window.CHANNEL_DS_BASE) {
      return window.CHANNEL_DS_BASE.endsWith('/')
        ? window.CHANNEL_DS_BASE
        : `${window.CHANNEL_DS_BASE}/`;
    }
    // Storybook serve `staticDirs` em `/assets/*`.
    return '/';
  })();

  const items = [];

  // Se houver um menu de contexto como Plano EstratÃ©gico ativo na tela
  if (contextMenu === 'plano-estrategico') {
    items.push({
      id: 'plano-estrategico',
      iconFa: 'fa-puzzle-piece',
      label: 'Plano estratÃ©gico',
      dropdown: dropdownPlanoEstrategico, // Vinculando o dropdown correto agora
      isActiveOverride: true
    });
  }

  // Menus padrÃ£o do sistema
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
      label: 'EstratÃ©gia',
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
      label: 'Projetos e demandas',
      dropdown: dropdownProjetosEDemandas,
    },
    {
      id: 'administracao',
      iconSvg: assetsBase + 'assets/img/administracao_meni.svg',
      label: 'AdministraÃ§Ã£o',
      dropdown: dropdownAdministracao,
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

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   Script de interatividade (clique para abrir/fechar)
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function attachNavbarBehavior() {
  return `
    <script>
      (function () {
        var navbar = document.getElementById('legacy-navbar');
        if (!navbar || navbar._navbarReady) return;
        navbar._navbarReady = true;

        var items = navbar.querySelectorAll('.navbar-item');

        items.forEach(function (item) {
          var trigger = item.querySelector('.navbar-item-trigger');
          if (!trigger) return;

          trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            var isOpen = item.classList.contains('is-open');
            // Fecha todos
            items.forEach(function (i) { i.classList.remove('is-open'); });
            // Abre este se estava fechado
            if (!isOpen) item.classList.add('is-open');
          });
        });

        // Clique fora fecha tudo
        document.addEventListener('click', function () {
          items.forEach(function (i) { i.classList.remove('is-open'); });
        });

        // Evita fechar ao clicar dentro do dropdown
        navbar.querySelectorAll('.navbar-dropdown').forEach(function (dd) {
          dd.addEventListener('click', function (e) { e.stopPropagation(); });
        });
      })();
    </script>
  `;
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   Stories - Navbar PadrÃ£o
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export const Default = {
  name: 'PadrÃ£o (fechado)',
  render: () => buildNavbar(),
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   Stories - Navbar com Contexto
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export const ContextoEstrategicoFechado = {
  name: 'Contexto: Plano estratÃ©gico (fechado)',
  render: () => buildNavbar(null, 'plano-estrategico'),
  parameters: {
    docs: {
      description: { story: 'Menu Navbar carregado com o ambiente contextual do plano estratÃ©gico sem abrir o menu.' },
    },
  },
};

export const ContextoEstrategicoAberto = {
  name: 'Contexto: Plano estratÃ©gico (aberto)',
  render: () => buildNavbar('plano-estrategico', 'plano-estrategico'),
  parameters: {
    docs: {
      description: { story: 'Exibe o menu contextual dinÃ¢mico jÃ¡ expandido demonstrando os links e diretrizes.' },
    },
  },
};

export const ContextoEstrategicoInterativo = {
  name: 'â–¶ Contexto: Plano estratÃ©gico (Interativo)',
  render: () => buildNavbar(null, 'plano-estrategico') + attachNavbarBehavior(),
  parameters: {
    docs: {
      description: { story: 'Testa a abertura e fechamento das abas do Navbar com mÃ³dulo contextual carregado.' },
    },
  },
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MÃ³dulos PadrÃµes Abertos
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

/** Meu Channel aberto */
export const MeuChannel = {
  name: 'Meu Channel',
  render: () => buildNavbar('meu-channel'),
  parameters: {
    docs: {
      description: { story: 'Atalhos pessoais do usuÃ¡rio: OperaÃ§Ãµes, ReuniÃµes, PortfÃ³lios, Planos de aÃ§Ã£o, Indicadores e Riscos.' },
    },
  },
};

/** EstratÃ©gia aberto */
export const Estrategia = {
  name: 'EstratÃ©gia',
  render: () => buildNavbar('estrategia'),
  parameters: {
    docs: {
      description: { story: 'MÃ³dulo de planejamento estratÃ©gico: links diretos, RelatÃ³rios e ConfiguraÃ§Ãµes.' },
    },
  },
};

/** Desempenho aberto */
export const Desempenho = {
  name: 'Desempenho',
  render: () => buildNavbar('desempenho'),
  parameters: {
    docs: {
      description: { story: 'Indicadores e planos de aÃ§Ã£o: Planejamento de metas, MediÃ§Ãµes, RelatÃ³rios e ConfiguraÃ§Ãµes.' },
    },
  },
};

/** Projetos e Demandas aberto */
export const ProjetosEDemandas = {
  name: 'Projetos e demandas',
  render: () => buildNavbar('projetos-demandas'),
  parameters: {
    docs: {
      description: { story: 'GestÃ£o de projetos e demandas: links diretos, RelatÃ³rios, ConfiguraÃ§Ãµes e Carga.' },
    },
  },
};

/** AdministraÃ§Ã£o aberto */
export const Administracao = {
  name: 'AdministraÃ§Ã£o',
  render: () => buildNavbar('administracao'),
  parameters: {
    docs: {
      description: { story: 'ConfiguraÃ§Ãµes de sistema e cadastros: lista simples de itens com Ã­cone.' },
    },
  },
};

/** Story interativa â€” clique para abrir/fechar menus */
export const Interativo = {
  name: 'â–¶ Interativo (clique nos menus)',
  render: () => buildNavbar() + attachNavbarBehavior(),
  parameters: {
    docs: {
      description: {
        story:
          'Simula a navegaÃ§Ã£o real: clique em qualquer item da barra para abrir o submenu. Clique fora ou em outro item para fechar.',
      },
    },
  },
};


