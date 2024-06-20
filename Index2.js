console.log('Lets start')

// object create

// const rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function(){
//         console.log('draw');
//     }

// };


// //object creation How ?

// //factory function


// function createRectangle(len,bre) {
   
//     return rectangle = {
//         length: len,
//         breadth: bre,


//         draw () {
//             console.log('drawing rectangle');
//         }
//     };
// } 

// let rectangleObj1 = createRectangle(5, 4);

// let rectangle2 = createRectangle(6, 7);

//Camelcase -> numberOfStudents

//constructor function -> Pascal Notation -> first letter of every word is capital -> NumberOfStudent


// Define the Rectangle constructor function
function Rectangle(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.draw = function() {
        console.log('drawing');
    }
}

// Object creation using the constructor function
let rectangleObject = new Rectangle(6, 7); 

// Accessing the created object
console.log(rectangleObject);
