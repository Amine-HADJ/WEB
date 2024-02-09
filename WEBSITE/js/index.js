let filtre_article_ete = document.getElementById("ete")

filtre_article_ete.addEventListener('click',function(){
    let articles = document.querySelectorAll(".article")
    articles.forEach(function(article) {
        article.style.display = "none"
    })

    let articlesEte = document.querySelectorAll(".article-ete")
    articlesEte.forEach(function(article) {
        article.style.display = "block"
    })
    
    
})

let filtre_article_hiver = document.getElementById("hiver")

filtre_article_hiver.addEventListener('click',function(){
    let articles = document.querySelectorAll(".article")
    articles.forEach(function(article) {
        article.style.display = "none"
    })

    let articlesHiver = document.querySelectorAll(".article-hiver")
    articlesHiver.forEach(function(article) {
        article.style.display = "block"
    })
})

let filtre_article_noir = document.getElementById("noir")

filtre_article_noir.addEventListener('click',function(){
    let articles = document.querySelectorAll(".article")
    articles.forEach(function(article) {
        article.style.display = "none"
    })

    let articlesNoir = document.querySelectorAll(".article-noir")
    articlesNoir.forEach(function(article) {
        article.style.display = "block"
    })
})