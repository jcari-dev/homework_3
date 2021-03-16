class Hamster {
  constructor (name){
    this.name = name;
  }
  owner = "";
  price = 15;

wheel(){
    console.log('squeak squeak');
}

eatFood(){
    console.log('nibble nibble');
}

getPrice(){
    return this.price; // vsc wont let me put just .price?
}

}

class Person {
  constructor(name){
    this.name = name;
  }
  age = 0;
  height = 0;
  weight = 0;
  mood = 0;
  hamsters = [];
  bankAccount = 0; //sad

  getName(){
    return this.name
  }

  getAge(){
    return age
  }

  getWeight(){
    return weight
  }

  greet(){
    console.log('hi ' + Person.name)
  }

  eat(){
    weight + 1,
    mood + 1
  }

  exercise(){
    weight - 1
  }

  ageUp(){
    age + 1,
    height + 1,
    weight + 1,
    mood -1,
    bankAccount + 10
  }

  buyHamster(hamster){
    hamster.push(Person.hamster),
    mood +10,
    backAccount -getPrice(Hamster)
  }

}