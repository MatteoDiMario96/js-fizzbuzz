const divElement = document.querySelector("div.container")

let limiteNumeri = 100;

for(let i = 1; i <= 100; i++){
    
    const multipliTre = (i % 3 == 0);
    const multipliCinque = (i % 5 == 0);
    let fizzBuzz = i
    let pElement = document.createElement("p");
    
    if(multipliTre && multipliCinque){
        pElement.classList.add("total-black", "text-center")
        console.log(fizzBuzz = "FizzBuzz")
    } else if(multipliCinque){
        pElement.classList.add("dark-blue", "text-center")
        console.log(fizzBuzz = "Buzz")
    } else if(multipliTre){
        pElement.classList.add("light-blue", "text-center")
        console.log(fizzBuzz = "Fizz")
    } else {
        pElement.classList.add("violet")
        console.log(i)
    }
    
    
    pElement.append(fizzBuzz);
    divElement.appendChild(pElement);
    
}