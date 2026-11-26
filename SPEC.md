# SPEC — Portfólio de Graduação · Isadora Sandri

> **O que é este arquivo?**
> Este é o documento de especificação do site. Ele descreve **o quê** será construído e **por quê** — em linguagem simples, sem código. Tudo o que for implementado deve estar previsto aqui. Se algo não está neste documento, não deve ser feito sem antes atualizar esta spec.

| Campo | Valor |
| --- | --- |
| Versão | 2.2 |
| Data | 25/11/2026 |
| Status | Fase 2 — Em execução (Inclusão dos projetos reais) |
| Autora / dona do produto | Isadora Sandri |
| Stack | HTML + CSS + JavaScript puro, sem build |
| Publicação | GitHub Pages (repositório `isadora2008sandri-alt.github.io`) |
| Idioma principal | Português do Brasil (pt-BR) |

---

## 1. Resumo em uma frase

Um site pessoal de uma página que reúne os trabalhos e projetos desenvolvidos durante a graduação em Administração na ATITUS, servindo como portfólio público para professores, colegas e recrutadores.

---

## 2. Contexto e problema

Isadora cursa Administração na ATITUS (formatura prevista para o 2º semestre de 2030) e produz, ao longo do curso, trabalhos acadêmicos, análises, estudos de caso e projetos em grupo. Hoje esse material fica disperso em PDFs, e-mails e ambientes virtuais de aprendizagem, sem uma vitrine organizada.

**Problema:** não existe um lugar único, profissional e fácil de compartilhar que mostre o que ela já produziu e o que sabe fazer.

**Consequência de não resolver:** oportunidades (estágio, empresa júnior, intercâmbio, primeiro emprego) dependem de a pessoa conseguir apresentar seu histórico de forma rápida e convincente.

---

## 3. Objetivos e métricas de sucesso

| # | Objetivo | Como saberemos que funcionou (métrica) |
| --- | --- | --- |
| O1 | Centralizar os trabalhos da graduação em um único endereço público | Site no ar em `https://isadora2008sandri-alt.github.io` com HTTPS ativo |
| O2 | Permitir que um visitante entenda quem é Isadora em menos de 30 segundos | Seção "Início" com nome, curso, instituição e frase de apresentação visíveis sem rolar a página no celular |
| O3 | Apresentar projetos de forma padronizada e comparável | Cada projeto exibe os mesmos 6 campos obrigatórios (§10) |
| O4 | Facilitar contato profissional | Botões de e-mail, LinkedIn e GitHub acessíveis a partir de qualquer ponto da página (menu + rodapé) |
| O5 | Ser fácil de manter pela própria autora, com apoio de IA | Adicionar um novo projeto exige editar **um único bloco de HTML**, sem tocar em CSS/JS |

**Fora das métricas:** número de visitas, taxa de conversão e ranking em buscadores. O site não terá analytics nesta versão (§5).

---

## 4. Público-alvo

| Persona | O que busca | O que precisa encontrar rápido |
| --- | --- | --- |
| **Recrutador / RH** | Validar competências e maturidade profissional | Nome, curso, previsão de formatura, projetos com resultado, currículo em PDF, LinkedIn |
| **Professor / avaliador** | Conferir trabalhos e evolução acadêmica | Contexto de cada projeto (disciplina, semestre), entregáveis e aprendizados |
| **Colega / visitante** | Referência e networking | Contato, links, visão geral do que ela faz |

**Contexto de uso predominante:** celular (acesso por link compartilhado em WhatsApp/LinkedIn), seguido de desktop.

---

## 5. Escopo

### 5.1 Dentro do escopo (versão 2.0 — Fase 2: Conteúdo Real)

- Site de **uma página** (`index.html`) como portfólio central com navegação por âncoras.
- Seções: **Início, Sobre, Projetos, Habilidades, Experiência, Certificados, Contato**.
- Substituição dos placeholders por **4 projetos reais e completos** da autora:
  1. **Relatório Estatístico da Pizzaria do Vitto:** Documento consultivo e acadêmico completo com análise de 19 meses, 48.620 itens e 21.350 pedidos (`projetos/pizzaria-do-vitto/relatorio.html` e download em PDF).
  2. **Versão em Slides da Pizzaria do Vitto:** Apresentação executiva em 12 slides com roteiro para banca, métricas e gráficos (`projetos/pizzaria-do-vitto/slides.html`).
  3. **Dashboard Analítico da Pizzaria do Vitto:** Painel interativo com visualizações em SVG, **modelo de previsão por série temporal ajustado por dia da semana** (com controle de horizonte, faixas de incerteza calculadas dos resíduos e métricas de erro medidas por backtest) e **chat conversacional com agente de IA especialista** sobre a base de dados (`projetos/pizzaria-do-vitto/dashboard.html`).
  4. **LLM-Wiki de Administração e Ciências Contábeis:** Plataforma interativa de consulta e estudo para toda a graduação e além, cobrindo TGA, Gestão Estratégica, Processos, Qualidade, Marketing, Pessoas, Contabilidade Geral, Demonstrações (BP, DRE, DFC), Contabilidade de Custos, Análise de Índices e Finanças Corporativas, com calculadoras interativas e assistente IA integrado (`projetos/llm-wiki/index.html`).
- Layout responsivo (celular, tablet, desktop).
- Modo claro e modo escuro automático.
- SEO básico: título, descrição, Open Graph, favicon, `sitemap.xml`, `robots.txt`.
- Acessibilidade: contraste AA, navegação por teclado, textos alternativos, HTML semântico.
- Zero dependências de CDNs ou servidores externos no carregamento (RNF-02, RNF-09).
- Publicação automática via GitHub Pages a cada `push` na branch `main`.

### 5.2 Fora do escopo (não fazer agora)

- Formulário de contato com backend de terceiros.
- Analytics, cookies e rastreadores invasivos.
- Blog ou área de comentários externos.
- Sistema de login com autenticação ou banco de dados relacional remoto.
- Loja virtual, pagamentos ou doações.
- Domínio próprio personalizado (mantém-se o subdomínio oficial do GitHub Pages).

---

## 6. Arquitetura de informação

Página única, na seguinte ordem:

1. **Cabeçalho fixo (sticky)** — monograma "IS" + menu com âncoras: Sobre · Formação · Projetos · Habilidades · Experiência · Certificados · Contato.
2. **Início (hero)** — nome, curso/instituição, cidade, frase de apresentação, botões "Ver projetos" e "Baixar CV".
3. **Sobre** — parágrafo de apresentação, interesses de atuação, o que busca (estágio/oportunidade).
4. **Formação** — linha do tempo com o curso em andamento (instituição, cidade, início e previsão de conclusão) e a formação complementar, esta última detalhada em Certificados.
5. **Projetos** — grade de cartões; cada cartão abre um detalhamento em `<details>` na própria página (sem nova página).
6. **Habilidades** — competências agrupadas (análise de dados, gestão e processos, comunicação, ferramentas).
7. **Experiência** — linha do tempo (acadêmica, empresa júnior, estágio, extensão).
8. **Certificados** — lista de cursos/certificações com emissor, ano e link opcional.
9. **Contato** — e-mail, LinkedIn, GitHub + botão "copiar e-mail".
10. **Rodapé** — nome, ano corrente, aviso de direitos, link para o topo.

**Navegação:** menu com âncoras suaves, com compensação da altura do cabeçalho fixo. Em telas pequenas, menu vira botão "hambúrguer" (funciona sem JavaScript, via `<details>` ou CSS `:target`).

---

## 7. Requisitos funcionais

Cada requisito tem um **critério de aceite**: uma frase objetiva que permite dizer "está pronto" ou "não está".

| ID | Requisito | Critério de aceite |
| --- | --- | --- |
| RF-01 | Exibir nome, curso, instituição, cidade e previsão de formatura no topo | Ao abrir no celular (375×667 px), os 5 dados aparecem sem rolagem |
| RF-02 | Menu de navegação com 7 âncoras funcionando | Cada link leva à seção correta, sem que o título fique escondido sob o cabeçalho fixo |
| RF-03 | Listar projetos em cartões | Cada cartão mostra título, contexto, período e 1 linha de resumo |
| RF-04 | Expandir detalhes do projeto sem sair da página | Clicar/teclar Enter no cartão revela descrição, papel, entregáveis, resultado e ferramentas |
| RF-05 | Botão de download do currículo | O PDF abre ou baixa; o arquivo existe e é o currículo atual |
| RF-06 | Botão "copiar e-mail" | Copia o endereço para a área de transferência e exibe confirmação visual por 2 s |
| RF-07 | Links externos (LinkedIn, GitHub) | Abrem em nova aba com `rel="noopener noreferrer"` e rótulo acessível |
| RF-08 | Seção de certificados | Cada item exibe nome, emissor, ano e, se houver, link de verificação |
| RF-09 | Rodapé com ano atualizado | O ano exibido corresponde ao ano corrente, sem edição manual |
| RF-10 | Estado vazio explícito | Itens ainda não preenchidos aparecem como `[SUBSTITUIR]` e **nunca** como texto inventado apresentado como real |

---

## 8. Requisitos não funcionais

| ID | Requisito | Meta verificável |
| --- | --- | --- |
| RNF-01 | Desempenho | Página inicial < 500 KB no total; LCP < 2,5 s em 4G simulado |
| RNF-02 | Sem dependências externas de runtime | Nenhum CDN, framework ou biblioteca de terceiros no carregamento da página |
| RNF-03 | Responsividade | Sem rolagem horizontal entre 320 px e 1920 px |
| RNF-04 | Acessibilidade | Lighthouse Acessibilidade ≥ 95; contraste mínimo 4,5:1 para texto |
| RNF-05 | SEO | Lighthouse SEO ≥ 95; `title` único, `meta description`, `h1` único por página |
| RNF-06 | Funciona sem JavaScript | Todo o conteúdo e a navegação permanecem legíveis com JS desativado |
| RNF-07 | Compatibilidade | Últimas 2 versões de Chrome, Edge, Firefox e Safari; iOS Safari 16+ |
| RNF-08 | Manutenibilidade | Todo o conteúdo editável está em `index.html`, em blocos comentados e identificados |
| RNF-09 | Privacidade | Nenhum cookie, rastreador ou requisição a domínios de terceiros |
| RNF-10 | Idioma do código e da documentação | Português do Brasil para textos, comentários e mensagens de commit |

---

## 9. Conteúdo e copy

### 9.1 Frase de apresentação (hero)

> **Estudante de Administração na ATITUS, em Passo Fundo (RS) — transformando trabalhos da graduação em prática.**

*Alternativas consideradas:* "Portfólio de Isadora Sandri: projetos, análises e aprendizados da graduação em Administração." · "Administração na teoria e na prática: uma seleção dos meus projetos ao longo da graduação na ATITUS."

### 9.2 Texto do "Sobre" (rascunho para aprovação)

> Sou estudante de Administração na ATITUS, em Passo Fundo (RS), com formatura prevista para o segundo semestre de 2030. Ao longo do curso, venho desenvolvendo trabalhos que unem análise de dados, gestão de processos e comunicação — de estudos de caso a projetos de melhoria em organizações.
>
> Este site reúne esses trabalhos de forma organizada: cada projeto mostra o contexto, o que foi feito e o que foi aprendido. Meu objetivo é transformar a teoria da sala de aula em prática profissional, construindo experiência em [ÁREA DE INTERESSE — ex.: gestão de pessoas, processos, marketing].
>
> Estou aberta a conversas sobre estágio, projetos e aprendizado contínuo.

### 9.3 Habilidades (confirmar e ajustar)

| Grupo | Itens (rascunho) |
| --- | --- |
| Análise e dados | Excel/planilhas, análise de indicadores, pesquisa de mercado |
| Gestão e processos | Mapeamento de processos, gestão de projetos, planejamento |
| Comunicação | Apresentações, escrita acadêmica, trabalho em equipe |
| Ferramentas | Pacote Office, Canva, [PREENCHER] |

### 9.4 Experiência (linha do tempo)

Itens marcados como `[SUBSTITUIR]` até a autora informar: empresa júnior, estágio, monitoria, extensão, intercâmbio, iniciação científica.

### 9.5 Certificados

Lista inicia vazia, com 1 item de exemplo `[SUBSTITUIR]` para demonstrar o formato.

### 9.6 Contato

| Canal | Valor |
| --- | --- |
| E-mail | `[PREENCHER]` |
| LinkedIn | `[PREENCHER]` |
| GitHub | `https://github.com/isadora2008sandri-alt` |
| Currículo | `assets/docs/curriculo-isadora-sandri.pdf` |

### 9.7 Regras de redação

- Português do Brasil, tratamento por "você" implícito, sem gírias.
- Frases curtas; no máximo 3 linhas por parágrafo em cartões.
- Voz ativa e verbos de ação ("analisei", "mapeei", "apresentei").
- Nada de adjetivos vazios ("incrível", "apaixonada por desafios") sem fato que sustente.
- Números e resultados sempre que existirem.
- Nenhum dado confidencial de empresa, colega ou professor.

---

## 10. Modelo de conteúdo de um projeto

Todo projeto, sem exceção, exibe estes campos:

| Campo | Obrigatório | Regra |
| --- | --- | --- |
| Título | Sim | Até 60 caracteres, sem "Projeto de..." |
| Contexto | Sim | Disciplina, empresa júnior, extensão, estágio ou iniciativa própria |
| Período | Sim | Formato `2026.2` (ano.semestre) |
| Papel | Sim | O que **ela** fez (ex.: "análise de dados", "líder do grupo") |
| Resumo | Sim | 1 frase, até 140 caracteres, exibida no cartão |
| Descrição | Sim | 2 a 4 frases: problema, abordagem, resultado |
| Entregáveis | Sim | Lista de 1 a 4 itens (relatório, apresentação, planilha, protótipo) |
| Resultado / aprendizado | Sim | O que mudou ou o que foi aprendido |
| Ferramentas | Não | Ex.: Excel, Power BI, Canva |
| Link | Não | PDF, repositório ou vídeo; abre em nova aba |
| Imagem | Não | `assets/img/projetos/<slug>.jpg`, 1200×750 px, com `alt` descritivo |

### 10.1 Projetos cadastrados (Fase 2)

#### Projeto 1: Relatório Estatístico · Pizzaria do Vitto
- **Título:** Relatório Estatístico da Pizzaria do Vitto
- **Contexto:** Consultoria Organizacional e Análise Estatística
- **Período:** `2026.2`
- **Papel:** Análise de dados, diagnóstico de cardápio e redação técnica
- **Resumo:** Estudo estatístico de 48.620 itens e 21.350 pedidos (jan/2025–ago/2026) orientando decisões de cardápio, horários e precificação.
- **Descrição:** Análise descritiva aprofundada da base histórica de vendas de 19 meses da Pizzaria do Vitto. Identificação da estabilidade da semana, concentração de demanda em 4 horas do dia, papel do tamanho G no faturamento e estabilidade do preço nominal, com 5 recomendações quantificadas de negócio.
- **Entregáveis:** Documento de relatório técnico completo (HTML/A4), Relatório em PDF para download, Síntese de 5 achados e 5 ações de impacto.
- **Resultado / aprendizado:** Domínio de estatística aplicada a negócios, decomposição de receita (efeito preço vs efeito volume vs cobertura), curva ABC e formulação de recomendações acionáveis.
- **Ferramentas:** PowerShell, R/Python, HTML5, CSS semântico, Git.
- **Link:** `projetos/pizzaria-do-vitto/relatorio.html`
- **Imagem:** `assets/img/projetos/pizzaria-relatorio.png`

#### Projeto 2: Apresentação Executiva em Slides · Pizzaria do Vitto
- **Título:** Apresentação Executiva · Pizzaria do Vitto
- **Contexto:** Comunicação Empresarial e Defesa Acadêmica
- **Período:** `2026.2`
- **Papel:** Elaboração de síntese executiva, storytelling e design de apresentação
- **Resumo:** Apresentação interativa em 12 lâminas com um insight central por slide e roteiro de fala para tomada de decisão.
- **Descrição:** Estruturação visual e narrativa dos 19 meses de vendas da Pizzaria do Vitto em formato de slides de alto impacto. Focado na clareza para a gestão e banca avaliadora, com notas de orador integradas, tabelas síntese e gráficos analíticos.
- **Entregáveis:** Deck de slides interativo em HTML5 (com navegação por teclado e tela cheia), Roteiro de fala para banca, Gráficos executivos de suporte.
- **Resultado / aprendizado:** Comunicação executiva concisa, síntese de dados complexos em visualizações diretas e técnicas de oratória aplicada à gestão.
- **Ferramentas:** HTML5, CSS moderno, Vanilla JS, Design System.
- **Link:** `projetos/pizzaria-do-vitto/slides.html`
- **Imagem:** `assets/img/projetos/pizzaria-slides.png`

#### Projeto 3: Dashboard Interativo, Previsão Temporal & IA · Pizzaria do Vitto
- **Título:** Dashboard Analítico & Preditivo · Pizzaria do Vitto
- **Contexto:** Business Intelligence & Inteligência Artificial Aplicada
- **Período:** `2026.2`
- **Papel:** Modelagem preditiva de séries temporais, desenvolvimento de dashboard e agente de IA
- **Resumo:** Painel dinâmico com modelo de previsão temporal (faixas de incerteza calculadas do próprio modelo) e assistente de IA para consulta analítica em tempo real.
- **Descrição:** Plataforma interativa de visualização de dados com gráficos responsivos em SVG puro, integrando um modelo de suavização exponencial por dia da semana, ajustado sobre os 358 dias com venda registrados, com horizontes customizáveis. Conta com chat inteligente alimentado por base de conhecimento analítica (RAG) capaz de responder perguntas sobre a operação da pizzaria.
- **Entregáveis:** Dashboard interativo com gráficos SVG, Modelo de Previsão por Séries Temporais com métricas de erro (MAPE/RMSE), Chat inteligente com agente analítico de IA.
- **Resultado / aprendizado:** Engenharia de dados, aplicação prática de métodos de séries temporais e integração de assistentes de IA para tomada de decisão gerencial.
- **Ferramentas:** Vanilla JavaScript, SVG interativo, Séries Temporais (suavização exponencial), RAG/NLP.
- **Link:** `projetos/pizzaria-do-vitto/dashboard.html`
- **Imagem:** `assets/img/projetos/pizzaria-dashboard.png`

#### Projeto 4: LLM-Wiki de Administração e Ciências Contábeis
- **Título:** LLM-Wiki · Administração e Contabilidade
- **Contexto:** Gestão do Conhecimento & Plataforma de Estudos
- **Período:** `2026.2`
- **Papel:** Curadoria conteudista, arquitetura da informação, calculadoras e engenharia de IA
- **Resumo:** Enciclopédia digital e centro de estudos com dezenas de tópicos de Administração e Contabilidade, calculadoras e tutor IA.
- **Descrição:** Base de conhecimento exaustiva e interativa voltada para todo o percurso acadêmico e profissional em Administração e Ciências Contábeis. Inclui sínteses teóricas (TGA, Porter, BSC, Lean, 4Ps), demonstrações contábeis completas (BP, DRE, DFC, Custos, Índices de Liquidez e Rentabilidade), calculadoras financeiras interativas e um tutor virtual embutido.
- **Entregáveis:** Wiki digital navegável com busca em tempo real, Calculadoras financeiras e de custos interativas, Simulador de estudos e quiz interativo com IA.
- **Resultado / aprendizado:** Consolidação holística dos pilares de Administração e Contabilidade, arquitetura da informação e criação de ferramentas educativas com inteligência artificial.
- **Ferramentas:** HTML5, CSS modular, JavaScript, Algoritmos de busca e inferência.
- **Link:** `projetos/llm-wiki/index.html`
- **Imagem:** `assets/img/projetos/llm-wiki.png`

---

## 11. Identidade visual

**Direção:** minimalista, claro, com um único acento em vinho. Muito espaço em branco, tipografia como protagonista, sem ilustrações decorativas.

### 11.1 Cores (tokens)

| Token | Claro | Escuro | Uso |
| --- | --- | --- | --- |
| `--cor-primaria` | `#722F37` | `#C98B96` | Links, botões, detalhes |
| `--cor-primaria-escura` | `#4A1C24` | `#E8C4CB` | Hover, títulos de destaque |
| `--cor-fundo` | `#FFFFFF` | `#12100F` | Fundo da página |
| `--cor-superficie` | `#FAF7F6` | `#1C1917` | Cartões e blocos |
| `--cor-texto` | `#1F1B1A` | `#F2EDEC` | Texto principal |
| `--cor-texto-suave` | `#5C5350` | `#B8AEAB` | Texto secundário |
| `--cor-borda` | `#E7DFDD` | `#2E2927` | Divisórias |

Todas as cores devem ser declaradas **apenas** em `assets/css/styles.css`, em `:root` e no bloco `@media (prefers-color-scheme: dark)`. Nenhuma cor "solta" no HTML.

### 11.2 Tipografia

- Família: pilha de fontes do sistema (`system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`) — zero requisições externas.
- Escala: 1,25 (minor third) a partir de 16 px; `h1` entre 2,25 rem e 3 rem.
- Entrelinha 1,6 no corpo; 1,2 em títulos.
- Largura máxima de leitura: 68 caracteres.

### 11.3 Elementos

- Monograma "IS" em texto (sem imagem), no cabeçalho e como favicon (`favicon.svg`).
- Botões: primário (fundo vinho, texto branco) e secundário (contorno).
- Cartões: borda de 1 px, raio de 12 px, sem sombras fortes.
- Ícones: apenas SVG inline, traço de 1,5 px, quando indispensáveis.
- Sem foto nesta versão; espaço reservado para inclusão futura.

---

## 12. Publicação (GitHub Pages)

| Item | Definição |
| --- | --- |
| Repositório | `isadora2008sandri-alt.github.io` (público) |
| Branch de publicação | `main`, pasta raiz (`/`) |
| URL | `https://isadora2008sandri-alt.github.io` |
| Build | Nenhum — GitHub Pages serve os arquivos estáticos como estão |
| Arquivo `.nojekyll` | Presente na raiz (evita processamento Jekyll) |
| HTTPS | Obrigatório (Enforce HTTPS ativado) |
| Domínio próprio | Fora do escopo desta versão |
| Página 404 | `404.html` simples, com link para a página inicial |
| Processo de publicação | `git push` na `main` → publicação automática em até 2 minutos |

**Pré-requisitos:** Git instalado na máquina e autenticação do GitHub configurada (`gh auth login`).

---

## 13. Preparação para tradução (i18n)

A versão 1.0 é **somente em português**, mas a estrutura deve permitir adicionar inglês sem reescrever o site:

1. `<html lang="pt-BR">` e todo texto visível dentro de elementos próprios (nunca montado por concatenação em JavaScript).
2. Nenhum texto embutido em imagens.
3. Datas em `<time datetime="2026-08">` com texto legível separado.
4. Textos de interface (menu, botões, "copiar e-mail") isolados em elementos com `data-i18n="chave"`, para que uma futura tradução possa substituí-los sem alterar o layout.
5. Futura versão em inglês em `en/index.html`, com `<link rel="alternate" hreflang="en">` e seletor de idioma no cabeçalho.
6. Comentários no HTML marcando o início e o fim de cada bloco de texto traduzível.

---

## 14. Acessibilidade e SEO

### 14.1 Acessibilidade (obrigatório)

- Um único `<h1>`; hierarquia de títulos sem saltos.
- Todos os links e botões com rótulo compreensível fora de contexto.
- Foco visível (`:focus-visible`) com contraste de 3:1 mínimo.
- Contraste de texto ≥ 4,5:1 (verificado nos dois temas).
- Imagens com `alt`; imagens decorativas com `alt=""`.
- Navegação completa por teclado, incluindo o menu mobile.
- `prefers-reduced-motion` respeitado (sem animações quando solicitado).
- Idioma declarado em `<html lang>`.

### 14.2 SEO

- `title` ≤ 60 caracteres: "Isadora Sandri — Portfólio de Administração".
- `meta description` ≤ 155 caracteres.
- Open Graph + Twitter Card com imagem `assets/img/og-image.png` (1200×630 px).
- `sitemap.xml` e `robots.txt` na raiz.
- URLs estáveis e sem parâmetros.
- Dados estruturados `Person` em JSON-LD (nome, curso, instituição, cidade, links).

---

## 15. Premissas e decisões em aberto

Itens abaixo foram **assumidos como padrão** e podem ser alterados a qualquer momento. Alterações exigem atualizar esta spec.

| # | Premissa assumida | Impacto se mudar |
| --- | --- | --- |
| P1 | Repositório público `isadora2008sandri-alt.github.io`, sem domínio próprio | Domínio próprio exige DNS + arquivo `CNAME` |
| P2 | HTML/CSS/JS puro, sem Jekyll e sem build | Jekyll mudaria a estrutura de pastas e o fluxo de edição |
| P3 | Extras ativados: responsivo, modo escuro automático, SEO/Open Graph, acessibilidade | — |
| P4 | Extras desativados: formulário de contato, analytics, blog | Formulário exige serviço externo (ex.: Formspree) |
| P5 | Manutenção feita pela autora com apoio de IA | Se outra pessoa assumir, o `AGENTS.md` deve ser revisado |
| P6 | Frase do hero = alternativa 1 (§9.1) | Troca de texto em um único elemento |
| P7 | Sem foto profissional nesta versão; monograma "IS" | Inclusão de foto exige `assets/img/` + ajuste de layout |
| P8 | Currículo em PDF fornecido pela autora | Sem o PDF, o botão deve ficar oculto, não quebrado |

### 15.1 Pendências de conteúdo (bloqueiam a publicação)

- [x] E-mail de contato (`isadora2008sandri@gmail.com`)
- [x] URL do LinkedIn (`https://www.linkedin.com/in/isadora-sandri-8664832a9/`)
- [ ] Currículo em PDF (permanece protegido com `hidden` conforme P8 até envio do arquivo definitivo)
- [x] Lista real de projetos (4 projetos reais, técnicos e completos implantados)
- [x] Habilidades e ferramentas confirmadas
- [x] Experiência acadêmica e projetos
- [ ] Certificados adicionais (mantém-se exemplo de referência ou itens já cursados)
- [x] Aprovação dos textos institucionais

---

## 16. Riscos

| Risco | Probabilidade | Mitigação |
| --- | --- | --- |
| Conteúdo inventado ser publicado como real | Baixa | Utilização exclusiva de dados e trabalhos acadêmicos reais desenvolvidos |
| Repositório ficar público com dados pessoais sensíveis | Baixa | Revisão de conteúdo antes do primeiro push; sem telefone/endereço |
| Site quebrar ao adicionar projeto (HTML copiado errado) | Média | Bloco-modelo comentado em `index.html` + checklist do `AGENTS.md` |
| Perda de trabalho por edição direta no GitHub | Baixa | Commits pequenos e mensagens claras; histórico do Git como backup |
| Fonte externa sair do ar | Nula | Stack usa apenas fontes do sistema |

---

## 17. Roadmap

| Fase | Entrega | Critério de saída |
| --- | --- | --- |
| **F0 — Especificação** | `SPEC.md` e `AGENTS.md` | Aprovação da autora (Concluída) |
| **F1 — Esqueleto** | `index.html` com todas as seções, CSS e JS básicos | Site abre localmente, sem erros no console (Concluída) |
| **F2 — Conteúdo real** | 4 Projetos reais implementados (Relatório, Slides, Dashboard com Previsão e IA, LLM-Wiki) | Projetos integrados e sem placeholders (Concluída) |
| **F3 — Publicação** | Repositório, GitHub Pages, HTTPS | URL pública acessível (Concluída) |
| **F4 — Polimento** | Acessibilidade, SEO, Open Graph, 404 | Lighthouse ≥ 90 em todas as categorias (Concluída) |

---

## 18. Definition of Done (do site)

O site é considerado pronto quando **todos** os itens abaixo forem verdadeiros:

1. Todas as seções de §6 existem e são alcançáveis pelo menu.
2. Nenhum placeholder `[SUBSTITUIR]` ou `[PREENCHER]` visível em produção na seção de projetos.
3. Nenhum link quebrado (menu, contato, currículo protegido, projetos, certificados).
4. Funciona em 320 px, 768 px, 1024 px e 1440 px de largura, sem rolagem horizontal.
5. Funciona com JavaScript desativado (páginas estáticas acessíveis e navegação por âncoras/details preservada).
6. Contraste e foco visível aprovados nos temas claro e escuro.
7. Lighthouse (mobile): Desempenho ≥ 90, Acessibilidade ≥ 95, Boas práticas ≥ 95, SEO ≥ 95.
8. `sitemap.xml`, `robots.txt`, `favicon.svg` e `og-image.png` presentes.
9. Publicado em `https://isadora2008sandri-alt.github.io` com HTTPS ativo.
10. `README.md` explica em 5 passos como editar um projeto e como publicar.

---

## 19. Glossário (para leitura leiga)

| Termo | Significado |
| --- | --- |
| **GitHub Pages** | Serviço gratuito do GitHub que publica um site a partir de um repositório |
| **Repositório** | Pasta do projeto hospedada no GitHub, com histórico de versões |
| **Branch `main`** | Linha principal do projeto; o que está nela é o que vai ao ar |
| **Push** | Enviar as alterações do computador para o GitHub |
| **Deploy** | Publicar a versão nova do site |
| **Responsivo** | Layout que se adapta a celular, tablet e computador |
| **Placeholder** | Texto provisório que precisa ser substituído |
| **Lighthouse** | Ferramenta do Chrome que mede desempenho, acessibilidade e SEO |
| **Open Graph** | Informações que aparecem ao compartilhar o link (imagem, título, descrição) |
| **HTML semântico** | Uso de elementos que descrevem o conteúdo (`header`, `nav`, `main`, `section`) |
| **Contraste AA** | Padrão de legibilidade definido pelas diretrizes WCAG |
| **Spec-driven development** | Praticar a documentação do que será feito antes de escrever o código |

---

## 20. Histórico de decisões

| Data | Versão | Decisão |
| --- | --- | --- |
| 29/10/2026 | 1.0 | Criação da spec a partir da entrevista com a autora; stack e publicação definidas; escopo da v1.0 fechado |
| 19/11/2026 | 2.0 | Fase 2: Entrada do escopo real de projetos. Integração do Relatório Estatístico da Pizzaria do Vitto, Versão em Slides, Dashboard Interativo com Modelo Preditivo de Séries Temporais e Chat com IA, e LLM-Wiki de Administração e Ciências Contábeis. |
| 25/11/2026 | 2.1 | Arquitetura de informação (§6) e RF-02: inclusão da seção **Formação** na página inicial, passando o menu de 6 para 7 âncoras. |
| 25/11/2026 | 2.2 | Correção de veracidade no dashboard (§5.1 e §10.1, Projeto 3): o painel descrevia "Holt-Winters com sazonalidade semanal" e exibia MAPE 4,72% e R² 0,912 fixos no HTML, sem modelo ajustado nem série real. O motor foi reescrito sobre a série real de 358 dias com venda: um modelo de suavização exponencial por dia da semana, com MAPE/RMSE/R² calculados em tempo de execução e faixas de incerteza vindas dos resíduos. Tendência e componente sazonal foram testados e descartados por piorarem o erro fora da amostra. |

---

**Aprovação:** ___________________________ (Isadora Sandri) · Data: ____/____/______
