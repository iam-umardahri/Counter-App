let counterPlaceHolder = document.getElementById("counter-placeholder");
let btnIncrement = document.getElementById("increase-btn");
let btnDecrement = document.getElementById("decrease-btn");
let btnReset = document.getElementById("reset-btn");

let number = 0;

function changeColor(number){
    let color = "";
    if(number < 0 ){
        color = "#a50000";
    }else if (number > 0 ){
        color = "black";
    }else{
        color="black";
    }
    return color;
}

btnIncrement.addEventListener("click", () => {
    number++;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);
});

btnDecrement.addEventListener("click", () => {
    number--;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);
});

btnReset.addEventListener("click", () => {
    number = 0;
    counterPlaceHolder.innerHTML = 0;
    counterPlaceHolder.style.color = changeColor(number);
});