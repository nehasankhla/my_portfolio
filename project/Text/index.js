const form = document.forms[0];
        form.addEventListener("submit",e=> {
            e.preventDefault();

            const textarea = document.querySelector("textarea");
            const article = document.querySelector("article");

            const value = textarea.value;

            const Characters = value.split("").length;
            const Words = value.split(" ").length;
            const Sentences = value.split(".").length-1;

            const div = document.createElement("div");

            div.innerHTML = `
                <p>characters : ${Characters}</P>
                <p>words : ${Words}</p>
                <p>sentences : ${Sentences}</p> `

            article.appendChild(div);

        });