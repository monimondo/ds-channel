import { Alert } from "./Alert";

export default {
  title: "Componentes/Alertas",
  component: Alert,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  args: {
    variant: "success",
    message: "Operação realizada com sucesso.",
    fullWidth: true,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error", "warning", "legacy"],
    },
    message: { control: "text" },
    fullWidth: { control: "boolean" },
  },
};

// --- Stories ---------------------------------------------------------

export const Sucesso = {
  args: {
    variant: "success",
    message: "Operação realizada com sucesso.",
  },
};

export const Erro = {
  args: {
    variant: "error",
    message:
      "Erro ao realizar a operação. Verifique os campos obrigatórios.",
  },
};

export const Atencao = {
  args: {
    variant: "warning",
    message:
      "Atenção: este plano já está associado a outro objetivo estratégico.",
  },
};

export const FeedbackLegacy = {
  args: {
    variant: "legacy",
    message: "PROGRAMAS ASSOCIADOS COM SUCESSO",
    fullWidth: false,
  },
};