import { v4 as uuidv4 } from "uuid";
// let uuid= uuidv4();

interface Item{
    id:string
    name:string
    price:number
    description:string
}

interface User{
    id:string
    name:string
    age:number
    cart:Item[]
}

function createUser(name:string, age:number){
    let newUser:User={
        id:uuidv4(),
        name:name,
        age:age,
        cart:[]
    }
    return newUser
}

function createItem(name:string, price:number, description:string){
    let newItem:Item={
        id:uuidv4(),
        name:name,
        price:price,
        description:description,
    }
    return newItem
}

function addToCart(user:User, item:Item){
    user.cart.push(item)
    user.cart.sort()
}

function removeFromCart(user:User, item:Item){
    for(let i of user.cart){
        if (i==item){
            user.cart.splice(user.cart.indexOf(item), 1)
        }
    }
    user.cart.sort()
}

function removeQuantityFromCart(user:User, item:Item, quantity:number){
    for(let i of user.cart){
        if (i==item){
            user.cart.splice(user.cart.indexOf(item), quantity)
            user.cart.sort()
            break
        }
    }
}

function cartTotal(user:User):number{
    let total=0;
    for (let i of user.cart){
        total+=i.price
    }
    return total
}

function printCart(user:User){
    for (let item of user.cart){
        console.log(`${item.name}: $${item.price}`)
    }
    console.log(`Total: ${cartTotal(user)}`)
}

function driver(){
    let zach:User;
    zach=createUser('Zach', 32);
    let itemA:Item;
    itemA=createItem('Cable', 15.99, '');
    let itemB:Item;
    itemB=createItem('Game', 69.99, "A video game you don't need");
    let itemC:Item;
    itemC=createItem('Charger', 5.99, 'A charger for a cell phone');
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

driver()