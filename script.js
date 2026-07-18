const t=document.getElementById('title');
const p=document.getElementById('text');
const yes=document.getElementById('yes');
const no=document.getElementById('no');
let stage=0;
const steps=[
['😊 Можно вопрос?','Обещай дочитать до конца...','Далее ❤️'],
['🥹','Пойдешь со мной на свидание?','Да ❤️']
];
yes.onclick=()=>{
 if(stage<steps.length){
  t.textContent=steps[stage][0];
  p.textContent=steps[stage][1];
  yes.textContent=steps[stage][2];
  stage++;
  if(stage===steps.length){no.style.display='inline-block';}
 }else{
  document.body.innerHTML='<div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:Arial;background:linear-gradient(135deg,#ffd6e7,#f7dcff)"><div style="text-align:center"><h1>❤️ Ура! ❤️</h1><p>Теперь осталось выбрать дату 😊</p></div></div>';
 }
};
const texts=['Нет 🙈','Точно нет? 🥺','Подумай ❤️','Ну пожалуйста 🥹','😂'];
let i=0;
function move(){
 if(i<texts.length-1)i++;
 no.textContent=texts[i];
 no.style.left=Math.random()*(window.innerWidth-120)+'px';
 no.style.top=Math.random()*(window.innerHeight-60)+'px';
}
no.onmouseover=move; no.onclick=move;
