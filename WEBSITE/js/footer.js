const pied_page = 
    `
        <div class="bloc footer-services">
            <h3>Services M&H SHOP</h3>
            <ul class="liste-services">
                <li><a href="#">E-commerce</a></li>
                <li><a href="#">Start-up</a></li>
            </ul>
        </div>
        <div class="bloc footer-contact">
            <h3>Restons en contact<br><br></h3>

            <ul class="liste-contact">
                <a href="tel:+33745555675"> <li>07 45 55 65 75</li> </a>
                <a href="mailto:MetHshop@gmail.com?subject=Demande De Renseignements&body=Bonjour, je souhaiterais obtenir des renseignements sur"><li>MetHshop@gmail.com</li></a>
                <li>18 rue Saxe-Gambetta, Lyon III</li>
                <li><a href="./PageContact.html">A propos & contact</a></li>
            </ul>
        </div>
        <div class="bloc footer-horaires">
            <h3>Horaires
                <br>
                <br>
            </h3>
            <ul class="liste-horaires">
                <li>Lundi: 10h-20h</li>
                <li>Mardi: 10h-20h</li>
                <li>Mercredi: 10h-20h</li>
                <li>Jeudi: 10h-20h</li>
                <li>Vendredi: 10h-20h</li>
                <li>Samedi: 9h-13h</li>

            </ul>
        </div>
        <div class="bloc footer-media">
            <h3>Nos réseaux <br><br></h3>
            <ul class="liste-media">
                <li><a href="https://www.instagram.com/?hl=fr"><img class="footer"
                            src="../img/instagram_logo.jpg" alt="icones
                            reseaux sociaux">Instagram</a></li>
                <li><a href="https://m.facebook.com/login/?locale=fr_FR"><img class="footer"
                            src="../img/Facebook_logo.jpg" alt="icones
                            reseaux sociaux">Facebook</a></li>
                <li><a href=#"https://twitter.com/?lang=fr3><img class="footer"
                            src="../img/twitter_logo.jpg" alt="icones
                            reseaux sociaux">Twitter</a></li>
            </ul>

        </div>

    `

document.querySelector(".contenue-footer").innerHTML = pied_page;