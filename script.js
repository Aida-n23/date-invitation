let page = 1;

function nextPage(){

document.getElementById("page"+page).classList.remove("active");

page++;

document.getElementById("page"+page).classList.add("active");

}

const noBtn=document.getElementById("noBtn");

function moveButton(){

const x=Math.random()*(window.innerWidth-150);

const y=Math.random()*(window.innerHeight-80);

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

}

noBtn.addEventListener("mouseover",moveButton);

noBtn.addEventListener("touchstart",moveButton);

function yesAnswer(){

document.getElementById("page3").style.display="none";

document.getElementById("success").style.display="block";

confetti();

}

function confetti(){

for(let i=0;i<120;i++){

const heart=document.createElement("div");

heart.innerHTML=Math.random()>0.5?"❤️":"💖";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-30px";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.transition="4s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="110vh";

heart.style.transform=`rotate(${Math.random()*720}deg)`;

},10);

setTimeout(()=>heart.remove(),4500);

}

}
