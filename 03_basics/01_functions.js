
function sayMyName(){
console.log("R");
console.log("A");
console.log("J");
console.log("A");
console.log("T");

}

// sayMyName()

// function addTwoNumbers(number1, number2){ // this is called parameters  // jab hum function ki defination banate hai toh uske andar hum input lete hai toh usko hum Parameter bolte hai , 
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){ // this is called parameters  // jab hum function ki defination banate hai toh uske andar hum input lete hai toh usko hum Parameter bolte hai , 

    // let result = number1 + number2
    //  return result
    return number1 + number2
    
}

const result = addTwoNumbers( 3, 5) // this is called Arguments  //jab hum function ko call karbate hai to jo value uske ander pass karbate hai to tab usko bolte hai Arguments ,  

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if (!username ) {
        console.log("Please enter a UserName")
        return 
    }
    return `${username} just logged in`

}
// console.log(loginUserMessage("rajatKumar"))
// console.log(loginUserMessage("RajatKumar"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "rajat kumar",
    prices: 199
}

function handleObject(anyobject){ //object ko function mai pass karna  
        console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
     return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
