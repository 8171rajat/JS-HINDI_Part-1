const user = {
    username : "Rajat",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);


// NOTE:- Brower ke andar jo global object hai usko Window Object kahte Hai.


// function chai (){
//     let username = "hitesh"
//     console.log(this.username);

// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);

// }

const chai = () => {
    let username = "hitesh"
    console.log(this);

}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2; // This is called Explicit Return

// }

// const addTwo = (num1, num2) =>  num1 + num2; //This is called Implicit Return 

// const addTwo = (num1, num2) =>  ( num1 + num2 ); 

const addTwo = (num1, num2) =>  ({username: "RajatKumar"}); 


console.log(addTwo(3, 4));


const myArray = [2, 5, 3, 7, 8]

// myArray.forEach();


