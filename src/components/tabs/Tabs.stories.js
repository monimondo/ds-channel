import './Tab.css';
import { Tab } from './Tab.js';

export default {
  title: 'Componentes/Tabs',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Navegação por abas do sistema Channel. **TODO:** validar visual com print do sistema legado antes de usar em protótipos.',
      },
    },
  },
};

export const Padrao = {
  name: 'Padrão',
  render: () =>
    Tab({
      tabs: [
        { label: 'Geral',       content: '<p style="font-size:12px;font-family:Arial,sans-serif;padding:8px 0">Conteúdo da aba Geral.</p>' },
        { label: 'Detalhes',    content: '<p style="font-size:12px;font-family:Arial,sans-serif;padding:8px 0">Conteúdo da aba Detalhes.</p>' },
        { label: 'Histórico',   content: '<p style="font-size:12px;font-family:Arial,sans-serif;padding:8px 0">Conteúdo da aba Histórico.</p>' },
      ],
      activeIndex: 0,
    }),
};

export const SegundaAbaAtiva = {
  name: 'Segunda aba ativa',
  render: () =>
    Tab({
      tabs: [
        { label: 'Geral',     content: '<p style="font-size:12px;font-family:Arial,sans-serif;padding:8px 0">Conteúdo da aba Geral.</p>' },
        { label: 'Detalhes',  content: '<p style="font-size:12px;font-family:Arial,sans-serif;padding:8px 0">Conteúdo da aba Detalhes.</p>' },
        { label: 'Histórico', content: '<p style="font-size:12px;font-family:Arial,sans-serif;padding:8px 0">Conteúdo da aba Histórico.</p>' },
      ],
      activeIndex: 1,
    }),
};
