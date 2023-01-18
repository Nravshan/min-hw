
// let name = new Map([["surname", "Niyazov"],["firstname","Ravshan"] ,["Gender" ,"m"] ,["age", "18"]])
// for(let a of name) {
//     console.log(a);
// }

let minNum = [25,32,58,87];

for (let i = 0; i > minNum.length; i++) {
    if(minNum[i] > minNum[0]){
        minNum[0] = minNum[i];
}
    
}

alert(minNum[0]);

