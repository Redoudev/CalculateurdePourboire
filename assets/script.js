const facture = document.getElementById("facture");
const pourboire = document.querySelectorAll(".choix button");
const prixPourboire = document.getElementById("prix_pourboir");
const prixTotal = document.getElementById("prix_total");
const reinitialiser = document.querySelector("#resultat button");

// Écouteur d'événement pour chaque bouton de pourboire
pourboire.forEach((button) => {
  button.addEventListener("click", () => {
    const pourcentage = parseFloat(button.value);
    const montantFacture = parseFloat(facture.value);
    const montantPourboire = (pourcentage / 100) * montantFacture;
    const montantTotal = montantFacture + montantPourboire;
    
    // Mettre à jour les éléments d'affichage
    prixPourboire.textContent = montantPourboire.toFixed(2) + "€";
    prixTotal.textContent = montantTotal.toFixed(2) + "€";
  });
});

// Écouteur d'événement pour le bouton "Réinitialiser"
reinitialiser.addEventListener("click", () => {
  facture.value = ""; 
  prixPourboire.textContent = "0.00€"; 
  prixTotal.textContent = "0.00€";
});
