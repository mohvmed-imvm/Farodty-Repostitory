

/* =========================
   5 SECOND COUNTDOWN
========================= */

let count = 5;

const number =
    document.getElementById("number");

const intro =
    document.getElementById("intro");

const main =
    document.getElementById("main");


const countdown =
setInterval(() => {

    count--;


    if(count > 0){

        number.innerText =
            count;


        /* إعادة تشغيل الأنيميشن */

        number.style.animation =
            "none";

        void number.offsetWidth;

        number.style.animation =
            "numberIn .8s ease";

    }


    else{

        clearInterval(countdown);


        number.innerText =
            "♡";


        setTimeout(() => {

            intro.classList.add("hide");

            main.classList.add("show");

            startHearts();

        },700);

    }

},1000);



/* =========================
   OPEN GIFT
========================= */

function openGift(){
   const music = document.getElementById("birthdayMusic");

   music.volume = 0.7;

   music.play().catch(() => {});

    const gift =
        document.getElementById("giftArea");


    /* منع الضغط المتكرر */

    if(gift.classList.contains("open")){

        return;

    }


    gift.classList.add("open");


    /* انتظر فتح الغطاء */

    setTimeout(() => {


        gift.style.display =
            "none";


        document.querySelector("h1")
            .style.display =
            "none";


        document.querySelector(".subtitle")
            .style.display =
            "none";


        document.querySelector(".gift-text")
            .style.display =
            "none";


        document.getElementById("message")
            .style.display =
            "block";


        /* انفجار القلوب */

        for(let i=0;i<70;i++){

            setTimeout(
                createHeart,
                i * 35
            );

        }


    },800);

}



/* =========================
   CREATE HEART
========================= */

function createHeart(){

    const heart =
        document.createElement("div");


    heart.className =
        "heart";


    const hearts = [
        "♡",
        "❤︎",
        "𝄞",
        "𝜗𝜚",
        "⋆"
    ];


    heart.innerText =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (15 + Math.random() * 35)
        + "px";


    heart.style.animationDuration =
        (4 + Math.random() * 5)
        + "s";


    document.body.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    },9000);

}



/* =========================
   CONTINUOUS HEARTS
========================= */

function startHearts(){

    setInterval(
        createHeart,
        650
    );

}
