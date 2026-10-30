# SPEC — Portfólio de Graduação · Isadora Sandri

> **O que é este arquivo?**
> Este é o documento de especificação do site. Ele descreve **o quê** será construído e **por quê** — em linguagem simples, sem código. Tudo o que for implementado deve estar previsto aqui. Se algo não está neste documento, não deve ser feito sem antes atualizar esta spec.

| Campo | Valor |
| --- | --- |
| Versão | 1.0 |
| Data | 29/10/2026 |
| Status | Rascunho — aguardando aprovação da autora |
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

### 5.1 Dentro do escopo (versão 1.0)

- Site de **uma página** (`index.html`) com navegação por âncoras.
- Seções: **Início, Sobre, Projetos, Habilidades, Experiência, Certificados, Contato**.
- **3 projetos** de exemplo, prontos para substituição, marcados como `[SUBSTITUIR]`.
- Botão **"Baixar currículo (PDF)"** apontando para `assets/docs/curriculo-isadora-sandri.pdf`.
- Layout responsivo (celular, tablet, desktop).
- Modo claro como padrão e **modo escuro automático** quando o sistema operacional estiver em tema escuro.
- SEO básico: título, descrição, Open Graph, favicon, `sitemap.xml`, `robots.txt`.
- Acessibilidade: contraste AA, navegação por teclado, textos alternativos, HTML semântico.
- Estrutura preparada para uma futura versão em inglês (§13).
- Publicação automática via GitHub Pages a cada `push` na branch `main`.

### 5.2 Fora do escopo (não fazer agora)

- Formulário de contato com envio de e-mail.
- Analytics, cookies e rastreamento.
- Blog, artigos ou área de comentários.
- Login, área restrita ou banco de dados.
- Loja, pagamentos, doações.
- Domínio próprio (`isadora.com.br` etc.) e e-mail profissional.
- Versão em inglês traduzida (apenas a **preparação** está no escopo).
- Páginas individuais por projeto (avaliar na Fase 2, §17).
- CMS, painel administrativo ou geração automática de conteúdo.

---

## 6. Arquitetura de informação

Página única, na seguinte ordem:

1. **Cabeçalho fixo (sticky)** — monograma "IS" + menu com âncoras: Sobre · Projetos · Habilidades · Experiência · Certificados · Contato.
2. **Início (hero)** — nome, curso/instituição, cidade, frase de apresentação, botões "Ver projetos" e "Baixar CV".
3. **Sobre** — parágrafo de apresentação, interesses de atuação, o que busca (estágio/oportunidade).
4. **Projetos** — grade de cartões; cada cartão abre um detalhamento em `<details>` na própria página (sem nova página).
5. **Habilidades** — competências agrupadas (análise de dados, gestão e processos, comunicação, ferramentas).
6. **Experiência** — linha do tempo (acadêmica, empresa júnior, estágio, extensão).
7. **Certificados** — lista de cursos/certificações com emissor, ano e link opcional.
8. **Contato** — e-mail, LinkedIn, GitHub + botão "copiar e-mail".
9. **Rodapé** — nome, ano corrente, aviso de direitos, link para o topo.

**Navegação:** menu com âncoras suaves, com compensação da altura do cabeçalho fixo. Em telas pequenas, menu vira botão "hambúrguer" (funciona sem JavaScript, via `<details>` ou CSS `:target`).

---

## 7. Requisitos funcionais

Cada requisito tem um **critério de aceite**: uma frase objetiva que permite dizer "está pronto" ou "não está".

| ID | Requisito | Critério de aceite |
| --- | --- | --- |
| RF-01 | Exibir nome, curso, instituição, cidade e previsão de formatura no topo | Ao abrir no celular (375×667 px), os 5 dados aparecem sem rolagem |
| RF-02 | Menu de navegação com 6 âncoras funcionando | Cada link leva à seção correta, sem que o título fique escondido sob o cabeçalho fixo |
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

**Projetos iniciais (placeholders):** `[SUBSTITUIR] Projeto 1 — Estudo de caso`, `[SUBSTITUIR] Projeto 2 — Análise de dados`, `[SUBSTITUIR] Projeto 3 — Melhoria de processo`.

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

- [ ] E-mail de contato
- [ ] URL do LinkedIn
- [ ] Currículo em PDF
- [ ] Lista real de projetos (3 ou mais)
- [ ] Habilidades e ferramentas confirmadas
- [ ] Experiência (empresa júnior, estágio, extensão)
- [ ] Certificados
- [ ] Aprovação dos textos de §9.2 e §9.3

---

## 16. Riscos

| Risco | Probabilidade | Mitigação |
| --- | --- | --- |
| Conteúdo inventado ser publicado como real | Média | Regra RF-10: placeholders explícitos até substituição |
| Repositório ficar público com dados pessoais sensíveis | Baixa | Revisão de conteúdo antes do primeiro push; sem telefone/endereço |
| Site quebrar ao adicionar projeto (HTML copiado errado) | Média | Bloco-modelo comentado em `index.html` + checklist do `AGENTS.md` |
| Perda de trabalho por edição direta no GitHub | Baixa | Commits pequenos e mensagens claras; histórico do Git como backup |
| Fonte externa sair do ar | Nula | Stack usa apenas fontes do sistema |

---

## 17. Roadmap

| Fase | Entrega | Critério de saída |
| --- | --- | --- |
| **F0 — Especificação** | `SPEC.md` e `AGENTS.md` | Aprovação da autora (este documento) |
| **F1 — Esqueleto** | `index.html` com todas as seções, CSS e JS básicos | Site abre localmente, sem erros no console |
| **F2 — Conteúdo real** | Projetos, habilidades, experiência e certificados reais | Nenhum `[SUBSTITUIR]` restante |
| **F3 — Publicação** | Repositório, GitHub Pages, HTTPS | URL pública acessível |
| **F4 — Polimento** | Acessibilidade, SEO, Open Graph, 404 | Lighthouse ≥ 90 em todas as categorias |

**Fase 2 futura (não comprometida):** páginas individuais por projeto, versão em inglês, foto profissional.

---

## 18. Definition of Done (do site)

O site é considerado pronto quando **todos** os itens abaixo forem verdadeiros:

1. Todas as seções de §6 existem e são alcançáveis pelo menu.
2. Nenhum placeholder `[SUBSTITUIR]` ou `[PREENCHER]` visível em produção.
3. Nenhum link quebrado (menu, contato, currículo, certificados).
4. Funciona em 320 px, 768 px, 1024 px e 1440 px de largura, sem rolagem horizontal.
5. Funciona com JavaScript desativado.
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

---

**Aprovação:** ___________________________ (Isadora Sandri) · Data: ____/____/______
