function getCandy(candyStore, id) {
  let candies = candyStore.candies;
  for (let index = 0; index < candies.length; index++) {
    if (candies[index].id === id) {
      return candies[index];
    }
  }
  return undefined;
}
function getPrice(candyStore, id) {
  let candies = candyStore.candies;
  for (let index = 0; index < candies.length; index++) {
    if (candies[index].id === id) {
      return candies[index].price;
    }
  }
  return undefined;
}
function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({
    name: name,
    id: id,
    price: price,
    amount: 1
  });
}
function buy(candyStore, id) {
  let boughtcandy = getCandy(candyStore, id);
  if (boughtcandy.amount > 0) {
    boughtcandy.amount--;
    candyStore.cashRegister += boughtcandy.price;
  }
}

var candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4
    }
  ],
  cashRegister: 200
};

let expect = require("chai").expect;
let assert = require("chai").assert;

describe("getCandy function test", function() {
  it("should check if a candy price is being retrieved", function() {
    expect(getCandy(candyStore, "as12f")).to.have.property("name");
  });
  it("should check if a candy price is being retrieved", function() {
    expect(getCandy(candyStore, "5hd7y")).to.have.property("price");
  });
  it("should check if an object is being retrieved", function() {
    assert.typeOf(getCandy(candyStore, "as12f"), "object");
  });
});

describe("getPrice function test", function() {
  it("should check if a candy is being retrieved", function() {
    expect(getPrice(candyStore, "as12f")).to.equal(2);
  });
  it("should check if a candy is being retrieved", function() {
    expect(getPrice(candyStore, "5hd7y")).to.be.a("number");
  });
});

describe("addCandy function test", function() {
  addCandy(candyStore, "dbajhk2", "choclate bar", 5);

  it("should check if a candy is being retrieved", function() {
    expect(getCandy(candyStore, "dbajhk2")).to.have.property("name");
  });
  it("should check if a candy is being retrieved", function() {
    expect(getPrice(candyStore, "dbajhk2")).to.be.a("number");
  });
});

describe("buy function test", function() {
  buy(candyStore, "dbajhk2");
  it("should check if the amount is being updated", function() {
    expect(getCandy(candyStore, "dbajhk2").amount).to.equal(0);
  });
  it("should check if the registry is being updated", function() {
    expect(candyStore.cashRegister).to.equal(205);
  });
});
