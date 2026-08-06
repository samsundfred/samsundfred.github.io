const container=
document.getElementById("results");



const saved=
localStorage.getItem(
"relationshipResults"
);



if(!saved){

container.innerHTML=
`
<div class="card">
<h2>
No results found
</h2>

<p>
Please complete the quiz first.
</p>

<a href="quiz.html">
Start Quiz
</a>

</div>
`;

}
else{


let results=
JSON.parse(saved);



let highest=
results[0];



let html=
`

<div class="card">

<h2>
Your strongest match:
</h2>


<h1>
${relationshipTypes[highest.type].name}
</h1>


<p>
${relationshipTypes[highest.type].description}
</p>


<span class="tag">
Top compatibility
</span>


</div>


<h2>
Your compatibility map
</h2>

`;




results.slice(0,8)
.forEach(result=>{


let style=
relationshipTypes[result.type];


let percent=
Math.round(
(result.score/results[0].score)*100
);



html+=`

<div class="match card">

<h3>
${style.name}
</h3>


<p>
${style.description}
</p>


<div class="bar">

<div class="fill"
style="width:${percent}%">

</div>

</div>


<strong>
${percent}% compatibility
</strong>


</div>

`;

});





let top=
relationshipTypes[highest.type];



html+=`

<div class="card">


<h2>
Why this matched you
</h2>


<p>
Your answers suggest you may value:
</p>


<ul>

${top.traits
.map(t=>`<li>${t}</li>`)
.join("")}

</ul>


</div>


<div class="grid">


<div class="small-card">

<h3>
✨ Possible strengths
</h3>

<ul>

<li>Better understanding of your needs</li>

<li>Clearer communication</li>

<li>More intentional relationships</li>

</ul>

</div>



<div class="small-card">

<h3>
⚠ Things to explore
</h3>

<ul>

<li>Boundaries</li>

<li>Communication habits</li>

<li>Managing expectations</li>

</ul>


</div>


</div>


`;



container.innerHTML=html;



}