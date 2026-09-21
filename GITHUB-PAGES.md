# Publicar no GitHub Pages

Repositório esperado:

`ADSorriso/CONFERENCIA-CNH`

URL final:

`https://adsorriso.github.io/CONFERENCIA-CNH/`

## 1. Envie todos os arquivos desta pasta para a raiz do repositório

Não envie a pasta `CONFERENCIA-CNH-GITHUB-PAGES` como uma subpasta.
Envie o conteúdo dela para a raiz do repositório.

A raiz deve conter:

- `index.html`
- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `src/`
- `.github/workflows/deploy.yml`

## 2. GitHub Pages

Abra:

Settings → Pages

Em `Build and deployment`, selecione:

`Source: GitHub Actions`

## 3. Commit

Faça commit na branch `main`.

O workflow vai instalar as dependências, executar `npm run build` e publicar a pasta `dist`.

## 4. Resultado

Depois que a Action terminar, acesse:

https://adsorriso.github.io/CONFERENCIA-CNH/

## Observação

O `vite.config.ts` já está configurado com:

`base: "/CONFERENCIA-CNH/"`

e o React Router já usa:

`basename="/CONFERENCIA-CNH"`

Não altere esses valores enquanto o repositório continuar com esse nome.
