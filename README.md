Channel Design System

Storybook de referência do produto Channel (Jexperts).
Documenta o ambiente visual do produto legado: Angular 1.3.3 + Bootstrap 5.

Como rodar localmente

npm install — apenas na primeira vez
npm run storybook — abre em http://localhost:6006

Como publicar no Chromatic

npx chromatic --project-token=SEU_TOKEN

O token deve ficar salvo apenas localmente (ex.: em .env).
Esse arquivo não pode ser commitado.

Estrutura do projeto

src/
• components/ — um componente por pasta
 • button/ (Átomo)
  Button.js — função de renderização
  Button.css — estilos do componente
  Button.stories.js — stories e documentação
 • alert/ (Átomo)
 • tabs/ (Átomo)
 • form/ (Padrão, usa átomos existentes)
 • header/ (Padrão)
 • modal/ (Padrão)
 • navbar/ (Padrão)
 • table/ (Padrão)

• foundations/ — tokens de design
 • colors.css
 • typography.css
 • spacing.css
 • borders.css
 • shadows.css
 • globals.css — classes legadas globais
 • stories dos fundamentos (cores, tipografia, espaçamentos)

• assets/
 • fonts/ — Font Awesome 4 + Conformit (Icomoon)
 • img/ — ícones SVG, GIFs e PNGs usados pelo sistema

.storybook/
• main.js — configuração geral
• preview.js — imports globais de CSS e parâmetros padrão

Regra de organização por tipo

Átomo
• Elementos reutilizáveis (Button, Alert, Tab)
• Requer: Nome.js + Nome.css + Nome.stories.js

Padrão
• Composição de tela usando átomos
• Requer: Nome.stories.js e opcional Nome.css

Fundamento
• Token visual (cor, tipografia, layout)
• Requer: nome.css + Nome.stories.js

Regra importante: CSS de componentes fica sempre na pasta do componente.
Nunca coloque CSS de componentes em foundations/.

Guia para agentes de IA

(para geração correta de novas telas/stories)

Princípio central:
Não inventar componentes.
Telas devem utilizar apenas elementos existentes neste DS e classes do sistema legado.

1. Estrutura de uma story

Criar em: src/components/<nome>/<Nome>.stories.js

Padrão geral:

importar componentes que forem usados
title: "Componentes/NomeDaTela"
tags: ["autodocs"]
parameters: { layout: "padded" }

render(): HTML da tela
HTML pode usar classes legadas + componentes JS (Button, Alert etc.)

2. Classes e padrões visuais disponíveis

— Layout de página:
div class="legacy-page"

— Botões: usar sempre Button.js
nunca escrever <button class="chn-btn…">

— Alertas: usar Alert.js

— Tabelas:
legacy-table, row-selected, row-associated-group
linha de filtros, cabeçalho colapsável, paginação

— Modais:
legacy-modal, legacy-modal-title, legacy-modal-body, legacy-modal-footer

— Header e Navbar:
HTML extenso; sempre reutilizar o que já existe nas stories.

Tokens de design

Usar sempre variáveis CSS (var(--chn-…)) para cores, espaçamento, tipografia, bordas.

Exemplos:
var(--chn-color-primary)
var(--chn-margin-md)
var(--chn-font-size-base)
var(--chn-border-radius-sm)

Ícones disponíveis

Font Awesome 4:
fa-home, fa-caret-down, fa-check, fa-times, fa-flag, fa-upload etc.

Ícones SVG de módulo (assets/img/):
meu_channel_menu.svg, estrategia_menu.svg, desempenho_menu.svg etc.

Indicadores GIF/PNG:
ico_bola_amarela.gif, ico-info-mini-novo.png, ico-lupa.gif

Convenções de nomenclatura

Story title: “Componentes/NomePascalCase”
Export da story: NomePascalCase
Nome visível da story: Português com acentuação
CSS legado: prefixo legacy-
CSS novo: prefixo chn-

Checklist antes de publicar novas stories

• Usou Button() em vez de <button>?
• Escolheu variante correta (primary, secondary, danger)?
• Usou tokens de design e não valores fixos?
• Adicionou tags: ["autodocs"]?
• Não reimportou css globais (button.css, alert.css)?
• Verificou visual no Storybook antes do commit?

Sobre versionamento

Este projeto não versiona:

• node_modules/
• storybook-static/
• dist/
• caches do Storybook/Vite/Parcel
• arquivos temporários, logs e pastas de build
• .env com tokens do Chromatic

Consulte o .gitignore incluso para a lista completa.