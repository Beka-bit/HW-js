let name = prompt("Студент атын еңгіз")
let lang =prompt("Қай тілде сөйлейтінін таңдаңыз: english/русски/қазақша")

function greatStydent(name,lang){
    if(lang=="english"){
        return (` Hi ${name} ! How are you?`)
    }else if(lang=="русски"){
        return (`Привет ${name}! как дела?`)
    }else if (lang=="қазақша"){
        return (`Сәлем ${name}! Қалың қалай?`)
    }else{
        alert("Тіл дұрыс таңдалмаған")
    }
} 
let greet = greatStydent(name,lang)

alert(greet)