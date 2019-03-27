//task #1
let sumMultiples3or5 = function(untilNumber){
    let sum = 0;
    for(let i = 3; i < untilNumber; i+=3){
        sum+=i;
    }
    for(let i = 5; i < untilNumber; i+=5){
        if(!(i%3 == 0)) sum+=i;
    }
    return sum;
}

console.log("Sum of all the multiples of 3 or 5 below 1000 = " + sumMultiples3or5(1000))

//task #2
let createFiboSequence = function(firstNumber, secondNumber, steps){
    let sequence = [firstNumber, secondNumber];

    for(let i = 1; i <= steps - 1; i++){
        let currentFiboNumber = firstNumber + secondNumber;
        sequence.push(currentFiboNumber);
        firstNumber = secondNumber;
        secondNumber = currentFiboNumber;
    }
    return sequence;
}

console.log("Fibonacci sequence if a = 1, b = 2 and we make 4 steps = " + createFiboSequence(1,2,4).toString());

//task #3
let rotLeft = function(array, leftRotationNumber){
    console.log("Array = " + array);
    for(let i = 0; i < leftRotationNumber; i++){
        array.push(array[0]);
        array.shift();
    }
    console.log(`Array after ${leftRotationNumber} rotations = ${array}`);
}

rotLeft([1,2,3,4,5], 501);

let executeIntegerRotLeft = function(){

    let firstRow = prompt("Type space-separated lenght of array and the number of left rotations:").split(" ");
    let length, rotationNumber;
    if(+firstRow[0] && +firstRow[1]){
        length = +firstRow[0];
        rotationNumber = +firstRow[1];
    } else {
        alert("At least one of the arguments isn't number. Try one more time.");
        executeRotLeftFromConsole();
    }
    
    console.log(length + rotationNumber)
    if(1 > length || length > 100000){
        console.log("Length can be from 1 to 100000, try one more time.")
        executeRotLeftFromConsole();
    }
    if(1 > rotationNumber || rotationNumber > length){
        console.log("Number of left rotations can be from 1 to length of array, your number isn't in that range, try one more time")
        executeRotLeftFromConsole();
    }

    //without all validation
    let secondRow = prompt(`Type ${length} elements of array:`).split(" ");
    let elementsOfArray = [];
    for (var i = 0; i < secondRow.length; i++) {
        elementsOfArray.push(+secondRow[i]);
    }
    rotLeft(elementsOfArray, rotationNumber);

}

