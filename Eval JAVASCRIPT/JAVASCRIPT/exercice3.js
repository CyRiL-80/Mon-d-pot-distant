// Déclaration de la variable tab (tableau) //

var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

// Saisir un prénom //

var saisie = window.prompt("Veuillez saisir un prenom entre Audrey, Aurélien, Flavien, Jérémy, Laurent, Melik, Nouara, Salem, Samuel et Stéphane :")

// Vérification du prénom saisi dans la liste //

if(tab.includes(saisie))
{

  tab.splice(tab.indexOf(saisie),1);
  
  tab.push(" ");
                 
    alert(tab)
}

//Affiche "erreur" si le prénom ne fait pas parti de la liste //

else{alert("erreur")}