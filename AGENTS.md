# AGENTS.md

> **O que é este arquivo?**
> Guia de trabalho para qualquer agente de IA (ou pessoa) que for construir, editar ou publicar este site. Ele descreve **como** fazer — regras, estrutura, convenções e checagens. O **o quê** e o **por quê** estão em [`SPEC.md`](./SPEC.md), que é a fonte da verdade.

---

## 1. Antes de qualquer alteração

1. Leia o `SPEC.md` inteiro (é curto e vale a leitura).
2. Confirme em qual fase do roadmap (§17 do SPEC) o trabalho se encaixa.
3. Se o pedido **não estiver previsto** na spec, **pare** e proponha a atualização da spec primeiro. Nunca implemente escopo novo silenciosamente.
4. Se o pedido **contrariar** a spec, aponte o conflito e peça decisão antes de codar.

**Regra de ouro:** spec primeiro, código depois. Uma mudança de escopo sem alteração no `SPEC.md` é considerada bug de processo.

---

## 2. Contexto do projeto

| Item | Valor |
| --- | --- |
| Produto | Portfólio de graduação de Isadora Sandri |
| Curso | Administração — ATITUS (formatura 2030/2) |
| Cidade | Passo Fundo/RS |
| Objetivo | Apresentar trabalhos da graduação para professores, colegas e recrutadores |
| Público | Recrutadores, professores, colegas |
| Publicação | GitHub Pages — `https://isadora2008sandri-alt.github.io` |
| Repositório | `isadora2008sandri-alt.github.io`, branch `main`, raiz `/` |
| Idioma do site | Português do Brasil (pt-BR) |
| Idioma da comunicação | Português do Brasil |

**Perfil da mantenedora:** pessoa leiga em programação, que edita o site com apoio de IA. Toda explicação deve ser simples, sem jargão desnecessário, e todo conteúdo editável deve estar em um lugar óbvio.

---

## 3. Regras invioláveis

1. **Sem build, sem framework, sem CDN.** Nada de React, Vue, Tailwind, Bootstrap, jQuery, Google Fonts ou scripts de terceiros. HTML, CSS e JS puro, servidos como estão.
2. **Zero requisições a domínios externos** em tempo de carregamento (privacidade — RNF-09).
3. **Funciona sem JavaScript** (RNF-06): conteúdo e navegação não podem depender de JS.
4. **Nada de conteúdo inventado.** Projetos, cargos, números e certificados inexistentes são proibidos. Enquanto não houver dado real, use `[SUBSTITUIR]` ou `[PREENCHER]` (RF-10).
5. **Sem dados sensíveis.** Nunca publicar telefone, endereço, CPF, e-mail institucional privado ou dados de terceiros/empresas.
6. **Cores só nos tokens** de `assets/css/styles.css` (§6.3). Nenhum valor hexadecimal no HTML ou no JS.
7. **Todo texto em português do Brasil**, incluindo comentários de código, `alt`, mensagens de erro e commits.
8. **Caminhos relativos e minúsculos.** GitHub Pages diferencia maiúsculas de minúsculas: `assets/img/foto.jpg` ≠ `assets/img/Foto.JPG`.
9. **Não renomear nem mover arquivos** referenciados na spec sem atualizar as referências e o `SPEC.md`.
10. **Não commitar segredos**, tokens, `.env` ou arquivos de configuração local.

---

## 4. Stack e restrições técnicas

| Camada | Decisão |
| --- | --- |
| Marcação | HTML5 semântico, arquivo único `index.html` |
| Estilo | CSS puro, um único arquivo, custom properties, mobile-first |
| Comportamento | JavaScript vanilla (ES2020+), sem módulos externos, um arquivo |
| Fontes | Pilha do sistema — sem download de fontes |
| Imagens | WebP ou JPG otimizado; SVG para ícones e favicon |
| Build | Nenhum. Não criar `package.json`, bundler ou etapa de compilação |
| Testes | Manuais + Lighthouse. Não há suíte automatizada nesta versão |

**Suporte:** últimas 2 versões de Chrome, Edge, Firefox e Safari; iOS Safari 16+ (RNF-07).

---

## 5. Estrutura de arquivos

```
/
├── AGENTS.md                  # este guia
├── SPEC.md                    # especificação (fonte da verdade)
├── README.md                  # como editar e publicar (para leigos)
├── index.html                 # página única do site
├── 404.html                   # página de erro
├── .nojekyll                  # impede processamento Jekyll no Pages
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/
    │   └── styles.css         # todos os estilos e tokens
    ├── js/
    │   └── main.js            # apenas melhorias progressivas
    ├── img/
    │   ├── favicon.svg
    │   ├── og-image.png       # 1200×630
    │   └── projetos/          # uma imagem por projeto (1200×750)
    └── docs/
        └── curriculo-isadora-sandri.pdf
```

**Regras de estrutura**

- Não criar pastas novas sem necessidade comprovada e sem registrar no `SPEC.md`.
- Não criar `en/` nesta versão; apenas deixar o HTML preparado (§8).
- Imagens de projeto seguem o slug do título: `Projeto de Análise de Dados` → `analise-de-dados.jpg`.

---

## 6. Convenções de código

### 6.1 HTML

- Um `<h1>` por página; hierarquia `h2` → `h3` sem saltos.
- Estrutura: `<header>` → `<nav>` → `<main>` (com `<section id="...">`) → `<footer>`.
- Cada seção começa com um comentário de bloco:
  ```html
  <!-- ============ PROJETOS ============ -->
  ```
- Blocos repetíveis (cartão de projeto, item de certificado, item de experiência) devem ter um **modelo comentado** logo acima da lista:
  ```html
  <!-- MODELO DE CARTÃO — copie, cole e substitua os campos -->
  ```
- Textos de interface recebem `data-i18n="chave.em.minusculas"`.
- Datas usam `<time datetime="2026-08">2026.2</time>`.
- Links externos: `target="_blank" rel="noopener noreferrer"` + aviso acessível no texto ou `aria-label`.
- Imagens sempre com `alt` descritivo (ou `alt=""` se decorativas), `width` e `height` para evitar deslocamento de layout.
- Preferir `<details>/<summary>` para conteúdo expansível (funciona sem JS).

### 6.2 CSS

- Mobile-first: estilos base para celular, `@media (min-width: ...)` para crescer.
- Um único arquivo, organizado nesta ordem: tokens → reset → tipografia → layout → componentes → utilitários → media queries → `prefers-reduced-motion`.
- Classes em `kebab-case` com prefixo por bloco: `.cartao`, `.cartao__titulo`, `.cartao--destaque`.
- Sem `!important` (exceto em utilitário de acessibilidade documentado).
- Sem estilos inline no HTML.
- Animações apenas em `transform` e `opacity`, com duração ≤ 200 ms, sempre dentro de `@media (prefers-reduced-motion: no-preference)`.

### 6.3 Tokens de cor (obrigatório)

```css
:root {
  --cor-primaria: #722F37;
  --cor-primaria-escura: #4A1C24;
  --cor-fundo: #FFFFFF;
  --cor-superficie: #FAF7F6;
  --cor-texto: #1F1B1A;
  --cor-texto-suave: #5C5350;
  --cor-borda: #E7DFDD;
}

@media (prefers-color-scheme: dark) {
  :root {
    --cor-primaria: #C98B96;
    --cor-primaria-escura: #E8C4CB;
    --cor-fundo: #12100F;
    --cor-superficie: #1C1917;
    --cor-texto: #F2EDEC;
    --cor-texto-suave: #B8AEAB;
    --cor-borda: #2E2927;
  }
}
```

Qualquer cor nova deve virar token, ser adicionada nos **dois** temas e respeitar contraste ≥ 4,5:1.

### 6.4 JavaScript

- Apenas melhorias progressivas: menu mobile, copiar e-mail, ano no rodapé, scroll suave com compensação do cabeçalho.
- Nada de `innerHTML` com dados externos; usar `textContent`.
- Sem `document.write`, sem `eval`, sem dependências.
- `"use strict"` no topo; funções nomeadas e comentadas em português.
- Todo recurso de JS deve ter um equivalente estático funcional (ex.: âncoras funcionam sem JS).

### 6.5 Nomenclatura

| Tipo | Padrão | Exemplo |
| --- | --- | --- |
| Arquivos | `kebab-case` | `og-image.png` |
| Classes CSS | `bloco__elemento--modificador` | `.secao__titulo` |
| IDs de seção | `kebab-case` em português | `id="certificados"` |
| Variáveis JS | `camelCase` | `anoAtual` |
| Chaves i18n | `ponto.separado` | `menu.projetos` |

---

## 7. Conteúdo: como editar

**Adicionar um projeto**

1. Localize o bloco `<!-- ============ PROJETOS ============ -->` em `index.html`.
2. Copie o bloco marcado `<!-- MODELO DE CARTÃO -->`.
3. Preencha **todos** os campos obrigatórios de §10 do `SPEC.md`.
4. Use `[SUBSTITUIR]` no que ainda não existir — nunca invente.
5. Se houver imagem: salve em `assets/img/projetos/<slug>.jpg` (1200×750, < 150 KB) e descreva no `alt`.
6. Rode o checklist de §12 antes de commitar.

**Adicionar certificado / experiência:** mesmo fluxo, usando o modelo correspondente. Ordem cronológica decrescente (mais recente primeiro).

**Atualizar currículo:** substituir `assets/docs/curriculo-isadora-sandri.pdf`, mantendo o nome do arquivo. Se o PDF não existir, o botão deve ficar oculto (`hidden`), nunca apontando para um link quebrado (P8).

---

## 8. Preparação para tradução

- Todo texto visível fica em elemento próprio e recebe `data-i18n`.
- Proibido montar frases por concatenação em JS ("Total: " + n).
- Proibido texto dentro de imagens.
- Comentários `<!-- i18n: início -->` / `<!-- i18n: fim -->` delimitam blocos traduzíveis.
- Não criar arquivos de tradução nesta versão — apenas manter a estrutura pronta (SPEC §13).

---

## 9. Acessibilidade (checagem obrigatória em cada mudança)

- [ ] Contraste de texto ≥ 4,5:1 nos temas claro e escuro
- [ ] Foco visível em todos os elementos interativos
- [ ] Navegação completa por teclado, incluindo menu mobile e `<details>`
- [ ] `alt` em todas as imagens de conteúdo
- [ ] Um `<h1>` e hierarquia de títulos correta
- [ ] Rótulos compreensíveis fora de contexto (`aria-label` quando necessário)
- [ ] `prefers-reduced-motion` respeitado
- [ ] Zoom de 200% sem perda de conteúdo

---

## 10. SEO

- `title` e `meta description` únicos e dentro dos limites (60 / 155 caracteres).
- Open Graph e Twitter Card atualizados; `og-image.png` com 1200×630.
- JSON-LD `Person` com nome, curso, instituição, cidade e links.
- Ao criar seção nova: atualizar `sitemap.xml` apenas se houver nova URL (a v1.0 tem uma página).
- Nunca usar texto alternativo para empilhar palavras-chave.

---

## 11. Comandos

Não há build. Para visualizar localmente:

```bash
# Opção 1 — Python (já instalado na maioria dos sistemas)
python -m http.server 8000

# Opção 2 — Node
npx serve .

# Depois abrir: http://localhost:8000
```

Publicar (após configurar o remoto):

```bash
git add .
git commit -m "feat: descreve a mudança"
git push origin main
```

Verificar autenticação e publicação:

```bash
gh auth status
gh browse --branch main
```

**Atenção:** abrir `index.html` direto pelo explorador de arquivos (`file://`) funciona para leitura, mas não reproduz fielmente o ambiente do GitHub Pages. Sempre validar com um servidor local.

---

## 12. Definition of Done (por mudança)

Antes de considerar uma tarefa concluída:

1. O comportamento está previsto no `SPEC.md` (ou a spec foi atualizada).
2. Testado em 320 px, 768 px e 1440 px.
3. Testado com JavaScript desativado.
4. Testado nos temas claro e escuro.
5. Nenhum `[SUBSTITUIR]`/`[PREENCHER]` novo introduzido sem intenção.
6. Nenhum link quebrado (verificar menu, contato, currículo, certificados).
7. Console do navegador sem erros.
8. Lighthouse mobile: Desempenho ≥ 90, Acessibilidade ≥ 95, Boas práticas ≥ 95, SEO ≥ 95.
9. Textos revisados em português (ortografia e concordância).
10. Commit com mensagem no padrão Conventional Commits (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`).

---

## 13. Commits e histórico

- Um commit = uma intenção. Não misturar conteúdo novo com refatoração de CSS.
- Mensagem no imperativo, em português, até 72 caracteres:
  - `feat: adiciona projeto de análise de dados`
  - `fix: corrige contraste do botão secundário`
  - `docs: atualiza pendências no SPEC`
- Nunca usar `--force` em `main`.
- Nunca commitar arquivos temporários, `.DS_Store`, `Thumbs.db` ou rascunhos.

---

## 14. O que NÃO fazer

- ❌ Instalar dependências, criar `package.json` ou adicionar bundler.
- ❌ Adicionar Google Fonts, ícones de CDN ou widgets de terceiros.
- ❌ Criar formulário de contato, analytics, blog ou área de login (fora de escopo).
- ❌ Inventar projetos, resultados, números, cargos ou certificados.
- ❌ Publicar foto, telefone ou endereço sem autorização explícita da autora.
- ❌ Alterar cores, fontes ou layout "por gosto" sem pedido — a identidade visual está definida no SPEC §11.
- ❌ Reescrever o site em outra tecnologia (Jekyll, Astro, React) sem decisão registrada na spec.
- ❌ Fazer push direto de conteúdo não revisado (a branch `main` é o site em produção).

---

## 15. Como se comunicar com a autora

- Fale em português do Brasil, de forma direta e sem jargão. Se precisar usar um termo técnico, explique em uma frase (ver glossário no SPEC §19).
- Ao propor uma mudança, diga: **o que** muda, **por quê**, **onde** (arquivo/seção) e **como reverter**.
- Ao encontrar pendência de conteúdo, liste o que falta e ofereça um placeholder em vez de travar o trabalho.
- Nunca peça à autora para "rodar um comando" sem explicar exatamente o que ele faz e o resultado esperado.
- Prefira confirmar uma decisão ambígua a assumir silenciosamente.

---

## 16. Referências internas

| Assunto | Onde está |
| --- | --- |
| Objetivos, escopo, requisitos | `SPEC.md` §3, §5, §7, §8 |
| Conteúdo e textos aprovados | `SPEC.md` §9 |
| Modelo de dados de projeto | `SPEC.md` §10 |
| Cores, tipografia, elementos | `SPEC.md` §11 |
| Publicação no GitHub Pages | `SPEC.md` §12 |
| Pendências de conteúdo | `SPEC.md` §15.1 |
| Critérios de pronto do site | `SPEC.md` §18 |
