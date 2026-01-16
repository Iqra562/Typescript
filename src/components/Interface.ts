interface book{
    name:string;
    price:number;
    author?:false
}
const obj : book = {
name:"abc",
price:222
}

interface user {
readonly id: number;
name:string
}

const s:user = {id:1,name:"user1"}



// method/function interface  template
interface DiscountCalculator{
     (price:number) : number
}

const calculate : DiscountCalculator = (p)=> p*9


interface timer{
    start():void;
    stop():void;
}

const timerObj : timer  = {
         start(){
            console.log("start")
         },
         stop(){
            console.log("start")
         },
}


// index signature
// An index signature tells TypeScript:
// “This object can have any number of properties with keys of a certain type, and all those properties must have values of a certain type.”

// Why Use Index Signatures?
// They’re useful when:
// Object keys are dynamic (API responses)
// You don’t know property names in advance

interface ratings{
    [flavor:string]:number
}

const ratingObj :ratings = {
    77: 2,
    product2:3
}


// Declaration Merging is a TypeScript feature where multiple declarations with the same name are automatically merged into a single declaration.
// Why TypeScript Supports This
// Extending existing interfaces (especially from libraries)
// Adding properties without modifying original source code
interface User{
    username:string
}

interface User{
    age:number
}

const user:User = {
    username:'user',
    age:88888
}


// Interface extend 
interface A {a:string}
interface B {b:string}

interface C extends A,B {}