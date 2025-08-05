export function generateMenuContent() {
  return `
    <section class="menu">
      <div class="menu-header">
        <h2>Molecular Gastronomy Experience</h2>
        <p class="menu-subtitle">Where Earthly Ingredients Meet Off-World Innovation</p>
      </div>

      <div class="menu-category">
        <h3 class="category-title">Quantum Entrées</h3>
        <div class="menu-items">
          <div class="menu-item">
            <div class="item-name">Neptune's Nebula</div>
            <div class="item-dots"></div>
            <div class="item-price">¥34,500</div>
            <div class="item-description">Titan-grown sea grapes with liquid argon caviar</div>
          </div>
          <div class="menu-item">
            <div class="item-name">Zero-G Wagyu</div>
            <div class="item-dots"></div>
            <div class="item-price">¥42,800</div>
            <div class="item-description">A5 Miyazaki beef with Martian truffle foam</div>
          </div>
        </div>
      </div>

      <div class="menu-category">
        <h3 class="category-title">Singularity Sweets</h3>
        <div class="menu-items">
          <div class="menu-item">
            <div class="item-name">Dark Matter Soufflé</div>
            <div class="item-dots"></div>
            <div class="item-price">¥18,900</div>
            <div class="item-description">Collapsing chocolate sphere with antimatter gold leaf</div>
          </div>
          <div class="menu-item">
            <div class="item-name">Quantum Crème Brûlée</div>
            <div class="item-dots"></div>
            <div class="item-price">¥16,200</div>
            <div class="item-description">Superposition vanilla custard with crystalline caramel</div>
          </div>
        </div>
      </div>

      <div class="pairing-note">
        <p>Our android sommeliers will craft personalized wine pairings from our cryo-cellar containing 5,000 vintages</p>
      </div>
    </section>
  `;
}
