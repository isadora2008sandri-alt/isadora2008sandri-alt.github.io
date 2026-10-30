# Portfólio de Graduação — Isadora Sandri

Site pessoal e portfólio acadêmico da graduação em Administração na ATITUS (Passo Fundo/RS).

- **Endereço do site:** [https://isadora2008sandri-alt.github.io](https://isadora2008sandri-alt.github.io)
- **Hospedagem:** GitHub Pages (gratuita e automática)
- **Tecnologia:** HTML, CSS e JavaScript puros (sem frameworks, sem bibliotecas pesadas e de carregamento ultrarrápido).

---

## Como visualizar o site no seu computador

Você não precisa instalar nada complexo. Para testar o site exatamente como ele aparecerá na internet:

1. Abra o terminal (PowerShell no Windows).
2. Vá até a pasta do projeto e digite:
   ```bash
   python -m http.server 8000
   ```
3. Abra seu navegador de internet e acesse: [http://localhost:8000](http://localhost:8000).

---

## Como editar ou adicionar um novo projeto (5 passos)

Todo o conteúdo editável do site fica em um único arquivo: **`index.html`**.

1. **Abra o arquivo `index.html`** no seu editor de código (como o VS Code ou Antigravity).
2. **Localize a seção de projetos:** pressione `Ctrl + F` e procure por `<!-- ============ PROJETOS ============ -->`.
3. **Copie o modelo de cartão:** logo abaixo do título há um bloco comentado chamado `<!-- MODELO DE CARTÃO -->`. Copie o código desse cartão.
4. **Preencha as informações do seu trabalho:**
   - **Título:** nome do trabalho (ex.: *Diagnóstico Financeiro da Empresa X*).
   - **Tags:** disciplina e semestre (ex.: *2026.2*).
   - **Resumo:** 1 frase curta explicando o projeto.
   - **Papel:** o que você fez na equipe.
   - **Descrição:** 2 a 4 frases contando o problema, a solução e o resultado.
   - **Entregáveis:** o que foi produzido (relatório, planilha, slides).
   - **Ferramentas:** softwares utilizados (Excel, Canva, etc.).
5. **Salve o arquivo** (`Ctrl + S`) e confira no navegador.

---

## Como publicar suas alterações na internet

Sempre que você alterar um texto, projeto ou currículo, siga estes 3 comandos no terminal:

```bash
git add .
git commit -m "feat: atualiza dados do portfolio"
git push origin main
```

Em até 2 minutos, o GitHub Pages atualizará o site automaticamente no endereço oficial.

---

## Como atualizar o currículo em PDF

1. Salve seu novo currículo com o nome exato: `curriculo-isadora-sandri.pdf`.
2. Coloque-o dentro da pasta `assets/docs/`.
3. No arquivo `index.html`, remova a palavra `hidden` do botão de download do currículo na seção de Início.
4. Faça o `git push` para publicar.

---

## Estrutura de Pastas do Projeto

```text
/
├── index.html                 # Página única com todo o conteúdo
├── 404.html                   # Página exibida em links inexistentes
├── README.md                  # Este manual de instruções
├── SPEC.md                    # Especificação completa do projeto
├── AGENTS.md                  # Regras técnicas para desenvolvimento
├── todo.md                    # Lista de tarefas do projeto
├── robots.txt                 # Instruções para buscadores (Google)
├── sitemap.xml                # Mapa do site para SEO
├── .nojekyll                  # Configuração do GitHub Pages
└── assets/
    ├── css/
    │   └── styles.css         # Cores, fontes e formatação visual
    ├── js/
    │   └── main.js            # Funcionalidades interativas leves
    ├── img/
    │   ├── favicon.svg        # Ícone da aba do navegador (IS)
    │   ├── og-image.png       # Imagem exibida ao compartilhar links
    │   └── projetos/          # Imagens opcionais dos trabalhos
    └── docs/
        └── curriculo-isadora-sandri.pdf # Seu currículo em PDF
```
