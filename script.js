
var produits = ["produit1","produit2","produit3","produit4"];

//afficher l'element du tableau avec boucle for

for(var i = 0; i < produits.length; i++){
    console.log(produits[i]);
}

//afficher l'element et index du tableau avec boucle for

for(var index in produits){
    console.log("index= "+ index + "et element =" + produits[index])
}

//afficher l'element et index du tableau avec boucle forEach

produits.forEach(function(element,index){
    console.log("index = "+ index + "et element = " + element)
})
