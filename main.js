// check out https://www.vandelaydesign.com/parallax-scrolling-best-practices-examples-and-tutorials/

console.log("...may the odds be ever in our favor.")


let mage = {
    name: 'Sage',
    hp: 200,
    powerLevel: 1,
    spells: {
        stealth: 5,
        attack: 5
    }  
}

let machine = {
    name: 'Knier\'s Machine',
    hp: 50,
    powerLevel: 1
}

let attack = (attacker,opponent) => {
    let success = false
    let diceRoll = Math.floor(Math.random() * 13);

    if (diceRoll>=6) {
        $('console').text(i, text){
            nextText = "Success!"
            opponent.hp -= (25 * attacker.powerLevel)
        }
    } else {
        $('console').text(i, text){
            nextText = "A miss!"
    }
}

let stealth = () => {
    let success = false
    let diceRoll = Math.floor(Math.random() * 13);

    if (diceRoll>=6) {
        $('console').text(i, text){
            nextText = "Success!"
            return nextText
        }
    } else {
        $('console').text(i, text){
            nextText = "A miss!"
            return nextText
        }
    }
}