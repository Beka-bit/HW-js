var num1 = Number(prompt("Бірінші санды іңгізіңіз"))
var num2 = Number(prompt("Екінші санды еңгізіңіз"))
var num3 = Number(prompt("Үшінші санды еңгізіңіз"))
var sum = 0;
sum = (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3;//String=>Number
alert("Қосындысы: " + sum)