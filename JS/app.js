            //--------Laddningsskärmen--------\\

const curtain = document.querySelector(".opening-curtain");
const load = document.querySelector(".loading");
const slogan = document.querySelector(".hero-slogan");
const sloganUnder = document.querySelector(".hero-slogan-under");

const slideIn = new TimelineMax();

slideIn.fromTo(curtain, 0.1, {y: "0%"}, {y: "82%", ease: Power2.easeInOut})       //Dessa kodrader sköter tidsräkningen och effekter
.fromTo(curtain, 0.1, {y: "82%"}, {y: "100%", ease: Power2.easeInOut})            //för laddningsskärmen
.fromTo(curtain, 0.1, {x: "0"}, {x: "-100%", ease: Power2.easeInOut})
.fromTo(load, 5, {x: "0%"}, {x: "-100%", ease: Power2.easeInOut}, "-=4");

            //--------Laddningsskärm slut--------\\

const galleryPictures = [
    {
        picture: "/media/imgs/4.jpg",
        alt: "picture"
    },
    {
        picture: "/media/imgs/ZX_Spectrum128K.jpg",
        alt: "picture"
    },
    {
        picture: "/media/imgs/80-talsparty.jpg",
        alt: "picture"
    },
    {
        picture: "/media/imgs/MiamiVice.jpg",
        alt: "picture"
    },
    {
        picture: "/media/imgs/disco-chix.jpg",
        alt: "picture"
    },
    {
        picture: "/media/imgs/he-man-peruecke.png",
        alt: "picture"
    },
    {
        picture: "/media/imgs/emma-smile.jpg",
        alt: "picture"
    }
];

// laddar in bilder till bildgalleri på sidan

function loadPictureGallery(){
    const pictureGallery = document.getElementById("gallery-pictures");

    galleryPictures.forEach(pic => pictureGallery.innerHTML += `<img class="thumbnail-picture" src="${pic.picture}"></img>`);

    let thumbNailPicture = document.querySelectorAll(".thumbnail-picture");

    thumbNailPicture.forEach(pic => pic.addEventListener("click", () => {
    document.getElementById("myModal").style.display = "grid";
        let bigPicture =  document.getElementById("show-big-picture");
        bigPicture.setAttribute("src", pic.getAttribute("src"));    
        let galleryPicturesInModal = document.getElementById("gallery-pictures-in-modal");
        let thumbNaliPicturesInModal = document.getElementsByClassName("thumbnail-picture-in-modal");    
        if(thumbNaliPicturesInModal.length < 1) {
            galleryPictures.forEach(pic => galleryPicturesInModal.innerHTML += `<img class="thumbnail-picture-in-modal" src="${pic.picture}"></img>`);
        }
        setBorderPictureGallery(thumbNaliPicturesInModal, bigPicture);
        clickPictureInModal(bigPicture)
}));

//byta bild i bildgalleri genom klick

function clickPictureInModal(bigPicture) {
    let addClickthumbNailPictures = document.querySelectorAll(".thumbnail-picture-in-modal");
    console.log(addClickthumbNailPictures);
    addClickthumbNailPictures.forEach(pic => pic.addEventListener("click", () => {
    bigPicture.setAttribute("src", pic.getAttribute("src"));
    let galleryPicturesInModal = document.getElementById("gallery-pictures-in-modal");
    let thumbNaliPicturesInModal = document.getElementsByClassName("thumbnail-picture-in-modal");
    setBorderPictureGallery(thumbNaliPicturesInModal, bigPicture);
})) 
}

//nästa bild knapp i bildgalleri

const imgSliderNext = document.getElementById("next-img-btn");
imgSliderNext.addEventListener("click", () => {
    
    for(let i = 0; i < galleryPictures.length; i++){
        let smallModalThumnails = document.getElementsByClassName("thumbnail-picture-in-modal");
        let currentPicture = document.getElementById("show-big-picture");
        
        if(galleryPictures[i].picture == currentPicture.getAttribute("src")){
            if(i+2 > galleryPictures.length){
                currentPicture.setAttribute("src", galleryPictures[0].picture);
                setBorderPictureGallery(smallModalThumnails, currentPicture);
                break;
            }else {
                currentPicture.setAttribute("src", galleryPictures[i+1].picture);
                setBorderPictureGallery(smallModalThumnails, currentPicture);
                break;
            }            
        }        
    }
});

//tillbaka knappen i bildgalleri

const imgSliderPrevious = document.getElementById("previous-img-btn");
imgSliderPrevious.addEventListener("click", () => {
    for(let i = 0; i < galleryPictures.length; i++){
        let smallModalThumnails = document.getElementsByClassName("thumbnail-picture-in-modal");
        let currentPicture = document.getElementById("show-big-picture");

        if(galleryPictures[i].picture == currentPicture.getAttribute("src")){
            if(i-1 < 0){
                let lastPic = galleryPictures.length - 1;                
                currentPicture.setAttribute("src", galleryPictures[lastPic].picture);
                setBorderPictureGallery(smallModalThumnails, currentPicture);
                break;
            }else {
                currentPicture.setAttribute("src", galleryPictures[i-1].picture);
                setBorderPictureGallery(smallModalThumnails, currentPicture);
                break;
            }
            
        }
    }
})
}

//Sätter border på aktiv bild i modalen

function setBorderPictureGallery(pics, bigPic){    
    for(let i = 0; i < pics.length; i++) {
        if (pics[i].getAttribute("src") === bigPic.getAttribute("src")){
            pics[i].style.border = "3px solid #FF9933";
            pics[i].style.boxShadow = "var(--carrotshadow)"
        } else {
            pics[i].style.border = "";
            pics[i].style.boxShadow ="";
        }
    }
};

window.onload = loadPictureGallery();

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

let closeBtn = document.getElementsByClassName("close-modal");

for(let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', closeModal, false);
}
//funktion för att stänga modaler
function closeModal() {   
    let modalWindow = document.getElementsByClassName("modal-window");
      for(let i = 0; i < modalWindow.length; i++) {
          modalWindow[i].style.display = "none";
      }       
}

//Om man klickar utanför myModal stängs modalen
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


            //<--------Aboutsection-------->\\

const aboutUsPics = [
    {
        picture: "/media/imgs/About-Anton.jpg",
        alt: "Anton",
        title: "JS Guru",    
        info:  "Jag har en önskan i livet. Jag vill vara Jari!",
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com",
        linkedin: ""
    },
    {
        picture: "/media/imgs/About-Emma.jpg",
        alt: "Emma",
        title: "JS Guru",
        info: "text tex",
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com",
        linkedin: "https://www.linkedin.com/in/emma-svensson-arn%C3%A9r-14bb0921a/" 
    },
    {
        picture: "/media/imgs/About-Jari.jpg",
        alt: "Jari",
        title: "Den allsmäktige",
        info: "Jag är den allsmäktige ledaren, solen, luften, månen och universum. Och jag uppfann hamburgaren.",
        facebook: "https://www.facebook.com/jari.piilola.1",
        twitter: "https://twitter.com/Drahgozah",
        linkedin: "https://www.linkedin.com/in/jari-piilola-229726224/"
    },
    {
        picture: "/media/imgs/About-Olga.jpg",
        alt: "Olga",
        title: "JS Guru",
        info: "text text",
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com",
        linkedin: ""
    },
    {
        picture: "/media/imgs/About-Ulf.jpg",
        alt: "Ulf",
        title: "Överlägsen kodknackare",
        info: "Kodar i BASIC, Assembler (MC68000/6502/6510), C, C++, C#, PHP, Javascript, HTML, CSS, SQL, FORTH, BrainFuck och lite Java. Jag har också jobbat med Angular, Vue,  Wordpress, asgard, Git, Subversion, Laravel, Vagrant, MonoGame och säkert mycket mer som jag inte kommer ihåg nu.",
        facebook: "https://www.facebook.com/ulf.mandorff",
        twitter: "https://twitter.com/Zymcox",
        linkedin: "https://www.linkedin.com/in/ulf-mandorff-ba9b8484/"
    },
];

const picsAboutUs = document.getElementsByClassName("about-us-thumbs")[0];

const cardElements = aboutUsPics.map((card, index) => 
`<div class="thumb-about-us-pics"><img class="about-us-thumbpics" src="${card.picture}">
</img><button class="about-us-btn" onclick="openModal(${index})">${card.alt}</button></div>`).join("");

picsAboutUs.innerHTML = cardElements;

const openModal = (index) => {
    let cardDisplay = document.querySelector(".info-about-us");
    let cardHeader = document.getElementById("card-header");
    let cardContet = document.getElementById("card-content");
    
    cardHeader.innerHTML = "";
    cardContet.innerHTML = "";

    for (x in aboutUsPics[index]) {   
        console.log(x);
        let img = document.createElement("IMG")     
        let h2 = document.createElement("H2");
        let p = document.createElement("P");
        switch (x) {
            case 'picture':
                img.setAttribute ("src", aboutUsPics[index][x]);
                img.classList.add("card-header-pic");
                cardHeader.append(img);
                break;
            case 'alt':
                h2.innerHTML = aboutUsPics[index][x];
                cardHeader.append(h2);
                break;
            case'facebook':
                document.getElementById("facebook").setAttribute("href", aboutUsPics[index][x]);
                break;
            case 'twitter':
                document.getElementById("twitter").setAttribute("href", aboutUsPics[index][x]);
                break;
            case 'linkedin':
                document.getElementById("linkedin").setAttribute("href", aboutUsPics[index][x]);
                break;
            default:
                p.innerHTML = `<u><b>${x}</b></u> <br> ${aboutUsPics[index][x]}`;
                cardContet.append(p);                
        }
    }
    document.querySelector("#about-modal").style.display = "flex";    
}

const closeAboutUs = () => {
    document.querySelector("#about-modal").style.display = "none";
}

            //--------Aboutsection slut--------\\

//formulär som triggar ett modal-fönster.

//Vi skapar variabler som tar värdena från motsvarande element.
const skicka=document.getElementById("buttonSend");
const animation=document.getElementById("animation-wrapper");

//Vi skapar variabler som ska validera e-mail.
const emailRegex=/\S+@\S+\./;
const ApsTest = /^\S+@\S+\.\S+$/;


    skicka.onclick=function() {
    const email = document.querySelector("#email").value;
    
    // Om e-mail inte har fel då körs kod som öppnar modal-fönster annat ska det visas ett fel-meddellande
    if(!ApsTest.test(email)){
        document.querySelector("#email-error").innerHTML="error";
        setTimeout(closeAfterError,3000);     
        }else{
            animation.style.display="flex";
            
            //Ett tack-meddelande ska visas efter 3s.
            setTimeout(()=>{document.querySelector("#content-wrapper").innerHTML=`<span class="closeAnimation" onclick="closeFormModal()">X</span>
            <p>Tack för ditt meddelande</p>`},3000);  
        }  
    }

     //Vi skapar en funktion som stänger modalen när stängningsknapp trycks in.
    const closeFormModal = () => {
    animation.style.display="none";
    document.querySelector("#email").value = "";
    document.querySelector("#tema").value = "";
    document.querySelector("#msg").value = "";
    document.querySelector("#content-wrapper").innerHTML = '<span class="formsLoader"></span>';
};

//Vi skapar en funktion som rensar alla fälten efter error-meddelande.
const closeAfterError=()=>{
    document.querySelector("#email").value = "";
    document.querySelector("#tema").value = "";
    document.querySelector("#msg").value = "";
    document.querySelector("#email-error").innerHTML=""
};
   




/****************************Footer***************************/

let directionX = 0;
let directionY = 0;
let direction = 0;
let canvas;
let ctx;
let footerStarField;
let star;

document.addEventListener("mousemove", function (event) {
  directionX = direction + event.movementX * 0.1;
  directionY = direction + event.movementY * 0.1;
});
window.onload = init; //Anton... om du har problem med window.onload så beror kan det på att vi har två

function init() {
  canvas = document.getElementById("footer-canvas");
  ctx = canvas.getContext("2d");
  ctx.font = "30px Courier New";

  footerStarField = [];

  star = {
    posX: 0,
    posY: 0,
    speedX: 0,
    speedY: 0,
  };

  for (let i = 0; i < 2048; i++) {
    star.posX = Math.random() * canvas.width;
    star.posY = Math.random() * canvas.height;
    star.speedX = Math.random() * 0.2 + 0.1;
    star.speedY = Math.random() * 0.5 + 0.1;
    footerStarField.push(Object.assign({}, star));
  }

  window.requestAnimationFrame(animationLoop);
}

function animationLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#505050";

   // Om muspekaren lämnar sidan lugna ner  snön till original fart.
   if(directionX > 0) directionX=directionX-0.05;
   if(directionX < 0) directionX=directionX+0.05;
   if(directionY > 0) directionY=directionY-0.05;
   if(directionY < 0) directionY=directionY+0.05;

  //flytta alla stjärnor åt vänster och mer neråt pga jul.
  for (let i = 0; i < footerStarField.length; i++) {
    footerStarField[i].posX -= footerStarField[i].speedX - directionX;
    footerStarField[i].posY += footerStarField[i].speedY + directionY;
    if (footerStarField[i].posX < 0) {
      footerStarField[i].posX = canvas.width;
      footerStarField[i].speedX = Math.random() * 0.2 + 0.1;
    }
    if (footerStarField[i].posY > canvas.height) {
      footerStarField[i].posY = 0;
      footerStarField[i].speedY = Math.random() * 0.5 + 0.1;
    }
    if (footerStarField[i].posX > canvas.width) {
        footerStarField[i].posX = 0;
        footerStarField[i].speedX = Math.random() * 0.2 + 0.1;
      }
      if (footerStarField[i].posY < 0) {
        footerStarField[i].posY = canvas.height;
        footerStarField[i].speedY = Math.random() * 0.5 + 0.1;
      }
  }

  // rita ut alla stjäror
  for (let i = 0; i < footerStarField.length; i++) {
    let starSize = 2;
    if (footerStarField[i].speedX + footerStarField[i].speedY > 0.20) {
      starSize = 3;
    }
    if (footerStarField[i].speedX + footerStarField[i].speedY > 0.50) {
      starSize = 4;
    }
    if (footerStarField[i].speedX + footerStarField[i].speedY > 0.80) {
      starSize = 5;
    }
    ctx.fillRect(
      footerStarField[i].posX,
      footerStarField[i].posY,
      starSize,
      starSize
    );
  }
  window.requestAnimationFrame(animationLoop);
}

