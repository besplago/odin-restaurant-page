export function generateMenuContent() {
  return `
    <section class="menu">
      <div class="menu-header">
        <h2>Neo-Tokyo Gastronomy</h2>
        <p class="menu-subtitle">Where Biotechnology Meets Culinary Mastery</p>
      </div>

      <div class="menu-category">
        <h3 class="category-title">Signature Creations</h3>
        <div class="menu-items">
          <div class="menu-item">
            <div class="item-name">Synthetic Toro Fusion</div>
            <div class="item-dots"></div>
            <div class="item-price">¥285,000</div>
            <div class="item-description">Lab-cultured bluefin tuna otoro with CRISPR-edited wasabi</div>
          </div>
          <div class="menu-item">
            <div class="item-name">Nanotech Wagyu</div>
            <div class="item-dots"></div>
            <div class="item-price">¥450,000</div>
            <div class="item-description">A5 Miyazaki beef with molecular fat distribution, sous-vide for 72 hours</div>
          </div>
          <div class="menu-item">
            <div class="item-name">Golden Ossetra Experience *</div>
            <div class="item-dots"></div>
            <div class="item-price"></div>
            <div class="item-description">Rare albino caviar served on chilled platinum with bio-luminescent garnish</div>
          </div>
        </div>
      </div>

      <div class="menu-category">
        <h3 class="category-title">Neuro-Enhanced Flavors</h3>
        <div class="menu-items">
          <div class="menu-item">
            <div class="item-name">Synapse Lobster</div>
            <div class="item-dots"></div>
            <div class="item-price">¥320,000</div>
            <div class="item-description">Cold-water lobster with neurotransmitter-infused butter foam</div>
          </div>
          <div class="menu-item">
            <div class="item-name">Memory Truffle Pasta</div>
            <div class="item-dots"></div>
            <div class="item-price">¥180,000</div>
            <div class="item-description">Alba white truffle shaved over carbonara with scent-enhancing nanoemulsions</div>
          </div>
        </div>
      </div>

      <div class="menu-category">
        <h3 class="category-title">Biome Sweets</h3>
        <div class="menu-items">
          <div class="menu-item">
            <div class="item-name">Chocolate Synthisphere</div>
            <div class="item-dots"></div>
            <div class="item-price">¥95,000</div>
            <div class="item-description">72% Venezuelan chocolate dome with liquid nitrogen frozen raspberries</div>
          </div>
          <div class="menu-item">
            <div class="item-name">Golden Saffron Soufflé</div>
            <div class="item-dots"></div>
            <div class="item-price">¥120,000</div>
            <div class="item-description">Iranian saffron-infused dessert with 24k gold leaf and edible circuits</div>
          </div>
        </div>
      </div>

      <div class="menu-category">
        <h3 class="category-title">Neuro-Cocktails</h3>
        <div class="menu-items">
          <div class="menu-item">
            <div class="item-name">Cognac Circuit</div>
            <div class="item-dots"></div>
            <div class="item-price">¥85,000</div>
            <div class="item-description">1788 Hennessy with quantum-crafted ice and neuro-enhancers</div>
          </div>
          <div class="menu-item">
            <div class="item-name">Quantum Kirin</div>
            <div class="item-dots"></div>
            <div class="item-price">¥65,000</div>
            <div class="item-description">Cryo-distilled sake with bio-luminescent plankton and nano-bubbles</div>
          </div>
        </div>
      </div>

      <div class="pairing-note">
        <p>Our AI sommelier will design personalized pairings from our vault of 22nd century vintages</p>
        <p class="disclaimer">* Golden Ossetra Experience: Market price varies daily - consultation required</p>
      </div>
    </section>
  `;
}
