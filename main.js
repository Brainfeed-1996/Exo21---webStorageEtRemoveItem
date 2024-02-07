//Ajouter une donnée dans le local storage
localStorage.setItem("nom", "Olivier Robert-Duboille");
localStorage.setItem("age", 27);
localStorage.setItem("email", "olivierrobertduboille@gmail.com");

//Récupérer une donnée dans le localStorage

let maDonnee = localStorage.getItem("nom");
console.log(maDonnee);

//Supprimer une donnée dans le localStorage
localStorage.removeItem("age");
