var output = []
var number = 1

function fizzBuzz(){    
    if (number % 5 === 0 && number % 3 === 0){
        output.push("FizzBuzz")
        number++
    }else if (number % 3 === 0){
        output.push("Fizz")
        number++
    }else if (number % 5 === 0){
        output.push("Buzz")
        number++
    }else {
        output.push(number)
        number++
    }
    console.log(output)
    
}

fizzBuzz()