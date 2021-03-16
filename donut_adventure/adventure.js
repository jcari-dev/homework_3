class Hero {
    constructor(name){
    this.name = name;
}
    health = 100;
    weapons = {
        sprinkleSpray: 5,
        sugarShock: 10
    }
    catchPhrases = ['i\'m fresher than day old pizza', 
    'you can\'t count my calories'];

    talkSass(){
        console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]);
    }

    announceHealth(){
        console.log(this.health);
    }

    fight(){
        console.log('i\'m ready to rumble');
    }
}
const dougie = new Hero ('Dougie');

class Enemy{
    constructor(name){
        this.name = name;
    }

    health = 100;
    weapons = {
        pepperoniStars: 5,
        cheeseGrease: 10 
    }

    catchPhrases = ['i\'m youtube famous',
    'i\'m more dangerous than an uncovered sewer'];

    talkSmack(){
        console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]);
    }

    announceHealth(){
        console.log(this.health);
    }

    fight(){
        console.log('i\'m gonna flatten you like a slice of pepperoni!');
    }
}

const pizza_rat = new Enemy ('Pizza_Rat');
