import { Point } from './point';

let point = new Point(1, 2);
point.draw();

/*
Compiling Typescript code
tsc filename.ts
*/
/*
// function call(message){
//     console.log(message);
// }
// var message ='Hello Everyone';
// call(message);


// function doSomething(){
//     for(let i=0; i<5; i++){
//         console.log(i);
//     }
//     console.log('Finally: '+i);
// }
// doSomething();

let a: number;
a = 5;
a = 'pradeep';//error in typescript but rectificed in JS

let b: number[] = [1, 2, 3];
let c: any[] = [1, true, 'a', false];

enum Color {Red , Green, Blue};
// enum Color {Red = 0 , Green = 1 , Blue = 2}; implicitly assigns then values
let backgroundcolor = Color.Red;

let message = 'abc';
let endsWithC = message.endsWith('c');
//Assigning variable type
let endsWith = (<string>message).endsWith('c');
//Another way for assigning type  
let alterway = (message as string).endsWith('c');

//Arrow function
let log = function(message){
    console.log(message);
}
//For Multiline
let arrow = (message) =>{
    console.log(message);
}
//For single line
let doLog = (message) => console.log(message);
//Also use
let dolog =  () =>console.log(message);

//Inline annotations
let drawPoint = (point:{x: number, y: number}) =>{
    // ...
}
drawPoint({
    x: 1,
    y: 2
});

//Interface concept in Typescript
interface Point {
    x: number;
    y: number;
}
let draw = (point: Point) =>{
    //..
}

//Interface voilates OOPS Cohesion Principle
let getDistance =(pointA: Point, pointB: Point) => {
    // ...
}

class Points{//ClassName
    x: number;
    y: number;

    draw(){
        console.log('X: '+this.x+', Y: '+this.y);
    }
}
let points = new Points();//Name
points.x = 1;
points.y = 2;
points.draw();
*/

