//  F U N C T I O N   D E C L A R A T I O N 

// Okey my friend.. leets see our first function. Pay atention to the sintax, for first you have to 
// write the word function next to the name you want to the function continued by a parenthesis and then 
// a brackets. Inside of this brackets happens all the action. There you can write whatever you want 
// to execute. Here we write a simple console.log for the example.
function greet(){
    console.log("Hello world!")
}

// For execute the function you have to write the name of the function name continued by 
// the parenthesis, just this. Symple. Notice you don have to put the semicolon at the end of the 
// function but you hace to put it when you call it to execut it.

greet();

// F U N C T I O N   E X P R E S I O N 

// Now we'll see whats a function expresion. Anytime you get a variable and  set equal to a string,
//  number, boolean, whatever or a function in this case this is an expresion, so this is a function
// expresion. A the end of an expresion you have to put the semicolons.

const speak= function(){
    console.log('Hello world im a function expresion!');
};

// We invoke the function expresion in he same way as the function declaration. And of course like
// in the function delcaratiosn you can invoke anytimes you want.
speak();

// So.. what happens? they work exactly equal, just change the sintax. No it haves a important diference
// the function declaration are declared before our javascript. This happens with functions declrations
// not with function expresions. So you can invoke a function declaration before the function, and
//  it works.. let's see an example.

greek2();

function greek2(){
    console.log('Hello there, im after of the invocation!')
}

// This no happens with a function expresions.

speak2();

const speak2=function(){
    console.log("Hello there , you'll see an error at the console")
};

// So wich one you want to use? I think is better a  function expresion because on this way you'll have 
// more order on your code.