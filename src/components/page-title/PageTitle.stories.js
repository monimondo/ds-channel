import { PageTitle, SectionHeader } from './PageTitle.js';
import './PageTitle.css';

export default {
  title: 'Componentes/PageTitle',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export const ComSelect = {
  name: 'Com Select',
  render: () => PageTitle({
    title: 'Objetivo estratégico:',
    selectHtml: '<select class="chn-input" style="width: 200px;"><option>Opção 1</option></select>'
  }),
};

export const SemSelect = {
  name: 'Sem Select',
  render: () => PageTitle({
    title: 'Página de Configuração'
  }),
};

export const HeaderDeTabela = {
  name: 'Header de Tabela',
  render: () => SectionHeader({
    title: 'Key Results <span>(5 itens)</span>',
    actionsHtml: '<button class="chn-btn chn-btn-primary" style="height: 20px; font-size: 10px;">[ Incluir... ]</button>'
  }),
};
