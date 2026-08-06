function loadArticle(name){

    const container = document.getElementById("article");

    if(!container){
        console.error("Missing article container");
        return;
    }


    const article = articles[name];


    if(!article){

        container.innerHTML = `
            <h1>Article not found</h1>
            <p>
            Missing article data:
            <strong>${name}</strong>
            </p>
        `;

        console.error(
            "Missing article:",
            name
        );

        return;
    }



    container.innerHTML = `

    <h1>${article.title}</h1>

    <p>
    ${article.short}
    </p>


    <div class="section">

    <h2>📖 What is it?</h2>

    <p>
    ${article.definition}
    </p>

    </div>



    <div class="section">

    <h2>🤝 Core Principles</h2>

    <ul>

    ${article.principles
    .map(item=>`
    <li>${item}</li>
    `)
    .join("")}

    </ul>

    </div>



    <div class="section">

    <h2>✨ Possible Benefits</h2>

    <ul>

    ${article.benefits
    .map(item=>`
    <li>${item}</li>
    `)
    .join("")}

    </ul>

    </div>



    <div class="section">

    <h2>⚠ Common Challenges</h2>

    <ul>

    ${article.challenges
    .map(item=>`
    <li>${item}</li>
    `)
    .join("")}

    </ul>

    </div>



    <div class="section">

    <h2>🌐 Example Structure</h2>

    <div class="diagram">

    ${article.diagram}

    </div>

    </div>



    <div class="section">

    <h2>🔗 Related Topics</h2>

    <ul>

    ${article.related
    .map(item=>`
    <li>${item}</li>
    `)
    .join("")}

    </ul>

    </div>

    `;

}