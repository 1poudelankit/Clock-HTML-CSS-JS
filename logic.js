let hrNiddle=document.querySelector("#hr");
let secNiddle=document.querySelector("#sec");
let minNiddle= document.querySelector("#min");
let inDigit= document.querySelector("#in-digit");
let button= document.querySelector("button");
let p= document.createElement("p");


setInterval(
  ()=>{
     let currentDate=new Date();
     let hrTime= currentDate.getHours();
     let minTime= currentDate.getMinutes();
     
     let secTime= currentDate.getSeconds();
     
     let hrRotation= 30*hrTime + minTime/2 + secTime/120;
     let minRotation= minTime*6 ;
     let secRotation= secTime*6;
     hrNiddle.style.transform=`rotate(${hrRotation}deg)`;
     secNiddle.style.transform=`rotate(${minRotation}deg)`;
     minNiddle.style.transform=`rotate(${secRotation}deg)`;

  }
,1000);

function onclick(){
  let date=p.innerText=new Date();
  console.log(date);


}