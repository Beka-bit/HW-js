let total = 0;
function conversion() {
    let i = 1;
    while (true) {
        let aksha = prompt(`${i}-ақша сомасын енгізіңіз (немесе 'stop' деп жазыңыз тоқтату үшін):`);
        if (aksha.toLowerCase() == "stop") {
            break;
        }
        let amount = +aksha;
        let obmen = prompt("Валюта таңдаңыз (USD, KZT, EUR):");
        if (obmen == "USD") {
            total = total + amount * 0.85;
        } else if (obmen == "KZT") {
            total = total + amount * 0.002;
        } else if (obmen == "EUR") {
            total = total + amount * 1;
        } else {
            console.log("Қате валюта таңдалды.");
        }
        console.log(`Жалпы: ${total} EUR`);
        i++;
    }
    alert(`Жалпы евродағы сома: ${total} EUR`);
}
conversion();

