# Meu Portfólio

Portfólio pessoal construído com [Astro](https://astro.build).

## Como usar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:4321`

### Build

```bash
npm run build
```

## Adicionar um novo projeto

1. **Adicione as imagens** em `public/projetos/nome-do-projeto/`

2. **Crie o arquivo Markdown** em `src/content/projetos/nome-do-projeto.md`:

```markdown
---
titulo: "Nome do Projeto"
descricao: "Descrição curta do projeto"
stack:
  - HTML
  - CSS
  - JavaScript
objetivo: "O objetivo principal do projeto"
imagens:
  - "/projetos/nome-do-projeto/capa.png"
  - "/projetos/nome-do-projeto/screenshot1.png"
link_projeto: "https://link-do-projeto.com"
link_repositorio: "https://github.com/usuario/repo"
data: "2026-02"
destaque: true
---

Conteúdo detalhado do projeto em Markdown...
```

3. **Faça commit e push** - O site atualiza automaticamente!

## Estrutura

```
├── public/
│   └── projetos/           # Imagens dos projetos
├── src/
│   ├── content/
│   │   └── projetos/       # Arquivos .md dos projetos
│   ├── layouts/
│   │   └── Layout.astro    # Layout principal
│   └── pages/
│       ├── index.astro     # Página inicial
│       └── projetos/       # Páginas dos projetos
└── astro.config.mjs        # Configuração do Astro
```

## Deploy

O deploy é automático via GitHub Actions para GitHub Pages.

### Configuração inicial

1. Vá em **Settings > Pages** do repositório
2. Em **Source**, selecione **GitHub Actions**
3. Edite `astro.config.mjs` com seu usuário e nome do repositório
