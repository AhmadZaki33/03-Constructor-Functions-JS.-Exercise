/* eslint-disable no-unused-vars, no-throw-literal*/


function Pokemon (name, health, attackBonus) {
    this.name = name
    this.health = health
    this.attackBonus = attackBonus

}

Pokemon.prototype.biteAttack = function () {
    return this.attackBonus + 2
    
}

Pokemon.prototype.isDefeated = function () {
    if (this.health > 0) {
        return false;
    }

    return true;
    
}

// const pokemon1 = new Pokemon (name, health, attackBonus);
// const pokemon2 = new Pokemon (name, health, attackBonus);



function simulateBattle(pokemon1,pokemon2,firstPlayer) {
    let player1;
    let player2;

    if (pokemon1.name === firstPlayer) {
        player1 = pokemon1
        player2 = pokemon2
    } else {
        player1 = pokemon2 
        player2 = pokemon1
    }
    

    // Below is another solution with built in `arguments` (aka Array-like Objects):

    // function simulateBattle(/*pokemon1,pokemon2,firstPlayer*/) {
    
    // let player1;
    // let player2;

    // for (let i=0; i<arguments.length-1; i++) {

    //     if(arguments[i].name === arguments[arguments.length-1]) {
    //         /* if variables were initialized inside `if` block ...
    //          they must be initialized with `var` 
    //          NOT `let` when it is assigned to 'arguments' 
    //          because 'var' attach the variable in the 
    //          global scope so it can be accessed from outside
    //          the code block ({}) where it was initialized. */

    //         player1 = arguments[i]; 

    //     }else{
    //         player2 = arguments[i]; 
    //     }

    // }


    // let player1Points = 0;
    // let player2Points = 0;


    while(player1.health > 0 && player2.health > 0){

        player2.health -= player1.biteAttack();
        player1.health -= player2.biteAttack();


        /* with more details to explain: */

        // let attackPoinstPlayer1 = player1.biteAttack();
        // player1Points += attackPoinstPlayer1;
        // player2.health -= player1Points;


        // let attackPoinstPlayer2 = player2.biteAttack();
        // player2Points += attackPoinstPlayer2;
        // player1.health -= player2Points;

        

    }
    
    
    if(player1.isDefeated()){
        return `${player2.name} Wins!`;
    } else {
        return `${player1.name} Wins!`;
    } 



}





