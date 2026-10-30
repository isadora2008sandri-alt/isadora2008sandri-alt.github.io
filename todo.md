# TODO — Portfólio de Graduação · Isadora Sandri

> **O que é este arquivo?**  
> Este documento é o plano de ação prático para executar o projeto do início ao fim, baseado nas especificações do [`SPEC.md`](./SPEC.md) e nas diretrizes de engenharia do [`AGENTS.md`](./AGENTS.md).  
> Cada tarefa possui seu status, critérios de conclusão e indicação de quem deve executar (a autora ou o agente de IA).

---

## Painel de Progresso Geral

- [x] **Fase 0 — Especificação e Planejamento** (Concluída)
- [ ] **Fase 1 — Estrutura e Esqueleto Técnico** (Próximo passo)
- [ ] **Fase 2 — Coleta e Inserção de Conteúdo Real** (Depende de dados da autora)
- [ ] **Fase 3 — Publicação e Configuração do GitHub Pages**
- [ ] **Fase 4 — Auditoria de Qualidade, Acessibilidade, SEO e Polimento**

---

## Fase 0: Especificação e Planejamento

Objetivo: Definir todas as regras, identidade visual, arquitetura de informação e critérios de aceite antes de codar.

- [x] **0.1 Definir a especificação do produto (`SPEC.md`)**
  - *Critério de aceite:* Documento completo contendo objetivos, personas, escopo (dentro/fora), arquitetura de informação, requisitos funcionais/não funcionais, tokens visuais e roadmap.
- [x] **0.2 Estabelecer guia de desenvolvimento para agentes (`AGENTS.md`)**
  - *Critério de aceite:* Regras invioláveis, stack técnica, convenções de código (HTML/CSS/JS), convenção de commits e Definition of Done documentadas.
- [x] **0.3 Criar o plano de ação detalhado (`todo.md`)**
  - *Critério de aceite:* Roteiro sequencial de tarefas cobrindo 100% dos requisitos da spec até a publicação final.
- [ ] **0.4 Validação inicial da autora**
  - *Responsável:* Isadora Sandri.
  - *Critério de aceite:* Leitura e concordância com os objetivos do projeto descritos no `SPEC.md`.

---

## Fase 1: Estrutura e Esqueleto Técnico (F1)

Objetivo: Construir todos os arquivos estruturais do site, folha de estilos completa, scripts de melhoria progressiva e páginas de suporte com placeholders explícitos (`[SUBSTITUIR]`).

### 1.1 Preparação de pastas e arquivos de suporte
- [ ] **Criar a árvore de diretórios do projeto**
  - `assets/css/`
  - `assets/js/`
  - `assets/img/projetos/`
  - `assets/docs/`
- [ ] **Criar arquivo `.nojekyll` na raiz**
  - *Critério de aceite:* Arquivo vazio na raiz para desativar o processamento do Jekyll no GitHub Pages.
- [ ] **Criar arquivo `robots.txt`**
  - *Critério de aceite:* Permitir rastreamento por buscadores e apontar para o sitemap em `https://isadora2008sandri-alt.github.io/sitemap.xml`.
- [ ] **Criar arquivo `sitemap.xml`**
  - *Critério de aceite:* Listar a URL raiz (`https://isadora2008sandri-alt.github.io/`) com prioridade e data atual.
- [ ] **Criar `assets/img/favicon.svg`**
  - *Critério de aceite:* Favicon vetorial com o monograma tipográfico "IS", utilizando a paleta vinho oficial (`#722F37`).

### 1.2 Estilos e Design System (`assets/css/styles.css`)
- [ ] **Declarar tokens de design em `:root` e no tema escuro**
  - *Critério de aceite:* Todas as cores oficiais definidas em variáveis CSS para os temas claro e escuro (`--cor-primaria`, `--cor-primaria-escura`, `--cor-fundo`, `--cor-superficie`, `--cor-texto`, `--cor-texto-suave`, `--cor-borda`), garantindo contraste ≥ 4,5:1.
- [ ] **Configurar Reset, tipografia e regras base**
  - *Critério de aceite:* `box-sizing: border-box`, margens zeradas, uso exclusivo da pilha de fontes do sistema (sem download externo), escala tipográfica proporcional e limite de largura de leitura (68 caracteres).
- [ ] **Estilizar componentes e layout responsivo (Mobile-first)**
  - *Critério de aceite:*
    - Cabeçalho fixo com blur/fundo sólido e compensação de rolagem nas âncoras (`scroll-margin-top`).
    - Menu responsivo adaptado para telas a partir de 320 px até 1920 px.
    - Seção Hero (Início) diagramada para exibir as 5 informações essenciais no celular sem rolagem (RF-01).
    - Cartões de projetos com borda de 1 px, raio de 12 px, tags visuais e estilização de `<details>/<summary>`.
    - Grades de habilidades e linha do tempo de experiência.
    - Botões primários (vinho com texto branco), secundários (contorno) e estados visíveis de `:focus-visible`.
- [ ] **Configurar acessibilidade de movimento (`prefers-reduced-motion`)**
  - *Critério de aceite:* Transições e animações só ocorrem quando não houver preferência por redução de movimento; duração máxima de 200 ms.

### 1.3 Marcação Semântica e Acessível (`index.html`)
- [ ] **Estruturar cabeçalho técnico e metadados**
  - *Critério de aceite:* `<html lang="pt-BR">`, `title` (≤ 60 caracteres), `meta description` (≤ 155 caracteres), viewport responsivo, metatags Open Graph, Twitter Cards e schema estruturado JSON-LD (`Person`).
- [ ] **Construir Cabeçalho e Navegação (`<header>` / `<nav>`)**
  - *Critério de aceite:* Monograma "IS" como link para o topo, 6 links de navegação para as seções, menu expansível acessível via teclado e operável sem JavaScript.
- [ ] **Construir Seção Início (`#inicio` / hero)**
  - *Critério de aceite:* Nome completo, curso, instituição (ATITUS), cidade (Passo Fundo/RS), previsão de formatura (2030/2), frase de impacto e botões de ação ("Ver projetos" e "Baixar currículo").
- [ ] **Construir Seção Sobre (`#sobre`)**
  - *Critério de aceite:* Texto de apresentação em parágrafos curtos, objetivos profissionais e marcação pronta para tradução (`data-i18n`).
- [ ] **Construir Seção Projetos (`#projetos`)**
  - *Critério de aceite:*
    - Incluir bloco de código modelo comentado (`<!-- MODELO DE CARTÃO — copie, cole e substitua os campos -->`).
    - 3 cartões de projetos iniciais utilizando os dados de placeholder estruturados com os 6 campos obrigatórios do SPEC §10 via `<details>`.
- [ ] **Construir Seção Habilidades (`#habilidades`)**
  - *Critério de aceite:* 4 blocos categorizados (Análise e Dados, Gestão e Processos, Comunicação, Ferramentas).
- [ ] **Construir Seção Experiência (`#experiencia`)**
  - *Critério de aceite:* Bloco-modelo comentado e estrutura de linha do tempo com itens `[SUBSTITUIR]`.
- [ ] **Construir Seção Certificados (`#certificados`)**
  - *Critério de aceite:* Bloco-modelo comentado e estrutura de lista de certificações com item placeholder.
- [ ] **Construir Seção Contato (`#contato`)**
  - *Critério de aceite:* Links diretos para E-mail, LinkedIn, GitHub e botão interativo "Copiar e-mail".
- [ ] **Construir Rodapé (`<footer>`)**
  - *Critério de aceite:* Monograma, direitos reservados, ano (com fallback estático) e link "Voltar ao topo".

### 1.4 Comportamento e Melhoria Progressiva (`assets/js/main.js`)
- [ ] **Implementar lógica Vanilla JS ("use strict")**
  - *Critério de aceite:*
    - Menu mobile (abrir/fechar com gerenciamento de foco e atributos `aria-expanded`).
    - Botão "Copiar e-mail" com API Clipboard e feedback visual acessível de 2 segundos.
    - Atualização dinâmica do ano corrente no rodapé (`new Date().getFullYear()`).
    - Fechamento automático do menu mobile ao clicar em um link de âncora.
    - Zero erros no console (`console.log/error`).
    - Garantir que se o JS for desativado, o site continue 100% legível e navegável.

### 1.5 Página de Erro 404 (`404.html`)
- [ ] **Criar a página de erro personalizada**
  - *Critério de aceite:* Mensagem clara e amigável em português, estilo visual consistente com a identidade da marca e botão direto para retornar à página inicial.

### 1.6 Documentação de Operação (`README.md`)
- [ ] **Elaborar guia prático para leigos**
  - *Critério de aceite:* Explicação passo a passo em linguagem simples de como visualizar localmente, como editar um projeto no HTML e como publicar via Git/GitHub.

### 1.7 Validação da Fase 1
- [ ] **Testar servidor local**
  - *Comando:* `python -m http.server 8000`
  - *Critério de aceite:* Navegação funcional, layout íntegro em 320 px e 1440 px, sem falhas no console.

---

## Fase 2: Coleta e Inserção de Conteúdo Real (F2)

Objetivo: Substituir todos os placeholders `[SUBSTITUIR]` e `[PREENCHER]` pelos dados e materiais reais fornecidos pela Isadora (conforme pendências de §15.1 do SPEC).

- [ ] **2.1 Definir e cadastrar canais de contato reais**
  - [ ] E-mail profissional / acadêmico.
  - [ ] URL do perfil do LinkedIn.
  - [ ] Confirmar URL do GitHub (`https://github.com/isadora2008sandri-alt`).
- [ ] **2.2 Inserir currículo em PDF**
  - [ ] Fornecer o arquivo atualizado.
  - [ ] Salvar em `assets/docs/curriculo-isadora-sandri.pdf`.
  - [ ] *Regra P8:* Se o arquivo ainda não existir no momento de publicar, adicionar o atributo `hidden` ao botão de download para evitar links quebrados.
- [ ] **2.3 Redigir e aprovar os textos institucionais**
  - [ ] Aprovação do texto da seção "Sobre" (SPEC §9.2).
  - [ ] Aprovação da frase de apresentação do Hero (SPEC §9.1).
- [ ] **2.4 Coleta e cadastro de 3 projetos reais**
  - [ ] Projeto 1 preenchido com todos os 6 campos obrigatórios + ferramentas/links.
  - [ ] Projeto 2 preenchido com todos os 6 campos obrigatórios + ferramentas/links.
  - [ ] Projeto 3 preenchido com todos os 6 campos obrigatórios + ferramentas/links.
  - [ ] (Opcional) Adicionar imagens de capa de cada projeto em `assets/img/projetos/<slug>.jpg` (1200×750 px, < 150 KB) com atributo `alt` descritivo.
- [ ] **2.5 Confirmar lista de habilidades e ferramentas**
  - [ ] Validar e atualizar as competências em Análise e Dados, Gestão e Processos, Comunicação e Ferramentas (SPEC §9.3).
- [ ] **2.6 Atualizar ou ocultar Experiência e Certificados**
  - [ ] Preencher itens reais de experiência (empresa júnior, estágio, monitoria, etc.) ou ocultar a seção se não houver dados.
  - [ ] Preencher certificados reais com emissores e anos ou ocultar a seção se não houver.
- [ ] **2.7 Gerar imagem de compartilhamento (`assets/img/og-image.png`)**
  - [ ] Criar imagem com dimensões 1200×630 px com monograma "IS", nome e apresentação para visualização em redes sociais.
- [ ] **2.8 Varredura de placeholders**
  - *Critério de aceite:* Busca global no projeto confirmando que **zero** ocorrências de `[SUBSTITUIR]` ou `[PREENCHER]` permanecem no HTML final.

---

## Fase 3: Publicação e Configuração do GitHub Pages (F3)

Objetivo: Conectar o código ao GitHub e colocar o site no ar com segurança e HTTPS ativado.

- [ ] **3.1 Inicialização e configuração do repositório Git local**
  - *Critério de aceite:* Repositório inicializado na branch `main`.
- [ ] **3.2 Conectar ao repositório remoto oficial**
  - *Repositório:* `git@github.com:isadora2008sandri-alt/isadora2008sandri-alt.github.io.git` (ou HTTPS correspondente).
- [ ] **3.3 Commit inicial estruturado**
  - *Critério de aceite:* Mensagem seguindo Conventional Commits (ex.: `feat: implanta esqueleto e conteudo do portfolio`).
- [ ] **3.4 Envio dos arquivos (`git push origin main`)**
  - *Critério de aceite:* Código presente na branch `main` do repositório remoto.
- [ ] **3.5 Habilitar e verificar GitHub Pages no painel do repositório**
  - *Critério de aceite:*
    - Source: Deploy from a branch.
    - Branch: `main` / pasta: `/(root)`.
    - Opção "Enforce HTTPS" marcada como ativa.
- [ ] **3.6 Validação do endereço em produção**
  - *Critério de aceite:* Site respondendo com status 200 em `https://isadora2008sandri-alt.github.io`.

---

## Fase 4: Auditoria de Qualidade, Acessibilidade, SEO e Polimento (F4)

Objetivo: Garantir cumprimento estrito de todos os itens da Definition of Done (§18 do SPEC) e requisitos não funcionais.

- [ ] **4.1 Auditoria Lighthouse (Mobile)**
  - [ ] Desempenho ≥ 90 (peso total < 500 KB, LCP < 2,5 s).
  - [ ] Acessibilidade ≥ 95.
  - [ ] Boas Práticas ≥ 95.
  - [ ] SEO ≥ 95.
- [ ] **4.2 Teste de Navegação sem JavaScript (RNF-06)**
  - *Critério de aceite:* Desativar o JavaScript no navegador e certificar-se de que todo o conteúdo, projetos e âncoras funcionam perfeitamente.
- [ ] **4.3 Teste de Responsividade e Quebra de Layout (RNF-03)**
  - [ ] 320 px (celulares compactos).
  - [ ] 375 px (iPhone padrão).
  - [ ] 768 px (tablets).
  - [ ] 1024 px (telas intermediárias).
  - [ ] 1440 px+ (monitores desktop).
  - *Critério de aceite:* Ausência de qualquer rolagem horizontal ou sobreposição de texto em todas as larguras.
- [ ] **4.4 Teste de Contraste e Temas (RNF-04 e RF-01)**
  - [ ] Tema claro verificado com leitor de contraste (mínimo 4,5:1).
  - [ ] Tema escuro (`prefers-color-scheme: dark`) verificado com contraste suficiente.
  - [ ] Estados de `:focus-visible` visíveis e nítidos ao navegar por tecla `Tab`.
- [ ] **4.5 Teste de Links e Integridade**
  - [ ] Todos os links internos ancoram suavemente sem esconder o título sob o cabeçalho.
  - [ ] Links externos (GitHub, LinkedIn) abrem em nova aba com `rel="noopener noreferrer"`.
  - [ ] Se o PDF do currículo estiver presente, o download funciona; se ausente, o botão está oculto.
- [ ] **4.6 Teste de Compartilhamento Social e SEO**
  - [ ] Validar tags Open Graph em ferramenta de preview (imagem, título e descrição aparecem corretamente).
  - [ ] Testar carregamento da página de erro acessando uma URL inexistente (`/pagina-inexistente`).

---

## Registro de Atualizações do Documento

| Data | Responsável | Ação Realizada |
| --- | --- | --- |
| 29/10/2026 | Antigravity AI | Criação do `todo.md` cobrindo o ciclo completo do projeto conforme `SPEC.md` e `AGENTS.md`. |
