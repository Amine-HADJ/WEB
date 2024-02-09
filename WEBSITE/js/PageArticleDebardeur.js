let changement_titre= document.getElementById("DR");
changement_titre.addEventListener('mouseenter',function(){
    let titre1 = document.getElementById("titre1");
    titre1.innerText = "Débardeur Rouge"

});


let changement_titre2= document.getElementById("DB");
changement_titre2.addEventListener('mouseenter',function(){
    let titre1 = document.getElementById("titre1");
    titre1.innerText = "Débardeur Blanc"

});

let changement_titre3= document.getElementById("DBLU");
changement_titre3.addEventListener('mouseenter',function(){
    let titre1 = document.getElementById("titre1");
    titre1.innerText = "Débardeur Bleu"

});

let changement_titre4= document.getElementById("DG");
changement_titre4.addEventListener('mouseenter',function(){
    let titre1 = document.getElementById("titre1");
    titre1.innerText = "Débardeur Gris"

});
let changement_titre5= document.getElementById("DN");
changement_titre5.addEventListener('mouseenter',function(){
    let titre1 = document.getElementById("titre1");
    titre1.innerText = "Débardeur Noir"

});
let liste_tshirt=[]
fetch("../JSON/base_de_données.json")
    .then(response => response.json())
    .then(function(json){
        liste_tshirt=JSON
    })


class Article {
    constructor(id, nom, prix, image) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.image = image;
    }
}

let DR = new Article("DR", "Rouge", 14.99, "../img/DR.jpg")
let DB = new Article("DB", "Blanc", 14.99, "../img/DB.jpg")
let DBLU = new Article("DBLU", "Bleu", 14.99, "../img/DBLU.jpg")
let DG = new Article("DG", "Gris", 14.99, "../img/DG.jpg")
let DN = new Article("DN", "Noir", 14.99, "../img/DN.jpg")

let liste = [DR, DB, DG , DN, DBLU]


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





let personalisation_m= document.getElementById("m");
personalisation_m.addEventListener('click',function(){
    let articles = document.querySelectorAll(".article")
    articles.forEach(function(article) {
        article.style.display = "none"
        perso.style.display = "block"
        ctx.clearRect(250, 200, 100, 100);
        canvas.style.backgroundColor = "green";
    })
    ctx.drawImage(m, 250, 200, 100, 100);   
});





  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  
  
  function drawImage() {
    
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;
  
    
    ctx.drawImage(this, 0, 0);  
    
  }


let personalisation_h= document.getElementById("h");
personalisation_h.addEventListener('click',function(){
    let articles = document.querySelectorAll(".article")
    articles.forEach(function(article) {
        article.style.display = "none"
        perso.style.display = "block"
        ctx.clearRect(250, 200, 100, 100);
        canvas.style.backgroundColor = "green"; 
    })
    
    ctx.drawImage(h, 250, 200, 100, 100);
    
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
    

