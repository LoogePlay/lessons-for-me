/*
boolean - логичиский тип данных
false -  ложь
true - правда
> - операторы сравнения 
<
<=
>=
== - сравнение на равенства
!= - сравнения на неравенства
=== - строгое сравнение (сначала сравнит ТД а затем Значения)
!== - строгое неравенство
*/

let age = 18
age > 16

let n = "18";
console.log(age == n)  // true
console.log(age === n)  

/* 
   приведение типо 
   Типы данных с точки зрения логического типа
   числа
   true 
   - любое чисто, кроме 0
  -  любая не пустая строка
   false
   - 0
   - "" `` ''
   - undefinded
   - null
*/
 
let name;
console.log(name);

/* условия
 если if
 иначе -> else 
*/
let friends = 2, apples = 7
/* 
  Года яблок хватает на друзей полностью - работает

  когда яболок больше чем друзей, но нне поравну - отдам каждому другу по n яблок поравну
*/
if (apples % friends === 0 ) {
    let cnt = apples / friends;  
}else if (apples >+ friends) {
    let cnt = apples / friends
    cnt = +cnt.toFixed(0)
    console.log(`Друзья кушают по ${cnt} яблок!`)


} else {
     console.log(`Яблок никто не получит!`)
}
