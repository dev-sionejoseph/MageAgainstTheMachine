// check out https://www.vandelaydesign.com/parallax-scrolling-best-practices-examples-and-tutorials/

console.log("...may the odds be ever in our favor.")

///starting game at "level 0" so that the tutorial page's machine object has a power level of zero.
let gameLevel = 1

let mage = {
    name: 'Sage',
    hp: 200,
    powerLevel: 1,
    spells: {
        shift: 10,
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
    enemies : [$('#machine1'),$('#machine2'),
               $('#machine3'),$('#machine4'),
               $('#machine5'),$('#machine6')]
}

//modular functions, for spells and leveling up, etc.

let isDefeated = (success) =>{
    if (success == true) {
        
        let currentEnemy = machine.enemies[0]
        currentEnemy.css('display', 'none');
        machine.enemies.splice(0,1);
        levelUP();
        console.log('The machine has '+ machine.hp +' health points remaining')
        
        machine.hp = 50 * gameLevel;
        
    } 
}

let levelUP = () => {
    if (machine.enemies.length == 5) {
        $('#portal1').css('display','flex');
        gameLevel++
    } else if (machine.enemies.length == 3) {
        $('#portal2').css('display','flex');
        gameLevel++
    } else if (machine.enemies.length == 0) {
        $('#portal3').css('display','flex');
        gameLevel++
    }

    console.log('levelUP ran')
}

let attack = (attacker,opponent) => {
    let success = false
    let diceRoll = Math.floor(Math.random() * 13);

    if (diceRoll>=1) {
        $('#spellStatus').text("Success!");
        opponent.hp -= (50 * attacker.powerLevel)
        if (machine.hp <= 0) {
            success = true
            isDefeated(success);
        }
    
    } else {
        $('#spellStatus').text("A miss!");
    }


    
    // console.log(machine.enemies)
    // levelUP();
}

const shift = () => {

    let success = false
    let diceRoll = Math.floor(Math.random() * 13);

    if (diceRoll>=1) {
        $('#spellStatus').text("Success!"); //pushes a message that says "success!" to screen
        success = true;
        mage.powerLevel++;
        
    } else {
        $('#spellStatus').text("A miss!");
    }
    
    console.log(success);
    isDefeated(success);

}





// event listeners and click functions

$("#shiftButton").click(function(){
    if (mage.spells['shift'] > 0){
        mage.spells['shift']--
        $('#shiftSpells').text('Shift Spells Left: ' + mage.spells['shift'])
        shift();
    }
});

$("#attackButton").click(function(){
    if (mage.spells['attack'] > 0){

        mage.spells['attack']--
        $('#attackSpells').text('Attack Spells Left: ' + mage.spells['attack'])
        
        if (mage.hp > 0 && machine.hp > 0){
            attack(mage,machine);
           
        }
        if (machine.hp > 0){
            attack(machine,mage)
            $('#HP').text('Health: ' + mage.hp)
        }

    }
});

$("#portalButton").click(function(){
    if (mage.spells['attack'] > 0){
        mage.spells['attack']--
        $('#attackSpells').text('Attack Spells Left: ' + mage.spells['attack'])
        attack();
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
        console.log('keydown firing')
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


