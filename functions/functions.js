/*function fonction(param1, param2, param3){

	return alert("Bonjour " + param1 + " " + param2 + ". Tu as " + param3 + " ans.");
}

var nom = prompt("Quel est votre nom?");
var prenom = prompt("Quel est votre prénom?");
var age = prompt("Quel est votre âge?");
fonction(nom, prenom, age);*/


function ageGenre(param1, param2){
	if (param1 < 18 && (param2 == "Homme" || param2 == "Femme"))
	{
		return alert("Vous êtes un/une " + param2 + " et vous êtes mineur");
	}
	else if (param1 >= 18 && param2 == "Homme" || param2 == "Femme")
	{
		return alert("Vous êtes un/une " + param2 + " et vous êtes majeur")
	}
	else
	{
		return alert("Ben vous êtes quoi ?!")
	}
}

var age = Number(prompt("Quel est votre âge ?"));
var genre = prompt("Et votre genre ?");
ageGenre(age, genre);