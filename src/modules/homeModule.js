export function generateHomeContent() {
  return `
    <section class="hero">
      <div class="hero-content">
        <h1 class="restaurant-name">Nexus Prime</h1>
        <div class="tagline">Elevated Dining Experience</div>
        <p class="description">
          Perched 300 meters above Neo-Tokyo's sprawling metropolis,
          <span class="highlight">Nexus Prime</span> offers an unparalleled
          culinary journey for the discerning elite. Our augmented chefs craft
          molecular gastronomy using exclusively sourced ingredients from
          off-world colonies, creating dishes that transcend ordinary dining
          and approach art.
        </p>
        <button class="menu-btn">View Our Menu</button>
      </div>
    </section>

    <section class="exclusivity">
      <div class="exclusivity-content">
        <h2>The Pinnacle of Exclusivity</h2>
        <p>
          With only twelve tables and a three-year waiting list, Nexus Prime
          caters exclusively to the 0.01%. Our patrons include corporate
          magnates, neural-enhanced visionaries, and off-world diplomats who
          appreciate the sanctity of absolute privacy.
        </p>
        <p>
          Each dish is a masterpiece of bio-engineered ingredients and
          culinary innovation, prepared by chefs with cybernetic precision and
          served by discreet android sommeliers programmed with 200 years of
          oenological knowledge.
        </p>

        <div class="stats">
          <div class="stat-item">
            <div class="stat-value">12</div>
            <div class="stat-label">Exclusive Tables</div>
          </div>

          <div class="vertical-line"></div>

          <div class="stat-item">
            <div class="stat-value">3*</div>
            <div class="stat-label">Michelin Stars</div>
          </div>

          <div class="vertical-line"></div>

          <div class="stat-item">
            <div class="stat-value">36</div>
            <div class="stat-label">Month Waitlist</div>
          </div>
        </div>
      </div>
    </section>
  `;
}
