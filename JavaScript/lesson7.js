let age = 60
let age1 = 17, age2 = 59
if (age >= age2) {
    cnt = age / age2
    console.log('Вам пора на пенсию')
}
else if (age <= age1){
    cnt = age / age1
    console.log("Рано ещё работать")
}
else{
    console.log('Вам еще работать и работать')
}


/*
На ветке сидело n ворон.
ворон 0, 5-20, 25-30
ворона 1, 21, 31 !11
вороны 2-4 22-24 !12-14
*/
let n, word = "ворон";

n = Math.random(n);
n = Math.floor(n);

/*
"1" == 1
"1" === 1
*/
if (n % 100 < 11 || n % 100 > 14){
if (n % 10 === 1){
word += "a";
}else if (n % 10 === 2 || n % 10 === 3 || n % 10 === 4){
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