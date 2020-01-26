/*
Compiling Typescript code
tsc filename.ts

*/
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
var a;
a = 5;
a = 'pradeep'; //error in typescript but rectificed in JS
var b = [1, 2, 3];
var c = [1, true, 'a', false];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
// enum Color {Red = 0 , Green = 1 , Blue = 2}; implicitly assigns then values
var backgroundcolor = Color.Red;
var message = 'abc';
var endsWithC = message.endsWith('c');
//Assigning variable type
var endsWith = message.endsWith('c');
//Another way for assigning type  
var alterway = message.endsWith('c');
//Arrow function
var log = function (message) {
    console.log(message);
};
//For Multiline
var arrow = function (message) {
    console.log(message);
};
//For single line
var doLog = function (message) { return console.log(message); };
//Also use
var dolog = function () { return console.log(message); };
//Inline annotations
var drawPoint = function (point) {
    // ...
};
drawPoint({
    x: 1,
    y: 2
});
var draw = function (point) {
    //..
};
//Interface voilates OOPS Cohesion Principle
var getDistance = function (pointA, pointB) {
    // ...
};
var Points = /** @class */ (function () {
    function Points() {
    }
    Points.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Points;
}());
var points = new Points(); //Name
points.x = 1;
points.y = 2;
points.draw();
