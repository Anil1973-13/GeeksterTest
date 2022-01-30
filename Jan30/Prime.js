var num = prompt("Enter any number");

num = parseInt(num);
var num1 = 2;

if(isNaN(num)){
console.log("Enter a valid number");
}
else{
console.log("The Prime Numbers between 1 and" + " "+ num);
while (num1 < num)
{
var flag = 0;
for(var i = 2; i <= num1/2; ++i)
{
if(num1 % i == 0)
{
flag = 1;
break;
}
}
if (flag == 0)
console.log(num1);
++num1;
}
}