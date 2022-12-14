// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 -
// Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: - id del post, numero progressivo da 1 a n - nome autore, - foto autore, - data in formato americano (mm-gg-yyyy), - testo del post, - immagine (non tutti i post devono avere una immagine), - numero di likes. Non è necessario creare date casualiPer le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// [Qui come abbiam visto in realtà vi arriva gratis, ma dategli un occhio per capirlo e vedete se tutto combacia e torna :innocente:]
// Milestone 2 -
// Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed

// Milestone 3 -
// Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like


const posts = [
    {
        "id": 0,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];



// stampare i post (ogetti) array
const containerPosts = document.getElementById("container");
posts.forEach(post => {
    console.log(post);
    containerPosts.innerHTML += `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">               
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${post.author.name}</div>
                    <div class="post-meta__time">${post.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${post.content}</div>
        <div class="post__image">
            <img src="${post.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`
});



// Cliccando sul tasto “Mi Piace” il colore del testo del bottone cambia 
// inoltr incrementa il counter dei likes relativo

const likeButton = document.querySelectorAll(".like-button"); // ha creato un array di questa classe
let num = 0;
const likesArray = [];


for (let i = 0; i < likeButton.length; i++){

    document.getElementsByClassName("likes__cta")[i].addEventListener("click", function(){

       let likes = posts[i].likes;
       let counter = document.getElementsByClassName("js-likes-counter")[i];
       likeButton[i].classList.toggle("js-like-button");

       if (num === 0){
        num++;
        counter.innerHTML = likes + num;
        likesArray.push(`${i}`);
        console.log("liked posts:", likesArray); //salvare in un secondo array gli id dei post ai quali abbiamo messo il like
       } else if (num === 1){
        num--;
        counter.innerHTML = likes - num;
       }
    })
    
}























// Milestone 3 -
// Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like



 



