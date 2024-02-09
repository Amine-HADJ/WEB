
let liste_produits=[]
fetch('../JSON/base_de_données.json')
    .then(response => response.json())
    .then(function(json) {
        liste_produits=json})





function ajout_Panier() {
    let nom = document.getElementById('titre1').innerHTML;
    let image = document.getElementById('image').src;
    //let imagePerso = document.getElementById('canvas').;
    let prix = document.getElementById('prix_objet').innerHTML;
    let taille = document.getElementById('taille').value;
    let quantité = document.getElementById('qte_panier').value;
    let numeroArticle ='Article' + (window.sessionStorage.length);
    sessionStorage.setItem(numeroArticle, JSON.stringify({'nom': nom , 'image' : image, 'quantité' : quantité,  'prix' : prix, 'taille' : taille}));
}






function refreshStorage() {
    let qté=window.sessionStorage.length;
    for (let i = 1; i< qté +1 ; i++){
        if (localStorage.getItem('Article'+i) == null) {
        let temp = sessionStorage.getItem('Article'+(i+1))
        sessionStorage.setItem('Article'+i,temp);
        sessionStorage.removeItem('Article'+(i+1));
     }
    }
}

 
function removeItem(x) {
    localStorage.removeItem('Article'+x);
}


function vider() {
    let qté=window.sessionStorage.length ; 
    for (let i = 1; i<qté +1 ; i++ ) {
        sessionStorage.removeItem('Article'+i);
    }
    location.reload();
}

function prix_sous_total() {
    let somme = 0;
    let qté= window.sessionStorage.length;
    for (let i = 1; i< qté +1 ; i++) {
        nb=parseFloat(document.getElementById("prix_total"+i).innerHTML)
        somme += nb;
    }
    prix_arrondi = Math.round(somme*100)/100;
    document.getElementById("prix_sous_total").innerHTML = parseFloat(prix_arrondi);
}

function prixPanier() {
    const prix = document.getElementById("prix").innerHTML;
    let qte = document.getElementById("qte_panier").value;
    let Prix_final
    if (qte <10) {
        Prix_final = Math.round((qte*prix)*100)/100;
    } else {
        Prix_final = Math.round(((qte*prix)-((10*qte*prix)/100))*100)/100;
    }
    document.getElementById("prix_total").innerHTML=Prix_final;
}






//API MAPBOX


function getAdress(){
    adresse = document.getElementById("adresse_de_livraison").innerHTML;
    fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(adresse)}.json?access_token=pk.eyJ1IjoicGllcnJlY3BlIiwiYSI6ImNsOTZ3NDYzZjAwYjc0MnBmcDl1NzZkMmsifQ.w1SKfeuf7GWZxZgGac9X9w')
    .then(res => res.json())
    .then(data => {
        coord = data.features[0].center;
        long=coord[0];
        lat=coord[1];
        fetch('https://api.mapbox.com/directions/v5/mapbox/driving/${encodeURIComponent(long)}%2C${encodeURIComponent(lat)}%3B4.8470882%2C45.7540207?alternatives=true&geometries=geojson&steps=true&access_token=pk.eyJ1IjoicGllcnJlY3BlIiwiYSI6ImNsOTZ3NDYzZjAwYjc0MnBmcDl1NzZkMmsifQ.w1SKfeuf7GWZxZgGac9X9w')
            .then(res2 => res2.json())
            .then(data2 => {  
                distance = data2.routes[0].distance;
                calculfdl(distance)
        });
    });
};

function calculfdl(dist) {
    frais= 0;
    prixpanierfldtemp=prixpanier
    if (distance>20000) {
        frais = 5 + 0.07*distance/1000
        frais = Math.round(fdl)
    }
    document.getElementById("somme_livraison").innerHTML=frais +"€";
}


function temp(){
    let qté=window.sessionStorage.length;
    let tab=[]
    for (let i = 1; i<qté +1 ; i++ ) {
        var item=JSON.parse(sessionStorage.getItem('Article'+i));  //item = null ce qui donne l'erreur suivante: Uncaught TypeError: Cannot read properties of null (reading 'image')
        tab.push(item);                                             // malgré de nombreuses recherches, nous n'avons pas reussis à identifier l'erreur
        console.log(tab);
    };
    let temp = document.querySelector("#listePanier");
    for (var p of tab) {
        console.log(p.image)
        let clone = document.importNode(temp.content, true);
        newContent = clone.firstElementChild.innerHTML
            .replace(/{{id}}/g, (tab.indexOf(p)+1))
            .replace(/{{photo}}/g, p.image)
            .replace(/{{nom}}/g, p.nom)
            .replace(/{{prix}}/g, p.prix)
        clone.firstElementChild.innerHTML = newContent
    document.getElementById("divtemp").appendChild(clone);
        }
    };
        



