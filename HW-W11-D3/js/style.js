// let num=+prompt("cтуденттер санын енгіз");
// let i=1;
// let sum=0;

// while(i<=num){
//     let num2=+prompt("Әр студенттің бағаларын еңгіз");
//     sum = sum + num2
//     i++;
// }


// alert("Студенттердің бағаларының  орташа есебі: " + sum / num)
let num = +prompt("Студенттер санын еңгіз")
let i = 1;
let san=0;
while(i<=num){
    let num2= prompt(i+ " Cтуден бағасын еңгіз")
    san = san + num2
}
alert("Студент бағаларының орташа есебі: " + sum / num)