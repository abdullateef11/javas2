const sign = prompt("Pick the arithmetic operation you would like to perform.\n Addition(+) \n Subtraction(-) \nMultiplication(*) \n Division(/) :");
const num1 = parseFloat(prompt("Number1 :"));
const num2 = parseFloat(prompt("Number2 :"));
let answer;
if (sign == '+') {
    answer = num1 + num2;
}
else if (sign == '-') {
    answer = num1 - num2;
}
else if (sign == '*') {
    answer = num1 * num2;
}
else if (sign == '/') {
    answer = num1 / num2;
}
else {
    answer = 'you picked the wrong operator'
}

console.log(answer);
alert(answer);




