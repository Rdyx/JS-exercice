function fonction(param1, param2){
	if(param1>param2){
		return alert(param1 + " est supérieur à "+ param2);
	}
	else if(param1<param2){
		return alert(param1 + " est inférieur à "+ param2);
	}
	else {
		return alert(param1 + " est égal à "+ param2);
	}
	return alert("Param1 : " + param1 + " " + param2);
}


var chiffre1 = Number(prompt("1er chiffre"));
var chiffre2 = Number(prompt("2eme chiffre"));

fonction(chiffre1, chiffre2);