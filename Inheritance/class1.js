class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class Cat extends Animal{
    constructor(name, isFriendly){
        super(name, "cat");
        this.isFriendly = isFriendly;
    }
    describe(){
        console.log(`I am ${this.name} and I am ${this.isFriendly?"": "not "}friendly`)
    }
}
let ca = new Cat("dave", true);
ca.describe();