
//PART ONE
//Declare a global counter variable.
//Create a simple function that increments the variable, and then calls itself recursively.
//Surround the initial function call in a try/catch block.
//Within the catch, log the error and the value of the counter variable.

let counter = 0;

function incrementCount (){
    try{
        console.log(counter)
        counter++
        incrementCount()
    } catch(e){
        console.error(e)
        console.log(counter)
    }
    }
    incrementCount()