var check = document.getElementById('envoie');
check.addEventListener("click", function verif(event)
{
    // Pour le nom 

    var Identité = /(^[A-Z]+[a-zA-éèêëôœîïûüàáâæç-\s]+$)/;
    var nom = document.getElementById("nom").value;

    if (document.getElementById("nom").value == "") 
    {
        document.getElementById("erreur_Nom").textContent = "Saisis ton nom idiot!!! \ud83d\ude09";

        document.getElementById("erreur_Nom").style.color = 'red';

        event.preventDefault() ;
    }

    else if (!Identité.test(nom))
    {
        document.getElementById("erreur_Nom").textContent = "On t'a pas appris à bien écrire frérot?";

        document.getElementById("erreur_Nom").style.color = 'black';

        event.preventDefault();  
    }

    else
    {
        document.getElementById("erreur_Nom").textContent = "C'est bien champion!";

        document.getElementById("erreur_Nom").style.color = 'green';
    }

    // Pour le prénom 

    var prenom = document.getElementById("prenom").value;

    if (document.getElementById("prenom").value == "") 
    {
        document.getElementById("erreur_Prénom").textContent = "Saisis ton prénom idiot!!! \ud83d\ude09";

        document.getElementById("erreur_Prénom").style.color = 'red';

        event.preventDefault() ;
    }

    else if (!Identité.test(prenom))
    {
        document.getElementById("erreur_Prénom").textContent = "On t'a pas appris à bien écrire frérot?";

        document.getElementById("erreur_Prénom").style.color = 'black';

        event.preventDefault();
    }

    else
    {
        document.getElementById("erreur_Prénom").textContent = "C'est bien champion!";

        document.getElementById("erreur_Prénom").style.color = 'green';
    }

    // Pour le sexe 

    var sexe1 = document.getElementById("inlineRadio1").checked;
    var sexe2 = document.getElementById("inlineRadio2").checked;
    var sexe3 = document.getElementById("inlineRadio3").checked;

    if (sexe1 == false && sexe2 == false && sexe3 == false)
    {
        document.getElementById("erreur_Sexe").textContent = "Tu as un doute, tu veux que je vienne vérifier?";

        document.getElementById("erreur_Sexe").style.color = 'red';

        event.preventDefault();
    }

    else
    {
        document.getElementById("erreur_Sexe").textContent = "Tu es sûr?";

        document.getElementById("erreur_Sexe").style.color = 'green';
    }

    // Pour la date de naissance 

    var birth = /(^[0-9]{4}[\-]{1}[0-9]{2}[\-]{1}[[0-9]{2}$)/;
    var date = document.getElementById("date").value;

    if (document.getElementById("date").value == "") 
    {
        document.getElementById("erreur_Date_de_naissance").textContent = "Saisis ta date de naissance idiot!!! \ud83d\ude09";

        document.getElementById("erreur_Date_de_naissance").style.color = 'red';

        event.preventDefault() ;
    }

    else if (!birth.test(date))
    {
        document.getElementById("erreur_Date_de_naissance").textContent = "Tu ne sais pas quand tu es né?";

        document.getElementById("erreur_Date_de_naissance").style.color = 'black';

        event.preventDefault();
    }

    else
    {
        document.getElementById("erreur_Date_de_naissance").textContent = "C'est bien champion!";

        document.getElementById("erreur_Date_de_naissance").style.color = 'green';
    }

    // Pour le code postal 

    var cp = /(^[0-9]{5}$)/;
    var codepostal = document.getElementById("codepostal").value;

    if (document.getElementById("codepostal").value == "") 
    {
        document.getElementById("erreur_Code_postal").textContent = "Saisis ton code postal idiot!!! \ud83d\ude09";

        document.getElementById("erreur_Code_postal").style.color = 'red';

        event.preventDefault() ;
    }

    else if (!cp.test(codepostal))
    {
        document.getElementById("erreur_Code_postal").textContent = "On t'a pas appris à bien écrire frérot?";

        document.getElementById("erreur_Code_postal").style.color = 'black';

        event.preventDefault();
    }

    else
    {
        document.getElementById("erreur_Code_postal").textContent = "C'est bien champion!";

        document.getElementById("erreur_Code_postal").style.color = 'green';
    }

    // Pour l'adresse 

    var adr = /^[0-9]+[a-zA-Z-éèêëôœîïûüàáâæç-\s]+$/;
    var adresse = document.getElementById("adresse").value;

    if (document.getElementById("adresse").value == "") 
    {
        document.getElementById("erreur_Adresse").textContent = "Saisis ton adresse idiot!!! \ud83d\ude09";

        document.getElementById("erreur_Adresse").style.color = 'red';

        event.preventDefault() ;
    }

    else if (!adr.test(adresse)) 
    {
        document.getElementById("erreur_Adresse").textContent = "On t'a pas appris à bien écrire frérot?";

        document.getElementById("erreur_Adresse").style.color = 'black';

        event.preventDefault();
    }

    else 
    {
        document.getElementById("erreur_Adresse").textContent = "C'est bien champion!";

        document.getElementById("erreur_Adresse").style.color = 'green';
    }

    // Pour la ville 

    var Localisation = /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)/;
    var ville = document.getElementById("ville").value;

    if (document.getElementById("ville").value == "") 
    {
        document.getElementById("erreur_Ville").textContent = "Saisis ta ville idiot!!! \ud83d\ude09";

        document.getElementById("erreur_Ville").style.color = 'red';

        event.preventDefault() ;       
    }

    else if (!Localisation.test(ville)) 
    {
        document.getElementById("erreur_Ville").textContent = "On t'a pas appris à bien écrire frérot?";

        document.getElementById("erreur_Ville").style.color = 'black';

        event.preventDefault();
    }

    else 
    {
        document.getElementById("erreur_Ville").textContent = "C'est bien champion!";

        document.getElementById("erreur_Ville").style.color = 'green';
    }

    // Pour le mail 

    var mail = /(^[\w\.-]+@[a-z]+[\.]{1}[a-z]{2,3}$)/;
    var email = document.getElementById("mail").value;

    if (document.getElementById("mail").value == "") 
    {
        document.getElementById("erreur_Adresse_mail").textContent = "Saisis ton adresse mail idiot!!! \ud83d\ude09";

        document.getElementById("erreur_Adresse_mail").style.color = 'red';

        event.preventDefault() ;  
    }

    else if (!mail.test(email)) 
    {
        document.getElementById("erreur_Adresse_mail").textContent = "On t'a pas appris à bien écrire frérot?";

        document.getElementById("erreur_Adresse_mail").style.color = 'black';

        event.preventDefault();
    }

    else 
    {
        document.getElementById("erreur_Adresse_mail").textContent = "C'est bien champion!";

        document.getElementById("erreur_Adresse_mail").style.color = 'green';
    }

    // Pour choix du sujet 

    var sujet = document.getElementById("sujet").value;

    if (sujet == 1)
    {
        document.getElementById("erreur_Sujet").textContent = "Saisis un sujet idiot!!! \ud83d\ude09";

        document.getElementById("erreur_Sujet").style.color = 'red';

        event.preventDefault();
    }

    else 
    {
        document.getElementById("erreur_Sujet").textContent = "C'est bien champion!";

        document.getElementById("erreur_Sujet").style.color = 'green';
    }

    //Pour le traitement informatique (case à cocher) 

    var accept = document.getElementById("accept").checked;

    if (accept != true) 
    {
        document.getElementById("erreur_Acceptation").textContent = "Mais coche eul'case biloute!!";

        document.getElementById("erreur_Acceptation").style.color = 'red';

        event.preventDefault();
    }

    else 
    {
        document.getElementById("erreur_Acceptation").textContent = "C'est bien champion!";

        document.getElementById("erreur_Acceptation").style.color = 'green';
    }
    
    // Pour la question 

    var question = document.getElementById("question").value;

    if (document.getElementById("question").value == "") 
    {
        document.getElementById("erreur_Question").textContent = "Saisis une question idiot!!! \ud83d\ude09";

        document.getElementById("erreur_Question").style.color = 'red';

        event.preventDefault() ;
    }

    else 
    {
        document.getElementById("erreur_Question").textContent = "C'est bien champion!";
        
        document.getElementById("erreur_Question").style.color = 'green';
    }
});