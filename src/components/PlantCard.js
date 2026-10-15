export function PlantCard(plant) {
  return `
    <article class="plant-card">
      <div class="plant-card__illustration plant-card__illustration--${plant.tone}" aria-hidden="true">
        <span>${plant.emoji}</span>
      </div>
      <div class="plant-card__body">
        <div>
          <p class="plant-card__name">${plant.name}</p>
          <p class="plant-card__species">${plant.species}</p>
        </div>
        <span class="plant-card__tag">${plant.category}</span>
      </div>
    </article>
  `;
}
