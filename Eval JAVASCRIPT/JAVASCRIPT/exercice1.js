    // Déclaration des variables //

    var jeunes=0;
    var adultes=0;
    var vieux=0;
    var a;


    // Fenêtre qui s'affiche pour entrer l'âge //

    do 
    {
        
    a = window.prompt("Veuillez entrez un âge (un centenaire pour arrêter la boucle)");

    // Pour les jeunes //

    if ( a <20) 
    {

    jeunes++;

    console.log(jeunes);

    }

    // Pour les vieux //

    else if (a >=40 ) 
    {

    vieux++;

    console.log(vieux);

    }

    // Pour les adultes //

    else if ((a >=20 && a <= 40 ))
    {

    adultes++;

    console.log(adultes);

    }
    }

    // Centenaires //

    while (a < 100);


    // Affichage du résultat //

    window.alert("Il y a " + "" + jeunes + "" + " jeune(s), "  + adultes + "" + " adulte(s), " + "" + vieux + "" +" vieux, " + " dont "+ " 1 " + "" + " centenaire ");