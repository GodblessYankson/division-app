let num1 = Math.ceil(Math.random() * 100)
console.log(num1)
let num2 = Math.ceil(Math.random() * 10)
console.log(num2)

let formEl = document.getElementById("form")
let inputEl = document.getElementById("input")
let questionEl = document.getElementById("question")

let score = JSON.parse(localStorage.getItem("score"))
let scoreEl = document.getElementById("score")
scoreEl.innerText = `score: ${score}`

questionEl.innerText = `What is ${num1} / ${num2} to the nearest integer`
let correctAns = Math.round(num1 / num2)
console.log(correctAns)
 formEl.addEventListener("submit", () => {
    let userAns = +inputEl.value;
    if(userAns === correctAns){
        score++
        scoreUpdate()
    }else{
        score--
        scoreUpdate()
    }
 })
 function scoreUpdate() {
    localStorage.setItem("score", JSON.stringify(score))
 }
