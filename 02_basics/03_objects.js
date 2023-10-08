// singleton
// object.create (Constructor method ke throw or isi ke ander singleton banta hai )


// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "rajat",
    "full name": "Rajat Kumar",
    [mySym]: "mykey1",
    age: 23,
    location: "jaipur",
    email: "rajat@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],


}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "Rajat@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "Rajatkumar@hdfc.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}
console.log(jsUser.greeting);

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo())




