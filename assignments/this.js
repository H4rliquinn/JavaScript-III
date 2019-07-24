/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window is the default environment. Shouldn't really be used.
* 2. Implicit binding uses the context where 'this' is called. Basically the object to the left of the dot.
* 3. New binding is the context of the object being created from a prototype.
* 4. Explicit is using functions to specifically set the context.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
let car={
    noise:"Vroom!",
    start:function(){
        console.log(this.noise);
    }
}
car.start();

// Principle 3
// code example for New Binding
function Shape(attributes){
    this.sides=attributes.sides,
    this.dimention=attributes.dimention,
    this.hasRightAngles=attributes.hasRightAngles
}

const circle=new Shape({
    sides:"round",
   dimention:"2D",
   hasRightAngles:false
})
console.log(circle);

// Principle 4
// code example for Explicit Binding
