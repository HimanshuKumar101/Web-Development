console.log('KIya hal ha bhai ke')

let a = 6;

console.log(a); 

let names = ['himanshu','kuldeep','chitrang'];

console.log(names[0]);

console.log(5<10);


/*

Loose equality == only data should same

Strict Equality ===  data and value should same

*/ 

// ternary operator

// cond ? val 1 (if true) : val 2(if false)


let age = 22;

let status =(age >= 18) ? 'Vote ' : 'No vote'

console.log(status);


/* 
Bitwise operator

Bitwise AND

Bitwise OR 
*/

// operator precedence


//if elseif-else

let marks = 90;
if(marks >= 90){
    console.log('A');
}
else if(marks <= 90){
    console.log('B');
}


for(let i = 0; i < 5; i = i + 1){
    console.log(i);
}