export function Alert({
    variant = "success",
    icon = "",
    message = "",
    fullWidth = true,
}) {
    const icons = {
        success: "fa-check",
        error: "fa-times",
        warning: "fa-exclamation-triangle",
        legacy: "fa-check",
    };

    const variantClass =
        variant === "legacy"
            ? "chn-feedback-popup"
            : `chn-alert chn-alert-${variant}`;

    const iconClass =
        variant === "legacy"
            ? "chn-feedback-icon"
            : "fa";

    return `
    <div style="width:40%;${fullWidth ? "max-width:300px" : ""}">
      <div class="${variantClass}">
        <span class="${iconClass} ${icons[variant]}"></span>
        <span>${message}</span>
      </div>
    </div>
  `;
}