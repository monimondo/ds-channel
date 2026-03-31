/**
 * Tab — Channel Design System
 *
 * Renderiza uma lista de abas com seus painéis de conteúdo.
 * TODO: substituir pelo visual exato do sistema legado quando disponível.
 *
 * @param {object} options
 * @param {Array<{label: string, content: string}>} options.tabs  — lista de abas
 * @param {number} options.activeIndex — índice da aba ativa (default: 0)
 * @returns {string} HTML string
 */
export function Tab({ tabs = [], activeIndex = 0 } = {}) {
  const tabHeaders = tabs
    .map(
      (tab, i) =>
        `<button class="chn-tab${i === activeIndex ? ' is-active' : ''}" data-tab="${i}">${tab.label}</button>`
    )
    .join('');

  const tabPanels = tabs
    .map(
      (tab, i) =>
        `<div class="chn-tab-panel${i === activeIndex ? ' is-active' : ''}" data-panel="${i}">${tab.content}</div>`
    )
    .join('');

  return `
    <div class="chn-tabs-container">
      <div class="chn-tabs">${tabHeaders}</div>
      ${tabPanels}
    </div>
  `;
}
