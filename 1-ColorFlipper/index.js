const colors=["Green","#F15025","Rgba(133,122,200)","Red"];

const button = document.getElementById("btn");

const colorName = document.querySelector(".color");

button.addEventListener("click", function(){

    document.body.style.backgroundColor= colors[randomNumGenerator()];

    colorName.innerHTML= colors[Math.floor(Math.random()*colors.length)]

});

function randomNumGenerator() {

    return Math.floor(Math.random()*colors.length);
    
}