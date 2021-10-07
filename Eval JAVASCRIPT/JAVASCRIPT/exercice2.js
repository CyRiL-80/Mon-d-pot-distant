// Déclaration de la fonction table_multiplication //

function table_multiplication(nombre)
		{

		var m;
		for (m=0; m<=10; m++) 
		{
		    resultat=nombre*m;

			document.write(nombre+" * "+m+"="+nombre*m+"<br>");

			                  }

		}

// Affichage de la table de multplication choisie //	

nombre=window.prompt("Veuillez entrer le numéro d'une table (un entier):");

			table_multiplication(nombre);