var age:number=20;

if(age >= 20){
    console.log("Eligible")
}
else
{
    console.log("Not Eligible")
}

//Nested if else

var a:number = 10;
var b:number = 20;
var c:number = 30;

if(a>b && a>c)
{
    console.log("a is largest");
}
else if(b>a && b>c)
{
    console.log("b is largest");
}
else{
    console.log("c is largest");
}

//Ternary operator

var x:number= 40;
var y:number = 50;

//syn: expression?state1:state2;  exp-true or false

 x>y ? console.log("x is large") : console.log("y is large");

 //Nested IfElse

 var weekno: number=10;

 if(weekno==1)
 {
    console.log("sunday");
 }
 else if(weekno==2)
 {
    console.log("Monday");
 }
 else if(weekno==3)
 {
    console.log("Tuesday");
 }
 else if(weekno==4)
 {
    console.log("Wednsday");
 }
 else if(weekno==5)
 {
    console.log("Thursday");
 }
 else if(weekno==6)
 {
    console.log("Friday");
 }
 else if(weekno==7)
 {
    console.log("Saturday");
 }
 else{
    console.log("Invalid");
 }

 //Switch Case
var week: number = 2;

switch(week){
    case 1: console.log("Sun");
    break;
    case 2: console.log("Mon");
    break;
    case 3: console.log("Tuesday");
    break;
    case 4: console.log("Wed");
    break;
    case 5: console.log("Thu");
    break;
    case 6: console.log("Fri");
    break;
    case 7: console.log("Sat");
    break;
    default: console.log("Invalid");
}
