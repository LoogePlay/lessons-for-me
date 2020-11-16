/* 
     Циклы 
*/
let cnt = 9;
let ppl = 9;
let soup = 30;
let plate = 600;
soup *= 1000;

// while (cnt > 0) {
//     console.log("съедедна одна ложка супа.");
//     cnt--; // cnt = cnt - 1
// }
// console.log("Тарелка супа съедена(.")
let branch = 0;

while (soup >= plate * ppl){
    soup = soup - plate * ppl;
    let ppl2 = ppl
    while (ppl2) {
        let addSoup = Math.floor(Math.random() * 2)
        if (addSoup >= plate && addSoup) {
            soup -= plate;
        }
        ppl2--;
    }
    branch++;

}
console.log(`после ${branch} обедов в кастрюле ${soup} мл супа, что позволит накормить ${Math.floor(soup / plate)} человек.`); 