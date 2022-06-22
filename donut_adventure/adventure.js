//Creating Hero Class
class hero{
    constructor(name){
        this.name = name;
    }
    health = 100;
    weapons = {
        sprinkleSpray: 5,
        sugarShock: 10
    }
    catchPhrases = ['i\'m fresher than day old pizza', 'you can\'t count my calories']
    
    talkSass(){
        //Generate a random number beetwen 1 and 2
        let rndNum_hero = 0;
        rndNum_hero = Math.floor(Math.random() * 2);
        //prints the message from the array using the random number
        return this.name + ':' +' '+ this.catchPhrases[rndNum_hero];
    }
    announceHealth(){
        return this.name + ' ' + 'Health is: ' + this.health;
    }
    fight(enemy_character){
        console.log('Dougie the Donut: I\'m Ready to rumble');
       

        for (let i = 0; i < 1; i++) {
            let rndwp_hero_prompt = prompt('Choose your next move:\n 0- Sprinkle Spray\n 1- Sugar Shock\n 2- Run!');
            let parsed_rndwp_hero = parseInt(rndwp_hero_prompt);
            if(parsed_rndwp_hero === 0){
                //Dougie's turn
                console.log('Taste the power of my Sprinkle Spray!');
                console.log('-' + this.weapons.sprinkleSpray + 'HP');
                enemy_character.health -= this.weapons.sprinkleSpray;
                console.log(enemy_character.announceHealth());
                //Pizza Rat's turn
                let rnd_enemy_move = 0;
                rnd_enemy_move = Math.floor(Math.random() * 2);
                    if (rnd_enemy_move == 0) {
                        console.log('Pizza Rat: I\'m gonna slice you down!');
                        console.log('-' + enemy_character.weapons.pepperoniStars + 'HP');
                        this.health -= enemy_character.weapons.pepperoniStars;
                        console.log(this.announceHealth());
                    }
                    if (rnd_enemy_move == 1) {
                        console.log('Melt down with the power of my cheese!');
                        console.log('-' + enemy_character.weapons.cheeseGrease + 'HP');
                        this.health -= enemy_character.weapons.cheeseGrease;
                        console.log(this.announceHealth());
                    }

                if(enemy_character.health <= 0){
                    console.log('Pizza Rat Fainted');
                    i++
                }
                if (this.health <= 0) {
                    console.log('Dougie Fainted');
                    i++;
                } 
            }
            if(parsed_rndwp_hero === 1){
                //Dougie's turn
                console.log('Take this!');
                console.log('-' + this.weapons.sugarShock + 'HP');
                enemy_character.health -= this.weapons.sugarShock;
                console.log(enemy_character.announceHealth());
                //Pizza Rat's turn
                let rnd_enemy_move = 0;
                rnd_enemy_move = Math.floor(Math.random() * 2);
                    if (rnd_enemy_move == 0) {
                        console.log('Pizza Rat: I\'m gonna slice you down!');
                        console.log('-' + enemy_character.weapons.pepperoniStars + 'HP');
                        this.health -= enemy_character.weapons.pepperoniStars;
                        console.log(this.announceHealth());
                    }
                    if (rnd_enemy_move == 1) {
                        console.log('Melt down with the power of my cheese!');
                        console.log('-' + enemy_character.weapons.cheeseGrease + 'HP');
                        this.health -= enemy_character.weapons.cheeseGrease;
                        console.log(this.announceHealth());
                    }
                   
                if(enemy_character.health <= 0){
                    console.log('Pizza Rat Fainted');
                    i++;
                }
                if (this.health <= 0) {
                    console.log('Dougie Fainted');
                    i++;
                }
            }
            //Battle Ends, no one dies
            if(parsed_rndwp_hero === 2){
                console.log('Dougie left the battle!');
                i++;
            }
            i--;
            
        }


    }
}

//Creating Enemy Class
class enemy{
    constructor(name){
        this.name = name;
    }
    health = 100;
    weapons = {
        pepperoniStars: 5,
        cheeseGrease: 10
    }
    catchPhrases = ['i\'m youtube famous', 'i\'m more dangerous than an uncovered sewer']

    talkSmack(){
        //Generate a random number beetwen 0 and 1
        let rndNum_enemy_phrase = 0;
        rndNum_enemy_phrase = Math.floor(Math.random() * 2);
        //prints the message from the array using the random number
        return this.name + ':' +' '+ this.catchPhrases[rndNum_enemy_phrase];
    }
    announceHealth(){
        return this.name + ' ' + 'Health is: ' + this.health; 
    }
    fight(){
        //hero_character
        /*console.log('Pizza Rat: I\'m gonna cut you like a slice of pepperoni!');
       
            let rndwp_enemy = 0;
            rndwp_enemy = Math.floor(Math.random() * 2);
            if(rndwp_enemy === 0){
                console.log('I\m gonna slice you down!');
                console.log('-' + this.weapons.pepperoniStars + 'HP');
                hero_character.health -= this.weapons.pepperoniStars;
                console.log(hero_character.announceHealth());
                    if(hero_character.health <= 0){
                        console.log('Dougie Fainted');
                    }
            }
            if(rndwp_enemy === 1){
                console.log('Melt down with the power of my cheese!');
                console.log('-' + this.weapons.cheeseGrease + 'HP');
                hero_character.health -= this.weapons.cheeseGrease;
                console.log(hero_character.announceHealth());
                    if(hero_character.health <= 0){
                        console.log('Dougie Fainted');
                    }
            }
            */
    }
}
//Creating Dougie the Donut
const dougie = new hero('Dougie');

//Creating Pizza Rat
const pizzaRat = new enemy('Pizza Rat');

//Story starts!

console.log('Dougie is walking down Flat Iron -- but oh no! He runs into Pizza rat!');

//1. Have Dougie `talkSass` 
console.log(dougie.talkSass());
//1. Have Pizza Rat `talkSmack`
console.log(pizzaRat.talkSmack());
//1. Have Dougie `announceHealth`
console.log(dougie.announceHealth());
//1. Have Pizza Rat `announceHealth`
console.log(pizzaRat.announceHealth());

//Fight!
console.log('Things have escalated between Dougie and Pizza Rat!');

//1. Upgrade their fight methods so that it accesses one of their weapons and console log its hitpoints.
dougie.fight(pizzaRat);

