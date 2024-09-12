 // Fonction qui va lire le texte
 function lireTexte(text) {
    const syntheseVocale = window.speechSynthesis;
    const parole = new SpeechSynthesisUtterance(text);
    syntheseVocale.speak(parole);
}

function viderTexte(id){
    document.getElementById(id).value = ""; 
    window.speechSynthesis.cancel();
}

document.getElementById("textForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page au submit

    let texte = document.getElementById("text").value;
    if (texte) {
        lireTexte(texte); 
    } else {
        alert("Veuillez entrer du texte à lire.");
    }
});


// Réinitialiser la zone de texte et/annuler la lecture
 document.getElementById("resetBtn").addEventListener("click", viderTexte("text"));
