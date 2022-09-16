//Named function
function display(){
    console.log("welcome");
}

display();

//Named function include parameters type and return type

function Sum(a:number, b:number)
{
    return a+b;
}

var res = Sum(2,3);
console.log(res);

//Anonymous function

var greet = function()
{
    console.log("welcome123");
}

greet();

//Anonymous function with parameter and return 

var sum = function(x:number, y:number):number
{
   return x+y;
}

console.log(sum(3,4));