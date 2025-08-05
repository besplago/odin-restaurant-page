export function generateContactContent() {
  return `
    <section class="contact">
      <div class="contact-header">
        <h2>Reservation Protocol</h2>
        <p>Applications are reviewed quarterly by our AI maître d'</p>
      </div>

      <div class="contact-container">
        <div class="requirements">
          <h3>Prerequisites</h3>
          <ul>
            <li>Neural implant for menu translation</li>
            <li>Zero social media presence</li>
            <li>Three referrals from existing patrons</li>
            <li>Quantum-encrypted background check</li>
          </ul>
          <div class="disclaimer">
            <p>All guests undergo biometric screening at our 300th-floor transit hub</p>
          </div>
        </div>

        <div class="form-container">
          <h3>Initiate Application</h3>
          <form class="contact-form">
            <input type="text" id="fullName" placeholder="Full Legal Identity" required>
            <input type="text" id="corporateAffiliation" placeholder="Corporate Affiliation">
            <input type="text" id="neuralID" placeholder="Neural Implant ID" required>
            <textarea id="purpose" placeholder="Purpose of Request (50 words maximum)" rows="4" required></textarea>
            <button type="submit">Submit for Review</button>
          </form>
        </div>
      </div>

      <div class="location">
        <h3>Nexus Prime Coordinates</h3>
        <p>Sky Tower Obelisk • Floor 300</p>
        <p>Neo-Tokyo Prefecture • East Asian Federation</p>
        <p>Access via transonic elevator from Sub-Level 5</p>
      </div>
    </section>
  `;
}
