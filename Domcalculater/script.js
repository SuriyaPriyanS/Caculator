// const display = document.querySelector("display");
// const buttons = document.querySelectorAll("button");
// var title = document.getElementById('title');


// console.log(display ,buttons,title);


// const m3 = document.getElementById("equal").addEventListener('click');

// var num1 = parseInt(document.getElementById(1).innerText);
// var num2 = parseInt(document.getElementById(2).innerText);

// console.log(num1,num2);


const display = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");
const title = document.getElementById('title');

console.log(display, buttons, title);

const equalButton = document.getElementById("equal");

equalButton.addEventListener('click', function() {
    const num1 = parseInt(document.getElementById("1").innerText);
    const num2 = parseInt(document.getElementById("2").innerText);
    
    const result = num1 + num2;
    
    display.value = result;
    console.log(result);
});




// document.getElementById('equal').addEventListener('click', function() {
//     // Get the values from the buttons
//     var num1 = parseInt(document.getElementById('1').innerText);
//     var num2 = parseInt(document.getElementById('2').innerText);
    
//     // Perform addition
//     var result = num1 + num2;
    
//     // Display the result
//    const m1 = document.getElementById('result').innerText = "Result: " + result);