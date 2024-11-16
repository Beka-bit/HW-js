let num =+prompt("Кез келген сан еңгіз")
let ulken;
let kishi;
for(let i = 1 ; i<=num;i++){
    
        if(num%5==0 || i<kishi){
            kishi=5;
            ulken=5;
        }else if(num%4==0 || num<kishi){
            kishi=4;
            ulken=4;
        }else if(num%3==0 || num<kishi){
            kishi=3;
            ulken=3;
        }else if(num%2==0 || num<kishi){
            kishi=2;
            ulken=2;
        }else if(num%1==0 || num<kishi){
            kishi=1;
            ulken=1;
        
    }
}
alert("En ulken:" + ulken)
alert("En kishi: " + kishi)