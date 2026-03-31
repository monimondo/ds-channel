/**
 * Header component for the Legacy world
 * Improved with high-fidelity assets and submenus
 */
import './Header.css';

export default {
  title: 'Componentes/Header',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Cabeçalho principal do sistema Channel. Contém logos, Release Notes com submenu de produtos e dropdown de perfil do usuário.',
      },
    },
  },
};

export const TopHeader = {
  render: () => `
    <header class="legacy-header">
      <div class="legacy-header-container">
        <!-- Logo Section -->
        <div class="legacy-header-logos">
          <div class="logo-jexperts">
            <img src="/assets/img/logo J.svg" alt="Logo J" class="logo-j-svg">
          </div>
          <div class="logo-divider"></div>
          <div class="logo-channel">
            <img src="/assets/img/logo-channel_.png" alt="Channel Logo" class="logo-channel-img">
          </div>
        </div>

        <!-- Actions Section -->
        <div class="legacy-header-actions">
           <div class="release-notes-dropdown">
              <div class="release-notes-trigger">
                <span class="release-text">Release Notes</span>
                <i class="fa fa-th grid-icon"></i>
                <div class="notification-container">
                  <i class="fa fa-bell bell-icon"></i>
                  <span class="notification-badge">0</span>
                </div>
                <i class="fa fa-caret-down dropdown-caret"></i>
              </div>
              
              <!-- Submenu Reproduzido Identico -->
              <div class="release-submenu">
                <div class="submenu-item">
                  <div class="submenu-icon-box channel-bg">
                    <img src="/assets/img/logo-channel_.png" alt="C" style="width: 20px; filter: grayscale(1) brightness(2);">
                  </div>
                  <span class="submenu-label">Channel</span>
                </div>
                <div class="submenu-item">
                  <div class="submenu-icon-box agile-bg">
                    <i class="fa fa-refresh"></i>
                  </div>
                  <span class="submenu-label">Agile</span>
                </div>
                <div class="submenu-item">
                  <div class="submenu-icon-box analytics-bg">
                    <i class="fa fa-bar-chart"></i>
                  </div>
                  <span class="submenu-label">Analytics</span>
                </div>
              </div>
           </div>

           <div class="profile-dropdown">
              <div class="profile-avatar">MM</div>
              <div class="profile-info">
                <span class="profile-name">Mônica Mondo</span>
                <span class="profile-role">Gestor</span>
              </div>
              <i class="fa fa-caret-down dropdown-caret"></i>
           </div>
        </div>
      </div>
    </header>
  `,
};
