var  num = prompt("Enter any number");

num = parseInt(num);

var f1=0, f2=1, f3;
var next=1;
if(isNaN(num)){

console.log("Please enter a valid number");

}

else{
for(var i = 2; i < num; i++){

f3 = f1 + f2;
f1 = f2;
f2=f3;

}

}

console.log(num+"th fibonacci number is" + " " +f3);