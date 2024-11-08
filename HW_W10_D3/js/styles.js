let san = +prompt(' 0 мен 99 арасындағы санды енгіз ')
if (san<=99 && san>=10) {
    let first = parseInt(san/10)
    let second = san %10
    alert("Сіздің еңгізген сан екі таңбалы сан " + '\n' + "Бірінші сан: " + first + '\n' + "Екінші сан: " + second)
}else if (san>0 && san<10) {
    alert('Сіздің Саныңыз: ' + san)
}else{
    alert('Қате сан еңгіздіңіз! ')
}
