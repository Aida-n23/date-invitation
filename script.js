const title = document.getElementById("title");
const text = document.getElementById("text");
const emoji = document.getElementById("emoji");

const mainBtn = document.getElementById("mainBtn");
const noBtn = document.getElementById("noBtn");

const hearts = document.getElementById("hearts");

const pages = [

{
emoji:"💌",
title:"Привет 😊",
text:"У меня есть кое-что, что я давно хочу тебе показать...",
button:"Начать ✨"
},

{
emoji:"🥹",
title:"Можно вопрос?",
text:"Обещай дочитать до конца ❤️",
button:"Продолжить"
},

{
emoji:"🤍",
title:"Честно...",
text:"Я немного волнуюсь...",
button:"Я слушаю ❤️"
},

{
emoji:"💖",
title:"Последний вопрос...",
text:"Пойдешь со мной на свидание?",
button:"Да ❤️"
}

];

let step = 0;

function updatePage(){

emoji.textContent = pages[step].emoji;

title.textContent = pages[step].title;

text.textContent = pages[step].text;

mainBtn.textContent = pages[step].button;

if(step === pages.length - 1){

noBtn.style.display = "inline-block";

}

}

mainBtn.onclick = () => {

if(step < pages.length - 1){

step++;

updatePage();

}else{

document.body.innerHTML = `
<div style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(135deg,#ffd6e8,#f7d7ff);
font-family:Poppins,sans-serif;
">

<div style="
background:white;
padding:40px;
border-radius:25px;
text-align:center;
box-shadow:0 10px 30px rgba(0,0,0,.15);
">

<h1>❤️ Ура! ❤️</h1>

<p>
Теперь осталось выбрать дату нашего свидания 🥹
</p>

</div>

</div>
`;

}

};
const noMessages = [
    "Нет 🙈",
    "Точно нет? 🥺",
    "Подумай ❤️",
    "Ну пожалуйста 🥹",
    "Не получится 😂"
];

let noIndex = 0;

function moveButton() {

    if (noIndex < noMessages.length - 1) {
        noIndex++;
    }

    noBtn.textContent = noMessages[noIndex];

    noBtn.style.position = "fixed";

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("click", moveButton);

for (let i = 0; i < 30; i++) {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💖";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 25) + "px";

    heart.style.animationDuration = (6 + Math.random() * 6) + "s";

    heart.style.animationDelay = Math.random() * 6 + "s";

    hearts.appendChild(heart);

}
// Плавное появление текста
function animateContent() {

    title.classList.remove("fade");
    text.classList.remove("fade");

    void title.offsetWidth;
    void text.offsetWidth;

    title.classList.add("fade");
    text.classList.add("fade");

}

// Обновляем страницу с анимацией
const oldUpdate = updatePage;

updatePage = function () {
    oldUpdate();
    animateContent();
};

// Запускаем первую страницу
updatePage();

// Простое конфетти при согласии
function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("div");

        piece.innerHTML = Math.random() > 0.5 ? "🎉" : "💖";

        piece.style.position = "fixed";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-20px";
        piece.style.fontSize = (16 + Math.random() * 18) + "px";
        piece.style.pointerEvents = "none";
        piece.style.transition = "transform 3s linear, opacity 3s";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.style.transform =
                translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg);
            piece.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            piece.remove();
        }, 3200);
    }

}

// Добавляем конфетти перед финальным экраном
const originalClick = mainBtn.onclick;

mainBtn.onclick = () => {

    if (step === pages.length - 1) {
        createConfetti();
        setTimeout(() => {
            originalClick();
        }, 1200);
    } else {
        originalClick();
    }

};
