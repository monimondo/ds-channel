/**
 * Button — Channel Design System
 *
 * Função reutilizável para renderizar botões com as classes do DS.
 * Importe e use em qualquer story que precise de um botão.
 *
 * @param {object} options
 * @param {string} options.label    — Texto exibido no botão
 * @param {string} options.variant  — 'primary' | 'secondary' | 'danger'
 * @param {string} options.type     — Atributo HTML type (default: 'button')
 * @param {string} options.extra    — Classes ou atributos extras opcionais
 * @returns {string} HTML string do botão
 */
export function Button({ label = 'Botão', variant = 'primary', type = 'button', extra = '' } = {}) {
  const variantClass = variant ? `chn-btn-${variant}` : '';
  return `<button type="${type}" class="chn-btn${variantClass ? ` ${variantClass}` : ''}"${extra ? ` ${extra}` : ''}>${label}</button>`;
}
