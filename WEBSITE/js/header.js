const entete = 
    `
            <div class="entete">
                <a href="./Index.html"><img src="../img/logo.jpg"></></a>
                 <h1> M&H SHOP </h1>
                 <a href="./PagePanier.html"><img src="../img/panier_commande.png"></></a>
             </div >
            <div id="wrap">
                <ul class="navbar">
                    <li>
                        <a href="./Index.html">Accueil</a>
                    </li>
                    <li>
                        <a href="#">Articles</a>
                        <ul>
                            <li><a href="./PageArticleDebardeur.html">Débardeur</a></li>
                            <li><a href="./PageArticleMancheCourte.html">T-shirt à
                                manches courtes</a></li>
                            <li><a href="./PageArticleMancheLongue.html">T-shirt
                                à manches longues</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="./PagePanier.html">Panier</a>
                    </li>
                    <li>
                        <a href="./PageContact.html">A propos & contact</a>
                    </li>


                </ul>
            </div>
    `




document.querySelector(".header").innerHTML = entete;