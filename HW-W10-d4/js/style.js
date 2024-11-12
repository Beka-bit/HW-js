let num1 = +prompt("Бірінші санды енгізіңіз:");
let num2 = +prompt("Екінші санды енгізіңіз:");
let num3 = +prompt("Үшінші санды енгізіңіз:");

let ulken;

switch (true) {
    case (num1 >= num2 && num1 >= num3):
        ulken = num1;
        break;
    case (num2 >= num1 && num2 >= num3):
        ulken = num2;
        break;
    case (num3 >= num1 && num3 >= num2):
        ulken = num3;
        break;
}

alert("Ең үлкен сан: " + ulken);