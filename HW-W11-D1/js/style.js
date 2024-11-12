let num =+prompt("Кез келген сан еңгіз")
let san = 0;
for(let san = 1; san<=num;san++){
    if( san % 3 === 0 &&  san % 5 === 0 ){
        console.log("3ке және 5ке қалдықсыз бөлинетін сандар: " + san);
        if(san%2==0)
        console.log(san + " - жұп сан"); 
    }
}