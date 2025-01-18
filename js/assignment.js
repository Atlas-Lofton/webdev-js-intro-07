"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

function returnRemainder() {
    let x = 5 % 4;
    remainderElement.innerText = x;
}

function checkIfEven() {
    let answer;
    if (47 % 2 == 0) {
        answer = true;
    }
    else {answer = false;}
    checkIfEvenElement.innerText = answer;
} 


function getTheFourthElement() {
    let fourth = lostNumbers[3];
    lostNumbersElement.innerText = fourth;
}














function render() {
  returnRemainder();  
   checkIfEven(); 
   getTheFourthElement();
}

submissionBtn.addEventListener("click", function () {
    render();
});


