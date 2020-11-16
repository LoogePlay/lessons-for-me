let n = 0;

while(n < 5) {
    n++;
}
 
for (let x = 0; x < 5; x++){
    //do somethink
}

function fx(x) {
    let y = x ** 2;
    //onsole.log(x, y);
    return y;
}
console.time("fx");
for (let i =-1000; i <= 100; i++){
  let n = fx(i);
//console.log(i, n);
}
console.timeEnd("fx");
// наследование, икопсуляция, полиморфизм 




function getNumber(max = 11, min = 0) {

    let n = Math.random();
    n = n * (max - min) + min;
    return Math.floor(n);
}


// console.log(getNumber(5, 2))
function getRGB(max = 256, min = -1) {

    let n = Math.random();
    n = n * (max - min) + min;
    // n = n * (max - min) + min;
    // n = n * (max - min) + min;
    return Math.floor(n);
}


console.log(getRGB())

function getRGB() {
    return `rgb(${getNumber(256)}, ${getNumber(256)}, ${getNumber(256)})`;
}console.log(getRGB());

function setColor() {
    return`background: ${getRGB()}`
}



/*
На ветке сидело n ворон.
ворон 0, 5-20, 25-30
ворона 1, 21, 31 !11
вороны 2-4 22-24 !12-14
*/
let s, word = "ворон";

s = Math.random(s);
s = Math.floor(s);

/*
"1" == 1
"1" === 1
*/
if (s % 100 < 11 || s % 100 > 14){
if (s % 10 === 1){
word += "a";
}else if (s % 10 === 2 || s % 10 === 3 || s % 10 === 4){
word += "ы";
}
}
console. log(`На ветке сидело(a) ${n} ${word}`);

/*
Math.PI - число PI (3.14)
Math.E - число Эйлера (2.7)

Math.sin(n) / .cos(n) / .tg(n) / .ctg(n)
Math.max(a, b, c ,d) = находит максимальное число из переданных в скобки
Math.min(a, b, c ,d) = находит минимальное число из переданных в скобки
Math.abs(n) - абсолютное значение
Math.pow(n,s)
Math.sqrt(n) - выдаёт квадратный корень от числа n

Math.round(n) - округлить число (3.1 -> 3 / 3.9 -> 4 / 3.5)
Math.floor(n) - округлить в меньшую сторону (3.9 -> 3)
Math.ceil(n) - округлить в большую сторону (3.01 -> 4)
Math.random()
*/
console.log(Math.floor(Math.random() * 15))





ohfsjfkohofoh% kjfhal ohfaljjhh jhhasljdjhaljhlfahsflhan %,njbxx jkjdjhakdjhasdashdakshdkas                                                       