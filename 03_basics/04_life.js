//  Immediately Invoked Function Expressions (IIFE)
    // Jo function Immediatly Execute ho jaye Lakin..... Global Scope ke Polluction ko hatane ke liye Humne IIFE ka Use kiya hai .  

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  

(  (name) => {
    // unnamed IIFE
     console.log(`DB CONNECTED TWO ${name}`);
} )('Rajat')


