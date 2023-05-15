let n = Number(prompt("Nhap so n: "));
function oneTriagle(n){
    if(n < 1 || n > 10){
        return;
    }
    for (let i = 1; i < n; i++){
        let tamGiac ="";
        for(let j = 1; j < n; j++){
            tamGiac += "+";
        }
        console.log(tamGiac);
    }
}
console.log(oneTriagle(n));