# Herbário

Ponto de partida para uma aplicação de botânica instalável e preparada para funcionar offline.

## Começar

```sh
npm install
npm run dev
```

Para gerar e pré-visualizar a versão de produção:

```sh
npm run build
npm run preview
```

## Organização

```text
public/
  icons/                 Ícones estáticos da aplicação
  manifest.webmanifest   Metadados para instalação como PWA
  sw.js                  Cache da aplicação para utilização offline
src/
  app.js                 Composição e apresentação do ecrã inicial
  main.js                Entrada da aplicação e registo do service worker
  components/            Componentes de interface reutilizáveis
  data/                  Dados iniciais de demonstração
  pages/                 Ecrãs organizados por página
  styles/                Estilos globais e responsivos
index.html               Documento HTML servido pelo Vite
vite.config.js           Configuração do servidor e da compilação
```

Quando a aplicação crescer, cria módulos por funcionalidade (por exemplo, catálogo, diário e pesquisa) e mantém os dados, apresentação e persistência em pastas próprias. A interface inicial não depende de recursos externos, pelo que os estilos continuam disponíveis offline.

O service worker é registado apenas na versão de produção. Para validar a instalação e o modo offline, executa `npm run build` seguido de `npm run preview` e abre a aplicação num browser compatível com PWAs.
