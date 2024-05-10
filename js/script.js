
let limiteNumeri = 100;

for(let i = 1; i <= 100; i++){
    
    const multipliTre = (i % 3 == 0);
    const multipliCinque = (i % 5 == 0);
    
    if(multipliTre && multipliCinque){
        let fizzBuzz = i
        console.log(fizzBuzz = "FizzBuzz")
    } else if(multipliCinque){
        console.log(fizzBuzz = "Buzz")
    } else if(multipliTre){
        console.log(fizzBuzz = "Fizz")
    } else {
        console.log(i)
    }
    
}