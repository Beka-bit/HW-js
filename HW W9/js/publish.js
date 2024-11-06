let course = +prompt('Курсыңызды еңгіpізіңіз 1/2/3/4 ')
let isAlmaty = prompt("Алматыдансың ба? yes/no ")
if ((course == 1 || course == 2) && isAlmaty == "no") {
    alert('Құттықтаймыз сізге жатақ ханадан орын беріледі ')
}
else{
    alert("Ғафу өтінеміз! Сізге жаттаұханадан орын қарастырылмаған ")
}

let num1 = prompt('Сұрақтарға жауап беріңіз! ')
let num2 = +prompt('Қазақстанның тәуелсіздік алған жылы. ')
let num3 = +prompt('Қазір оқып жатқан қаласы.')
num4 = 0
if (num2 == 1991) {
    num4++;
}
 if (num3 == "Almaty"){
    num4++;
}
alert('Сіздің ұпайыңыз '  + num4 )