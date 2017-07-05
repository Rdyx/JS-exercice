var array = ["Pomme","Cerise","Tomate","Citron", ["Orange","Poivron"]];

array.push("Courgette");
array[4].push("Citron");
array.splice(1,1);
array.splice(2, 0, "Poire");
console.log(array);
