let currentQuestion=0;

let answers=[];


const quiz=document.getElementById("quiz");

const progress=document.getElementById("progress");


const next=document.getElementById("next");

const previous=document.getElementById("previous");



function showQuestion(){


let item=questions[currentQuestion];


quiz.innerHTML="";


let box=document.createElement("div");

box.className="question";



box.innerHTML=`

<h2>
${currentQuestion+1}. ${item.q}
</h2>

<div class="answers">

<button class="answer" data-value="1">
Strongly Disagree
</button>

<button class="answer" data-value="2">
Disagree
</button>

<button class="answer" data-value="3">
Neutral
</button>

<button class="answer" data-value="4">
Agree
</button>

<button class="answer" data-value="5">
Strongly Agree
</button>

</div>

`;



quiz.appendChild(box);



document.querySelectorAll(".answer")
.forEach(button=>{


button.onclick=()=>{


document.querySelectorAll(".answer")
.forEach(x=>x.classList.remove("selected"));


button.classList.add("selected");


answers[currentQuestion]=
Number(button.dataset.value);



};


});



progress.style.width=
((currentQuestion/questions.length)*100)+"%";



previous.style.visibility=
currentQuestion===0?
"hidden":
"visible";


}



next.onclick=()=>{


if(answers[currentQuestion]===undefined){

alert("Choose an answer first.");

return;

}



if(currentQuestion<
questions.length-1){


currentQuestion++;

showQuestion();


}

else{


calculateResults();


}


};



previous.onclick=()=>{


if(currentQuestion>0){

currentQuestion--;

showQuestion();

}


};





function calculateResults(){


let scores={};



for(let key in relationshipTypes){

scores[key]=0;

}



questions.forEach((question,index)=>{


let answer=answers[index];


if(!answer)return;


for(let type in question.weights){


scores[type]+=
question.weights[type]*answer;


}


});



let results=[];



for(let type in scores){


results.push({

type:type,

score:scores[type]

});


}



results.sort(
(a,b)=>b.score-a.score
);



localStorage.setItem(
"relationshipResults",
JSON.stringify(results)
);



window.location.href=
"results.html";


}





showQuestion();