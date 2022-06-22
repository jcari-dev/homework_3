//Constructor for hamster object
function hamsters(owner, name){
    this.owner =  owner;
    this.name = name;
    this.price = 15;
    this.wheelrun = function(){
        return 'squeak squeak';
    };
    this.eatfood = function(){
        return 'nibble nibble';
    };
    this.getPrice = function(){
        return this.price
    }
}

//Constructor for person object
function person(name, age, height, weight, mood, bankAccount){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.mood = mood;
    this.hamsters = [];
    this.bankAccount = bankAccount;
    this.getName = function(){
        return 'Name: ' + this.name;
    };
    this.getAge = function(){
        return 'Age: ' + this.age;
    };
    this.getWeight = function(){
        return 'Actual Weight: ' + this.weight + 'Kg';
    };
    this.greet = function(){
        return 'Hello, my name is ' + this.name;
    };
    this.eat = function(){
        this.weight += 5;
        this.mood += 10;

        return 'Nom nom \n' + 'Weight increased by 5Kg' + ' ' + 'Mood increased by 10 \n';
    };
    this.excercise = function(){
        this.weight -= 3;
        return 'Weight decreased by 3Kg! Good Job! \n'
    };
    this.ageUp = function(){
        this.age += 1;
        this.height += 10;
        this.weight += 15;
        this.mood -= 5;
        this.bankAccount += 10
        return 'Age increased by 1! \n' + 'Height increased by 10cm!\n' + 'Weight increased by 15Kg!\n' + 'Mood decreased by 5!\n' + 'Bank Account increased 10$!\n'
    };
    this.buyHamster = function(hamster){
        if(this.bankAccount >= 15){
                this.bankAccount -= hamsters.getPrice;
                this.hamsters.push(hamster);
                this.mood += 10;
            }
        else{
                return 'Oh No! You can\'t buy this hamster! You need more money!'
        }

    }
}
//1. Instantiate a new Person named Timmy
const user1 = new person('Timmy', 0, 0, 0, 0, 0);
console.log(user1.greet() + '\n');

//1. Age Timmy five years
for (let i = 0; i < 5; i++) {
    console.log(user1.ageUp());
}

//1. At this point Timmy's a little bummed.  As a precocious child, he feels he's "seen it all" already.  Have him eat five times.
for (let i = 0; i < 5; i++) {
    console.log(user1.eat());
}

//1. Now Timmy's a little heavier than he wants to be.  Kindergarten's coming up and he wants to look good.  Have him exercise five times
for (let i = 0; i < 5; i++) {
    console.log(user1.excercise());
}

//1. Age Timmy 9 years
for (let i = 0; i < 9; i++) {
    console.log(user1.ageUp());
}

//1. Create a hamster named "Gus"
const hamster1 = new hamsters('','Gus');

//1. Set Gus's owner to the string "Timmy"
hamster1.owner = user1.name;

//1. Have Timmy "buy" Gus
user1.buyHamster(hamster1.name);

//1. Age Timmy 15 years
for (let i = 0; i < 15; i++) {
    console.log(user1.ageUp());
}

//1. Have Timmy eat twice
for (let i = 0; i < 2; i++) {
    console.log(user1.eat());
    
}
//1. Have Timmy exercise twice
for (let i = 0; i < 2; i++) {
    console.log(user1.excercise());
}

