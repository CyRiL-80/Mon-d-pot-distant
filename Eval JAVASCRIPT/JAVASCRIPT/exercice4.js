// Déclaration des variables 

var pu = window.parseInt(prompt("Saisir le prix unitaire :"));                  
var qtecom = window.parseInt(prompt("Saisir la quantité commandée :"));          
var tot = (pu*qtecom);
var rem=0;
var totrem=0;
var pap=0;
var port = 0;


// Pour le total 

function total (tot)
{
    var tot = (pu*qtecom);
    return tot
}
 
// Pour la remise 

function remise (rem)
{
    if (tot < 100) 
    {
        rem = 0;

        totrem = (tot-rem);
    }

    else if (tot >= 100 && tot <= 200)
    {
    rem = (tot * 0.05);

    totrem = (tot-rem);
    }

    else if (tot > 200)
    {
        rem = (tot * 0.10); 

        totrem = (tot-rem);
    }
    
return rem
}
 
// Pour les frais de port 

function FraisDePort (port)
{
    if (totrem < 500) 
    {
        port = (totrem * 0.02);

        pap = (port + totrem);
    }    

    if ((totrem < 500) && (port < 6))
    {
        port = 6;

        pap = (port + totrem);
    }

    else 
    {
        port = 0;

        pap = (port + totrem);
    }

return port
}

// Affichage des totaux, remises, fdp etc...

total (tot);
remise (totrem);
FraisDePort (port);

document.write("Le total de votre commande est de : "+ tot + "€. Avec la remise, vous en avez pour : " + totrem + "€. Si vous payez des frais de port, votre commande revient à : " + pap + "€.");