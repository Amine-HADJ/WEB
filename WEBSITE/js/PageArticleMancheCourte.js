let changement_titre= document.getElementById("TCR");
changement_titre.addEventListener('mouseenter',function(){
    let titre1 = document.getElementById("titre1");
    titre1.innerText = "Manche Courte Rouge"

});


let changement_titre2= document.getElementById("TCBlanc");
changement_titre2.addEventListener('mouseenter',function(){
    let titre1 = document.getElementById("titre1");
    titre1.innerText = "Manche Courte Blanc"

});

let changement_titre3= document.getElementById("TCB");
changement_titre3.addEventListener('mouseenter',function(){
    let titre1 = document.getElementById("titre1");
    titre1.innerText = "Manche Courte Bleu"

});

let changement_titre4= document.getElementById("TCG");
changement_titre4.addEventListener('mouseenter',function(){
    let titre1 = document.getElementById("titre1");
    titre1.innerText = "Manche Courte Gris"

});
let changement_titre5= document.getElementById("TCN");
changement_titre5.addEventListener('mouseenter',function(){
    let titre1 = document.getElementById("titre1");
    titre1.innerText = "Manche Courte Noir"

});


class Article {
    constructor(id, nom, prix, image) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.image = image;
    }
}

let TCR = new Article("TCR", "Rouge", 19.99, "../img/TCR.jpg")
let TCBlanc = new Article("TCBlanc", "Blanc", 19.99, "../img/TCBlanc.jpg")
let TCB = new Article("TCB", "Bleu", 19.99, "../img/TCB.jpg")
let TCG = new Article("TCG", "Gris", 19.99, "../img/TCG.jpg")
let TCN = new Article("TCN", "Noir", 19.99, "../img/TCN.jpg")

let liste = [TCR, TCBlanc, TCG , TCN, TCB]


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
        ctx.clearRect(350, 350, 150, 150);
        canvas.style.backgroundColor = "green";

    })
    
    ctx.drawImage(h, 350, 350, 150, 150);
    
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
        ctx.clearRect(350, 350, 150, 150);
        canvas.style.backgroundColor = "green";

    }) 
    
    ctx.drawImage(m, 350, 350, 150, 150);
    
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