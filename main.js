// Simple interactions for Dora Boutique

document.addEventListener('DOMContentLoaded', () => {
    // Elegant reveal of elements on scroll could be added here
    console.log("Dora Boutique initialized.");
    
    // We can add a simple dynamic date updater for the top bar
    const dateSpan = document.querySelector('.top-bar span');
    if (dateSpan) {
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        dateSpan.textContent = new Date().toLocaleDateString('en-US', options);
    }

    // Modal de Maintenance (Forcé à chaque chargement pour la démo)
    if (!document.getElementById('maintenanceModal')) {
        const modalHTML = `
        <div id="maintenanceModal" class="modal-overlay">
            <div class="modal-content">
                <h2>Site en maintenance</h2>
                <p>Le site Dora Boutique est actuellement en cours de développement et sera bientôt disponible.</p>
                <div class="modal-actions">
                    <button class="btn-primary" onclick="window.history.back(); setTimeout(() => window.close(), 100);">Revenir après</button>
                    <button class="btn-secondary" onclick="document.getElementById('maintenanceModal').style.display='none';">Continuer quand même</button>
                </div>
            </div>
        </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
});
