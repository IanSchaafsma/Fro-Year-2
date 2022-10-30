const toBeClonedSection = document.getElementById("js--toBeCloned");

fetch("/data/trellies.json").then(
    function(response){
        return response.json();
    }
).then(
    function(data){
        /* get main */
        const main = document.querySelector('main');
        /* make section and add section */
        let toBeAddedSection = document.createElement("section");
        toBeAddedSection.classList.add("tasks");
        main.appendChild(toBeAddedSection);
        /* make header and add header */
        let toBeAddedHeader = document.createElement("header");
        toBeAddedHeader.classList.add("tasks__header");
        toBeAddedSection.appendChild(toBeAddedHeader);
        /* make h2 and add h2 */
        let toBeAddedH2 = document.createElement("h2");
        toBeAddedH2.classList.add("tasks__h2");
        toBeAddedH2.innerText = data.title;
        toBeAddedHeader.appendChild(toBeAddedH2);
        /* make wrapper and add wrapper */
        let toBeAddedWrapper = document.createElement("div");
        toBeAddedWrapper.classList.add("tasks__headerWrapper");
        toBeAddedHeader.appendChild(toBeAddedWrapper);
        /* make number and add number */
        let toBeAddedNumber = document.createElement("div");
        toBeAddedNumber.classList.add("tasks__number");
        toBeAddedNumber.innerText = data.activities.length;
        toBeAddedWrapper.appendChild(toBeAddedNumber);
        /* make button and add button */
        let toBeAddedButton = document.createElement("button");
        toBeAddedButton.classList.add("tasks__edit");
        toBeAddedButton.innerText = "..."
        toBeAddedWrapper.appendChild(toBeAddedButton);
        /* make ul and add ul */
        let toBeAddedUl = document.createElement("ul");
        toBeAddedUl.classList.add("tasks__list");
        toBeAddedSection.appendChild(toBeAddedUl);


        for(let i = 0; i < data.activities.length; i++){
            let toBeAddedLi = document.createElement("li");
            toBeAddedLi.classList.add("tasks__listItem");
            toBeAddedUl.appendChild(toBeAddedLi);

            let toBeAddedLabel = document.createElement("label");
            toBeAddedLabel.classList.add("tasks__label");
            if(data.activities[i].extraClass !== ""){
                toBeAddedLabel.classList.add("tasks__label--" + data.activities[i].extraClass)
            }
            toBeAddedLabel.innerText = data.activities[i].label;
            toBeAddedLi.appendChild(toBeAddedLabel);

            let toBeAddedParagraph = document.createElement("p");
            toBeAddedParagraph.innerText = data.activities[i].description;
            toBeAddedLi.appendChild(toBeAddedParagraph);

            let toBeAddedAuthor = document.createElement("p");
            if(data.activities[i].author !== ""){
                toBeAddedAuthor.innerText = data.activities[i].author;
                toBeAddedAuthor.classList.add("tasks__author");
            }
            toBeAddedLi.appendChild(toBeAddedAuthor);
        }
    }
)