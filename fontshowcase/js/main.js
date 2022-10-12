/* Javascript for input change */
const lato = document.getElementById("js--lato");
const noto = document.getElementById("js--noto");
const silk = document.getElementById("js--silk");

const input = document.getElementById("js--input");

input.oninput = function(event){
    lato.innerText = event.target.value;
    noto.innerText = event.target.value;
    silk.innerText = event.target.value;
}

/* Javascript for favorites */
const hearts = document.getElementsByClassName("heart");

for(let i = 0; i < hearts.length; i++){
    hearts[i].onclick = function(event){
        for(let i = 0; i <hearts.length; i++){
            hearts[i].children[0].classList = "fa-regular fa-heart heart__icon"
        }
        hearts[i].children[0].classList = "fa-solid fa-heart heart__icon"
    }
}

/* Javascript for darkmode */
const toggleSwitch = document.getElementById("toggle");
const rootElement = document.querySelector(":root");

toggleSwitch.checked = false;


toggleSwitch.onchange = function(){
        document.getElementsByClassName('showcase')[0].classList.toggle("dark");
        document.getElementsByClassName('header')[0].classList.toggle("dark");
        document.getElementsByClassName('body')[0].classList.toggle("darkGradient");
    }
    