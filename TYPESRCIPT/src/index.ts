let age :number=20; //we specify the type of the variable
if(age>50)
age+=10;

let sales=23456; //automatically detect type of datatype

let infinity; //these referse to any datatype type can be taken 

//arrays
let numbers:number[]=[];

numbers.forEach(n=>n.toExponential)

//tuples

let user :[number,string]=[1,"vivek"]; //more than 2 types made it difficult to grasp

//enum
// simlar to creating objects with more of data 

enum Size {Small="s",medium="m",large="l"};

let mysize: Size =Size.medium;
console.log(mysize);

//narrowing advanced ts
// it checks through and multiple datatypes are valid throughly


// instresection types 

type Draggable={
    drag: ()=> void
};

type Resizeable={
    resize: ()=> void 
}

type UIWidget=Draggable & Resizeable;

//literals 

let quantity:50 | 100=100;

//nullable types
function greet(name:string | null | undefined){
    if(name)
    console.log(name.toUpperCase);
    else
    console.log("hola ra bro");
}

//chaining  is the place were we use conditionals and perform else it show undefined

//we can optional call operatorsm
