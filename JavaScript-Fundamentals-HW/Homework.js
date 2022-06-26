// Variables
// Calculate area of a rectangle

let length = 10;
let width = 5;
let area= length * width;
console.log('The area of rectangle: ', area );

// The Temperature Converter

let celsius = 200;
let toFahrenheit = celsius *(9/5)+32;
console.log(`${celsius}°C is ${toFahrenheit}°F`);

let fahrenheit = 356;
let toCelsius = (fahrenheit - 32)*(5/9);
console.log(`${fahrenheit}°F is ${toCelsius}°C`);

/* --- */

// For loop

// Numbers' summations
let Numbers = [23,54,32,87,47];
let sum=0;
for (let i=0; i<Numbers.length; i++){
    sum+=Numbers[i];
}
console.log(sum);

//Maximum number
let numArr = [16,4,2,0,19,6];
let max=numArr[0];
for (let i=0; i<numArr.length; i++){
    if(max<numArr[i]){
        max=numArr[i];
    }
}
console.log(max);

//Reverse Array
 let arr=[1,2,3,4,5,6,7,8,9,10];
 let revArr=[];
for (i=arr.length -1; i>=0; i--){
    revArr.push(arr[i]);
}
console.log(revArr);

//Nested for loop
//stars pattern
let rows=5;
let line="";
for(i=0; i<rows;i++){
    for(j=0; j<=i; j++){
        line=line+'* ';
    }
    line=line+'\n';
}
console.log(line);