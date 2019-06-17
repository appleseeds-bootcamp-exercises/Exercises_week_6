class Drink {
  constructor(title, isHot) {
    this.title = title;
    this.isHot = isHot;
  }
}

class Coffee extends Drink {
  constructor(coffeeShots, isHot, withMilk) {
    super("Coffee", isHot);
    this.withMilk = withMilk;
    this.coffeeShots = coffeeShots;
  }
  printInstructions() {
    console.log(
      `to make an espresso add ${this.coffeeShots} coffee shots and do${
        this.withMilk ? "" : "n't"
      } add milk.${this.isHot ? " be careful it is hot" : ""}`
    );
  }
}
let coffee1 = new Coffee(2, true, false);
let coffee2 = new Coffee(1, false, true);
coffee1.printInstructions();
coffee2.printInstructions();
