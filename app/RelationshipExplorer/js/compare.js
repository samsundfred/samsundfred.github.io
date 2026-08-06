const one =
document.getElementById("one");

const two =
document.getElementById("two");



for(let key in relationshipTypes){

let option =
`
<option value="${key}">
${relationshipTypes[key].name}
</option>
`;

one.innerHTML+=option;
two.innerHTML+=option;

}



function compare(){


let a=
relationshipTypes[one.value];


let b=
relationshipTypes[two.value];


document.getElementById("result")
.innerHTML=

`

<div class="result">

<h2>
${a.name} vs ${b.name}
</h2>


<h3>
${a.short}
</h3>


<h3>
Compared with:
</h3>


<p>
${b.description}
</p>


<h3>
Shared themes</h3>


<ul>

<li>Communication</li>

<li>Consent</li>

<li>Respect</li>

<li>Personal boundaries</li>

</ul>


</div>

`;

}


one.onchange=compare;

two.onchange=compare;


compare();