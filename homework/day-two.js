// 1. Write a function that adds two numbers together
// 2. Create a function that returns the number of true values there are in an array.
// const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]
// 3. Write a function that receives a car object as an argument and outputs the cars make and model.
// 4. Write a function to get the first element in an array.

///////////////////ONE//////////////////////////////
function sum(num1,num2){
    return (num1 + num2)
} console.log(sum(5,7));

///////////////////TWO////////////////////////////////
const testArray = [ true, false, false, true, false, false, false, true, true, true, false,  ]

function getTrues(arr){
     res = arr.filter(n => n===true).length
    return res;
}


let numberOfTrues = getTrues(testArray);

console.log(numberOfTrues)

///////OR (W FOR LOOP)
let counter1 = 0;
for (let i = 0; i<testArray.length; i++){
    

    //if(arr[i])
    if (testArray[i] === true){
        counter1++;
        
    } 
} console.log(counter1)



///////////////////THREE////////////////////////////////
const myCars = {
    make: "toyota",
    model: "tacoma"
}

function whatCar(car){
    console.log(car.make, car.model)
} 

whatCar(myCars);

///////////////////FOUR///////////////////////////////
const birds = ["crow", "dove", "pigeon"]

function getFirst(arr){
    return arr[0];
}

console.log(getFirst(birds));