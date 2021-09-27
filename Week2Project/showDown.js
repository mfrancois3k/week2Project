function fight(){
    let monster = prompt("What is the name of the monster you are fighting");
    let hero = prompt("What is your heros name");
    let villianHealth = 50;
    let heroHealth = 50;
    let dice = 21;
    let endGame;
    
    

    while (heroHealth > 0 && villianHealth > 0){
        let damg = Math.floor(Math.random() * dice);

         
         if (damg === 1 || damg === 2){
             
            heroHealth = heroHealth - 5  

            alert(hero +" = "+ heroHealth +"        "+ monster +" = "+ villianHealth + "  " + monster + "   accidentally hit him/her self for 5 damage")

         }else if (damg > 2 && damg < 11){

            alert(hero +" = "+ heroHealth +"        "+ monster +" = "+ villianHealth + "  miss ")

         }else if (damg > 10 && damg < 19){

            villianHealth = villianHealth - 10;

            alert(hero +" = "+ heroHealth +"        "+ monster +" = "+ villianHealth + "  hit for do 10 damage")

         }else if (damg === 19 || damg === 20){

            villianHealth = villianHealth - 20

            alert(hero +" = "+ heroHealth +"        "+ monster +" = "+ villianHealth + " got a critical hit and did 20 damage")

         }
         if (heroHealth === 0 || villianHealth === 0){
         
          endGame = prompt("Would you like to play again Yes or No")

         }
         if (endGame === "yes" || endGame === "Yes"){

            return fight();

         }else if ( endGame === "no" || endGame === "No"){

            alert("Thank you for playing")

         }else {
            endGame
         }

         }
    
}



document.getElementById("play").outerHTML = fight();