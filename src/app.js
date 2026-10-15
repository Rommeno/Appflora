import { HomePage } from './pages/HomePage.js';

export function renderApp(root) {
  if (!root) {
    throw new Error('Não foi encontrado o elemento raiz da aplicação.');
  }

  root.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <a class="brand" href="/" aria-label="Herbário, página inicial">
          <span class="brand__mark" aria-hidden="true">✳</span>
          <span>herbário</span>
        </a>
        <span class="topbar__note">um pequeno atlas verde</span>
      </header>
      ${HomePage()}
      <footer class="footer">
        <span>Feito para quem repara nas coisas que crescem.</span>
        <span>Herbário <span aria-hidden="true">✳</span></span>
      </footer>
    </div>
  `;
}