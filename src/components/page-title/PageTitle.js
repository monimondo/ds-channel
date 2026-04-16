/**
 * PageTitle — Channel Design System
 * 
 * @param {object} options
 * @param {string} options.title — Title text
 * @param {string} options.selectHtml — Optional HTML for a select element
 * @returns {string} HTML string
 */
export function PageTitle({ title = '', selectHtml = '' } = {}) {
    return `
        <div class="chn-page-title-bar">
            <h1 class="chn-title">${title}</h1>
            ${selectHtml}
        </div>
    `;
}

/**
 * SectionHeader — Channel Design System (For tables)
 * 
 * @param {object} options
 * @param {string} options.title — Section title
 * @param {string} options.actionsHtml — Optional HTML for buttons/actions
 * @returns {string} HTML string
 */
export function SectionHeader({ title = '', actionsHtml = '' } = {}) {
    return `
        <div class="chn-section-header">
            <div class="chn-section-title">
                ${title}
            </div>
            <div class="legacy-table-group-actions">
                ${actionsHtml}
            </div>
        </div>
    `;
}
