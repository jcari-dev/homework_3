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

