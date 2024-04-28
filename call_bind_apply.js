function person(name) {
    this.name = name
    console.log(this);
}
const temi = new person ('temi');
console.log(temi.name);

class personClass {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getDetails() {
        console.log(this);
    }
}

const temi2 = new personClass('temi', 20);
console.log(temi2.name)

function add() {
    // anytime we do not have a value in the function or object
    // the value will be global window variable
    // globalThis - node ||browser - window
    console.log(this);
}

// add.call({ name: 'temi' });
add.call({ name: 'temi'}, 1, 2 );

let lolly = {
    a: 1,
    b: 2,
    add() {
        console.log(this.a + this.b);
        return this.a + this.b;
    }
}
lolly.add();

const fire = {
    ...lolly,
    a: 10,
    b: 20,
}
fire.add();

lolly.add();


console.log(water)
water.add.call({ a: 99, b: 1});
water.add.apply({ a: 99, b: 1});
fire.add();

lolly.add();

const module2 = {
    x: 42,
    getX: function () {
        return this.x;
    }
};
const unboundGetX = module2.getX;
console.log(unboundGetX()) //the function get invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module2);
console.log(boundGetX())

NodeList.prototype.on = NodeList.prototype.addEventListener = function (event, callback) {
    this.forEach(function(elem, i) {
        elem.on(name, fn); 

    });
}