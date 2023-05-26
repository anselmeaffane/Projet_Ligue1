// Animation lors du clic sur le ballon
var ballon = document.getElementById("ballon");

ballon.addEventListener("click", function() {
    ballon.classList.add("animate-ballon");
    setTimeout(function() {
        ballon.classList.remove("animate-ballon");
    }, 1000);
});

// Autres interactions intéressantes
// Exemple : Changement de couleur des trophées lors du survol
var trophies = document.querySelectorAll(".trophy-count");

trophies.forEach(function(trophy) {
    trophy.addEventListener("mouseover", function() {
        trophy.style.color = "gold";
    });

    trophy.addEventListener("mouseout", function() {
        trophy.style.color = "#fff";
    });
});

// Ajoutez d'autres interactions et animations selon vos besoins
