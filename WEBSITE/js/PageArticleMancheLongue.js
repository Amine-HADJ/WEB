'use strict';

let changement_titre= document.getElementById("RBL");
changement_titre.addEventListener('mouseenter',function(){
    let titre1 = document.getElementById("titre1");
    titre1.innerText = "Manche Longue Rouge"

});


let changement_titre2= document.getElementById("BML");
changement_titre2.addEventListener('mouseenter',function(){
    let titre1 = document.getElementById("titre1");
    titre1.innerText = "Manche Longue Blanc"

});

let changement_titre3= document.getElementById("BBML");
changement_titre3.addEventListener('mouseenter',function(){
    let titre1 = document.getElementById("titre1");
    titre1.innerText = "Manche Longue Bleu"

});

let changement_titre4= document.getElementById("NLM");
changement_titre4.addEventListener('mouseenter',function(){
    let titre1 = document.getElementById("titre1");
    titre1.innerText = "Manche Longue Noir"

});
let changement_titre5= document.getElementById("GLM");
changement_titre5.addEventListener('mouseenter',function(){
    let titre1 = document.getElementById("titre1");
    titre1.innerText = "Manche Longue Gris"

});



class Article {
    constructor(id, nom, prix, image) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.image = image;
    }
}

let RLM = new Article("RBL", "Rouge", 24.99, "../img/RBL.jpg")
let BML = new Article("BML", "Blanc", 24.99, "../img/BLM.jpg")
let BBML = new Article("BBML", "Bleu", 24.99, "../img/BleuML.jpg")
let GLM = new Article("GLM", "Gris", 24.99, "../img/GLM.jpg")
let GLN = new Article("NLM", "Noir", 24.99, "../img/NBL.jpg")

let liste = [RLM, BML, BBML , GLM, GLN]



function affichageArticle() {
    let articleclick;
    for (let a of liste) {
        if (a.id == this.id) {
            articleclick = a
        }
    }

    const image = new Image(); 
    image.onload = drawImage; 
    image.src = articleclick.image


    let articles = document.querySelectorAll(".article")
    articles.forEach(function(article) {
        article.style.display = "none"
    })
    

   this.style.display = "block";
   panier.style.display= "block";
   choix.style.display= "none";
   perso.style.display="none";
}

let articles = document.querySelectorAll(".article")
articles.forEach(function(article) {
    article.addEventListener('click',affichageArticle);
})

document.getElementById("panier").style.display="none"
document.getElementById("perso").style.display="none"

let personalisation_h= document.getElementById("h");
personalisation_h.addEventListener('click',function(){
    let articles = document.querySelectorAll(".article")
    articles.forEach(function(article) {
        article.style.display = "none"
        perso.style.display = "block"
        ctx.clearRect(250, 200, 150, 150);
        canvas.style.backgroundColor = "green";
    })
    ctx.drawImage(h, 250, 200, 150, 150);
});

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  

  
  
  function drawImage() {
    
    
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;
    ctx.drawImage(this, 0, 0);
  }


let personalisation_m= document.getElementById("m");
personalisation_m.addEventListener('click',function(){
    let articles = document.querySelectorAll(".article")
    articles.forEach(function(article) {
        article.style.display = "none"
        perso.style.display = "block"
        ctx.clearRect(250, 200, 150, 150);
        canvas.style.backgroundColor = "green";
        
    })
    
    ctx.drawImage(m, 250, 200, 150, 150);
    
});

let croix= document.getElementById("croix");
croix.addEventListener('click',function(){
    let articles = document.querySelectorAll(".article")
    articles.forEach(function(article) {
        article.style.display = "block"
        perso.style.display = "none"
        panier.style.display = "none" 
        choix.style.display = "flex"
    })
    
});