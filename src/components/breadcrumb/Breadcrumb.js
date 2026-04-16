/**
 * Breadcrumb — Channel Design System
 * 
 * @param {object} options
 * @param {Array} options.items — Array of strings or objects {label, value}
 * @returns {string} HTML string
 */
export function Breadcrumb({ items = [] } = {}) {
    const content = items.map(item => {
        if (typeof item === 'string') return `<span>${item}</span>`;
        return `<span>${item.label}:</span> ${item.value}`;
    }).join(' &nbsp;&nbsp; ');

    return `<div class="chn-breadcrumb">${content}</div>`;
}
