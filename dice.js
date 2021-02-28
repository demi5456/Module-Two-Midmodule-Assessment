// const dice = ['&#9856 = ⚀', '&#9857 = ⚁', '&#9858 = ⚂', '&#9859 = ⚃', '&#9860 = ⚄', '&#9861 = ⚅']
let dice = [{ 1: '⚀', 2: '⚁', 3: '⚂', 4: '⚃', 5: '⚄', 6: '⚅' }]
let randomNum = dice[Math.floor(Math.random() * dice.length)]


let rollBtn = document.querySelector("#roll-btn")
let numInput = document.querySelector("#number")
let diceHolder = document.querySelector("#dice-para")
let sumHolder = document.querySelector("#sum-para")
let ul = document.querySelector("ul")

let display = ""
let display2 = ""
let click = 0
let sum1 = 0
let sum2 = 0



const diceRoll = () => {
    for (let i = 1; i <= numInput.value; i++) {
        let randDice = Math.floor(Math.random() * 6) + 1 //generate a new random # btwn 1 & 6 per iteration
        display += randomNum[randDice]
        sum1 += randDice
    }
    diceHolder.textContent = display //display dice as string
    sumHolder.textContent = `Sum = ${sum1}`
    sum2 = sum1
    display2 = display
}

const saveRoll = () => {
    console.log(click)
    if (click > 0) {
        sum1 = 0
        display = ""
        let list = document.createElement("li")
        list.textContent = `${display2} = ${sum2}`
        ul.appendChild(list)
    } else if (click === 1) {
        let list = document.createElement("li")
        sum2 = sum1
        list.textContent = `${display2} = ${sum2}`
        ul.appendChild(list)
    }
    click++
}




rollBtn.addEventListener("click", e => {
    e.preventDefault()
    diceRoll()
    numInput.value = ""
    // click++
    saveRoll()
})