function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
  document.querySelector('.hamburger').classList.toggle('show');
  document.body.classList.toggle('no-scroll', document.querySelector(".nav-links").classList.contains('show'));
}

// Buy Template Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Edition tab switching functionality
  const editionTabs = document.querySelectorAll('.edition-tab');
  const editionCards = document.querySelectorAll('.edition-card-detail');
  
  if (editionTabs.length > 0) {
    editionTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const targetEdition = this.getAttribute('data-edition');
        
        // Remove active class from all tabs and cards
        editionTabs.forEach(t => t.classList.remove('active'));
        editionCards.forEach(card => card.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding card
        this.classList.add('active');
        const targetCard = document.getElementById(targetEdition);
        if (targetCard) {
          targetCard.classList.add('active');
        }
      });
    });
  }
  
  // Platform button functionality
  const platformButtons = document.querySelectorAll('.platform-btn');
  if (platformButtons.length > 0) {
    platformButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const container = this.closest('.platform-selection');
        if (container) {
          container.querySelectorAll('.platform-btn').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
        }
      });
    });
  }
  
  // Buy button functionality
  const buyButtons = document.querySelectorAll('.primary-buy-button');
  if (buyButtons.length > 0) {
    buyButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        // Get selected platform and region
        const container = this.closest('.edition-card-detail');
        const activePlatform = container.querySelector('.platform-btn.active');
        const selectedRegion = container.querySelector('.region-select');
        
        if (activePlatform && selectedRegion) {
          const platform = activePlatform.getAttribute('data-platform');
          const region = selectedRegion.value;
          
          // In a real implementation, this would redirect to the appropriate store
          console.log(`Pre-ordering for ${platform} in ${region}`);
          alert(`Redirecting to ${platform} store for ${region}...`);
        }
      });
    });
  }
});