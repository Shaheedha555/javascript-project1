const colors=[1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];

const button = document.getElementById("btn");

const colorName = document.querySelector(".color");

button.addEventListener("click", function(){

    let color = "#";

    for(let i=0; i<6; i++){

        let randomNum = colors[randomNumGenerator()];

       color+=randomNum;

    }

    document.body.style.backgroundColor = color;

    colorName.innerHTML = color;

});

function randomNumGenerator () {

return Math.floor(Math.random()*colors.length);

}