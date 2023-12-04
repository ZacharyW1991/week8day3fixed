"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function createUser(name, age) {
    let newUser = {
        id: (0, uuid_1.v4)(),
        name: name,
        age: age,
        cart: []
    };
    return newUser;
}
function createItem(name, price, description) {
    let newItem = {
        id: (0, uuid_1.v4)(),
        name: name,
        price: price,
        description: description,
    };
    return newItem;
}
function addToCart(user, item) {
    user.cart.push(item);
    user.cart.sort();
}
function removeFromCart(user, item) {
    for (let i of user.cart) {
        if (i == item) {
            user.cart.splice(user.cart.indexOf(i), 1);
        }
    }
    user.cart.sort();
}
function removeQuantityFromCart(user, item, quantity) {
    for (let i of user.cart) {
        if (i == item) {
            user.cart.splice(user.cart.indexOf(i), quantity);
            user.cart.sort();
            break;
        }
    }
}
function cartTotal(user) {
    let total = 0;
    for (let i of user.cart) {
        total += i.price;
    }
    return total;
}
function printCart(user) {
    for (let item of user.cart) {
        console.log(`${item.name}: $${item.price}`);
    }
    console.log(`Total: ${cartTotal(user)}`);
}
function driver() {
    let zach;
    zach = createUser('Zach', 32);
    let itemA;
    itemA = createItem('Cable', 15.99, '');
    let itemB;
    itemB = createItem('Game', 69.99, "A video game you don't need");
    let itemC;
    itemC = createItem('Charger', 5.99, 'A charger for a cell phone');
    addToCart(zach, itemA);
    printCart(zach);
    cartTotal(zach);
    addToCart(zach, itemB);
    addToCart(zach, itemB);
    addToCart(zach, itemB);
    printCart(zach);
    cartTotal(zach);
    addToCart(zach, itemC);
    addToCart(zach, itemC);
    addToCart(zach, itemC);
    removeFromCart(zach, itemB);
    printCart(zach);
    cartTotal(zach);
    removeQuantityFromCart(zach, itemC, 2);
    printCart(zach);
    cartTotal(zach);
}
driver();
