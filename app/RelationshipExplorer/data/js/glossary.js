const list =
document.getElementById("terms");


const search =
document.getElementById("search");



function showTerms(filter=""){


list.innerHTML="";


glossary

.filter(item=>
item.term
.toLowerCase()
.includes(
filter.toLowerCase()
)
)

.forEach(item=>{


list.innerHTML+=`

<div class="card">

<h2>
${item.icon}
${item.term}
</h2>

<p>
${item.definition}
</p>

</div>

`;

});


}



search.oninput=()=>{

showTerms(search.value);

};


showTerms();