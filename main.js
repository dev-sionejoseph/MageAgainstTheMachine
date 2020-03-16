// check out https://www.vandelaydesign.com/parallax-scrolling-best-practices-examples-and-tutorials/

console.log("...may the odds be ever in our favor.")

///starting game at "level 0" so that the tutorial page's machine object has a power level of zero.
let gameLevel = 0

let mage = {
    name: 'Sage',
    hp: 200,
    powerLevel: 1,
    spells: {
        shift: 5,
        attack: 10
    }  
}

// Variables that populate the stats bar.

$('#HP').text('Health: '+ mage.hp) 
$('#powerLevel').text('Power Level: ' + mage.powerLevel) 
$('#attackSpells').text('Attack Spells Left: ' + mage.spells['attack']) 
$('#shiftSpells').text('Shift Spells Left: ' + mage.spells['shift']) 


let machine = {
    name: 'Knier\'s Machine',
    hp: 50*gameLevel,
    powerLevel: 1,
    enemies : [$('#machine0'),$('#machine1'),
               $('#machine2'),$('#machine3'),
               $('#machine4'),$('#machine5'),$('#machine6')]
}

//modular functions, for spells and leveling up, etc.

let isDefeated = (success) =>{
    if (success == true) {
        let currentEnemy = machine.enemies[0]
        currentEnemy.css('display', 'none')
        machine.enemies
    } 
}

// let spellStatus = (status) => {
//     let message = "<p class='spellStatus'>" + status + "</p>";
//     $(message).appendTo('#player')
// }

let attack = (attacker,opponent) => {
    let success = false
    let diceRoll = Math.floor(Math.random() * 13);

    if (diceRoll>=5) {
        $('#spellStatus').text("Success!");
    } else {
        $('#spellStatus').text("A miss!");
    }
}

const shift = () => {

    let success = false
    let diceRoll = Math.floor(Math.random() * 13);

    if (diceRoll>=7) {
        $('#spellStatus').text("Success!"); //pushes a message that says "success!" to screen
        success = true;
        
    } else {
        $('#spellStatus').text("A miss!");
    }
    
    console.log(success);
    isDefeated(success);

}

let levelUP = () => {
    gameLevel++
    machine.hp= 50*gameLevel
}





// event listeners and click functions

$("#shiftButton").click(function(){
    if (mage.spells['shift'] > 0){
        mage.spells['shift']--
        $('#shiftSpells').text('Shift Spells Left: ' + mage.spells['shift'])
        shift();
    }
    
    
    

});

$(document).keydown(function(e){
    let $player = $('#player')
    
    // if($player.css('left') > '0px' && $player.css('left') !== ($( window ).width()-500)+'px'){
    //     console.log($(window).width()-500)
    //     if(e.which == "37"){
    //         $player.animate({left: "-=50"}, 0);
    //     } 
    //     else if(e.which == "39") {
    //         $player.animate({left: "+=50"}, 0);
    //     }
    // }
    if(($player.css('left') > '0px') && ($player.css('left') !== ((3000-750) +'px'))){
        console.log('yep')
        switch (e.which){
            case 37:    //left arrow key
                $player.finish().animate({
                    left: "-=60",
                });
                break;
            
            case 39:    //right arrow key
                $player.finish().animate({
                    left: "+=60",
            });
            break;
            }
    }
   
});


