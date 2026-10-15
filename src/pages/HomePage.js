import { plants } from '../data/plants.js';
import { PlantCard } from '../components/PlantCard.js';

export function HomePage() {
  return `
    <main>
      <section class="welcome" aria-labelledby="welcome-title">
        <p class="eyebrow">BOTÂNICA PARA TODOS OS DIAS</p>
        <h1 id="welcome-title">Há sempre mais<br />uma folha <em>por descobrir.</em></h1>
        <p class="welcome__description">
          Um lugar para aprender sobre plantas, guardar descobertas e acompanhar o que cresce.
        </p>
        <a class="button" href="#colecao">Explorar a coleção <span aria-hidden="true">↗</span></a>
        <div class="welcome__art" aria-hidden="true">
          <span class="welcome__sun"></span>
          <span class="welcome__stem"></span>
          <span class="welcome__leaf welcome__leaf--one"></span>
          <span class="welcome__leaf welcome__leaf--two"></span>
          <span class="welcome__leaf welcome__leaf--three"></span>
          <span class="welcome__leaf welcome__leaf--four"></span>
        </div>
      </section>

      <section class="collection" id="colecao" aria-labelledby="collection-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">COMEÇA POR AQUI</p>
            <h2 id="collection-title">A coleção</h2>
          </div>
          <span class="collection__count">${plants.length} espécies</span>
        </div>
        <div class="plant-grid">
          ${plants.map(PlantCard).join('')}
        </div>
      </section>
    </main>
  `;
}
