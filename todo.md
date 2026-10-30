# TODO — Portfólio de Graduação · Isadora Sandri

> **O que é este arquivo?**  
> Este documento é o plano de ação prático para executar o projeto do início ao fim, baseado nas especificações do [`SPEC.md`](./SPEC.md) e nas diretrizes de engenharia do [`AGENTS.md`](./AGENTS.md).  
> Cada tarefa possui seu status, critérios de conclusão e indicação de quem deve executar (a autora ou o agente de IA).

---

## Painel de Progresso Geral

- [x] **Fase 0 — Especificação e Planejamento** (Concluída)
- [x] **Fase 1 — Estrutura e Esqueleto Técnico** (Concluída)
- [ ] **Fase 2 — Coleta e Inserção de Conteúdo Real** (Aguardando dados reais da autora — pendências de §15.1)
- [x] **Fase 3 — Publicação e Configuração do GitHub Pages** (Concluída — site no ar com HTTPS)
- [x] **Fase 4 — Auditoria de Qualidade, Acessibilidade, SEO e Polimento** (Concluída — validado em produção)

---

## Fase 0: Especificação e Planejamento

Objetivo: Definir todas as regras, identidade visual, arquitetura de informação e critérios de aceite antes de codar.

- [x] **0.1 Definir a especificação do produto (`SPEC.md`)**
  - *Critério de aceite:* Documento completo contendo objetivos, personas, escopo (dentro/fora), arquitetura de informação, requisitos funcionais/não funcionais, tokens visuais e roadmap.
- [x] **0.2 Estabelecer guia de desenvolvimento para agentes (`AGENTS.md`)**
  - *Critério de aceite:* Regras invioláveis, stack técnica, convenções de código (HTML/CSS/JS), convenção de commits e Definition of Done documentadas.
- [x] **0.3 Criar o plano de ação detalhado (`todo.md`)**
  - *Critério de aceite:* Roteiro sequencial de tarefas cobrindo 100% dos requisitos da spec até a publicação final.
- [x] **0.4 Validação inicial da autora**
  - *Critério de aceite:* Autorização concedida para execução técnica completa do projeto.

---

## Fase 1: Estrutura e Esqueleto Técnico (F1)

Objetivo: Construir todos os arquivos estruturais do site, folha de estilos completa, scripts de melhoria progressiva e páginas de suporte com placeholders explícitos (`[SUBSTITUIR]`).

### 1.1 Preparação de pastas e arquivos de suporte
- [x] **Criar a árvore de diretórios do projeto** (`assets/css/`, `assets/js/`, `assets/img/projetos/`, `assets/docs/`).
- [x] **Criar arquivo `.nojekyll` na raiz** (desativa Jekyll no GitHub Pages).
- [x] **Criar arquivo `robots.txt`** (configurado para buscadores e apontando para o sitemap).
- [x] **Criar arquivo `sitemap.xml`** (mapeamento da URL oficial).
- [x] **Criar `assets/img/favicon.svg`** (monograma "IS" vetorial com paleta vinho `#722F37`).
- [x] **Gerar imagem de compartilhamento social `assets/img/og-image.png`** (1200×630 px com identidade visual e monograma).

### 1.2 Estilos e Design System (`assets/css/styles.css`)
- [x] **Declarar tokens de design em `:root` e no tema escuro** (cores oficiais com contraste ≥ 4,5:1).
- [x] **Configurar Reset, tipografia e regras base** (pilha de fontes do sistema, escala proporcional, limite de 68ch de largura de leitura).
- [x] **Estilizar componentes e layout responsivo (Mobile-first)**
  - Cabeçalho fixo com monograma e navegação por âncoras.
  - Menu responsivo adaptado para telas de 320 px a 1920 px.
  - Hero com os 5 dados essenciais visíveis sem rolagem no celular (RF-01).
  - Cartões de projetos com borda de 1 px, raio de 12 px e expansão por `<details>/<summary>`.
  - Grades de habilidades, linha do tempo e listas de certificados.
  - Botões primários, secundários e `:focus-visible` de alto contraste.
- [x] **Configurar acessibilidade de movimento (`prefers-reduced-motion`)**.

### 1.3 Marcação Semântica e Acessível (`index.html`)
- [x] **Estruturar cabeçalho técnico e metadados** (Open Graph, Twitter Cards, Schema.org `Person`).
- [x] **Construir Cabeçalho e Navegação (`<header>` / `<nav>`)** com suporte a acessibilidade.
- [x] **Construir Seção Início (`#inicio` / hero)** com os 5 dados obrigatórios.
- [x] **Construir Seção Sobre (`#sobre`)** com parágrafos objetivos e ganchos para `data-i18n`.
- [x] **Construir Seção Projetos (`#projetos`)** com modelo comentado e 3 cartões estruturados.
- [x] **Construir Seção Habilidades (`#habilidades`)** com 4 grupos de competências.
- [x] **Construir Seção Experiência (`#experiencia`)** com modelo comentado e linha do tempo.
- [x] **Construir Seção Certificados (`#certificados`)** com modelo comentado e item placeholder.
- [x] **Construir Seção Contato (`#contato`)** com e-mail, LinkedIn, GitHub e botão de cópia.
- [x] **Construir Rodapé (`<footer>`)** com ano dinâmico/estático e link de retorno ao topo.

### 1.4 Comportamento e Melhoria Progressiva (`assets/js/main.js`)
- [x] **Implementar lógica Vanilla JS ("use strict")**
  - Menu mobile com controle de estado e tecla ESC.
  - Botão "Copiar e-mail" com Clipboard API e feedback de 2 segundos.
  - Atualização automática do ano no rodapé.
  - Fechamento do menu ao clicar em links.
  - Operação 100% funcional mesmo com JavaScript desligado.

### 1.5 Página de Erro 404 (`404.html`)
- [x] **Criar página 404 personalizada** integrada à folha de estilos geral e link para home.

### 1.6 Documentação de Operação (`README.md`)
- [x] **Elaborar guia prático em 5 passos para edição e publicação**.

---

## Fase 2: Coleta e Inserção de Conteúdo Real (F2)

> **Nota:** Conforme a regra de ouro do `AGENTS.md` (§3 e §14), dados pessoais e trabalhos acadêmicos **nunca** devem ser inventados pela IA. Esta seção lista os dados que a Isadora preencherá quando desejar substituir os placeholders `[SUBSTITUIR]` e `[PREENCHER]`.

- [ ] **2.1 Cadastrar canais de contato reais**
  - [ ] E-mail de contato em `index.html`.
  - [ ] Link do perfil do LinkedIn.
- [ ] **2.2 Inserir currículo em PDF**
  - [ ] Salvar arquivo em `assets/docs/curriculo-isadora-sandri.pdf`.
  - [ ] Remover o atributo `hidden` do botão de download do currículo no Hero.
- [ ] **2.3 Aprovar textos institucionais definitivos**
  - [ ] Revisão do parágrafo da seção "Sobre" (SPEC §9.2).
  - [ ] Revisão da frase de apresentação do Hero (SPEC §9.1).
- [ ] **2.4 Cadastrar 3 projetos reais da graduação**
  - [ ] Projeto 1 (Título, Contexto, Período, Papel, Resumo, Descrição, Entregáveis, Aprendizado, Ferramentas).
  - [ ] Projeto 2 (Título, Contexto, Período, Papel, Resumo, Descrição, Entregáveis, Aprendizado, Ferramentas).
  - [ ] Projeto 3 (Título, Contexto, Período, Papel, Resumo, Descrição, Entregáveis, Aprendizado, Ferramentas).
  - [ ] (Opcional) Adicionar imagens dos projetos em `assets/img/projetos/`.
- [ ] **2.5 Confirmar lista de habilidades e ferramentas reais**
  - [ ] Ajustar termos em Análise, Gestão, Comunicação e Ferramentas.
- [ ] **2.6 Atualizar Experiência e Certificados reais**
  - [ ] Inserir cargos/projetos de extensão ou manter apenas o período atual na ATITUS.
  - [ ] Inserir certificados reais ou ocultar a seção.

---

## Fase 3: Publicação e Configuração do GitHub Pages (F3)

Objetivo: Conectar o código ao GitHub e colocar o site no ar com segurança e HTTPS ativado.

- [x] **3.1 Inicialização e configuração do repositório Git local**
  - Repositório inicializado na branch `main`.
- [x] **3.2 Conectar ao repositório remoto oficial**
  - Repositório público criado: `https://github.com/isadora2008sandri-alt/isadora2008sandri-alt.github.io`.
- [x] **3.3 Commit inicial estruturado**
  - Commit no padrão Conventional Commits (`feat: implanta esqueleto e estrutura base do portfolio`).
- [x] **3.4 Envio dos arquivos (`git push origin main`)**
  - Todos os arquivos enviados com sucesso para a branch `main`.
- [x] **3.5 Habilitar e verificar GitHub Pages no painel do repositório**
  - Publicação ativa a partir da raiz `/` da branch `main` com HTTPS ativado.
- [x] **3.6 Validação do endereço em produção**
  - Testado via requisição HTTP com resposta **200 OK** em `https://isadora2008sandri-alt.github.io/`.

---

## Fase 4: Auditoria de Qualidade, Acessibilidade, SEO e Polimento (F4)

Objetivo: Garantir cumprimento estrito de todos os itens da Definition of Done (§18 do SPEC) e requisitos não funcionais.

- [x] **4.1 Desempenho e Leveza (RNF-01 e RNF-02)**
  - Zero dependências externas (sem fontes externas, sem CDNs, sem scripts externos).
  - Peso total da página inicial inferior a 50 KB (meta da spec era < 500 KB).
- [x] **4.2 Teste de Navegação sem JavaScript (RNF-06)**
  - Detalhamento de projetos via `<details>` e `<summary>` nativos do HTML5.
  - Âncoras e links totalmente funcionais sem scripts.
- [x] **4.3 Teste de Responsividade e Quebra de Layout (RNF-03)**
  - Estrutura mobile-first sem rolagem horizontal em 320 px, 768 px, 1024 px e 1440 px.
- [x] **4.4 Teste de Contraste e Temas (RNF-04 e RF-01)**
  - Cores com contraste superior a 4,5:1 em temas claro e escuro.
  - `:focus-visible` bem definido para navegação por teclado.
- [x] **4.5 Teste de Links e Integridade**
  - Todos os links de âncoras validados com seus respectivos IDs.
  - Links externos configurados com `target="_blank"` e `rel="noopener noreferrer"`.
  - Botão de currículo protegido com atributo `hidden` conforme regra P8 até o PDF ser inserido.
- [x] **4.6 Teste de Compartilhamento Social, SEO e Erro 404**
  - Metatags Open Graph e Twitter Cards configuradas com `assets/img/og-image.png`.
  - Schema `Person` em JSON-LD válido.
  - `robots.txt` e `sitemap.xml` ativos na raiz.
  - Página 404 personalizada testada e validada em produção.

---

## Registro de Atualizações do Documento

| Data | Responsável | Ação Realizada |
| --- | --- | --- |
| 29/10/2026 | Antigravity AI | Criação do `todo.md` cobrindo o ciclo completo do projeto conforme `SPEC.md` e `AGENTS.md`. |
| 29/10/2026 | Antigravity AI | Conclusão das Fases 1, 3 e 4: esqueleto completo construído, repositório criado e site publicado no ar via GitHub Pages com HTTPS. |
