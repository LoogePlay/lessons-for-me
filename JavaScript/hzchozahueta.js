var i = 0, j = 0;
// Желаемое количество строк
var max = 5;
var space = "",
    star = "";

while (i < max) {
    space = "";
    star = "";
    for (j = 0; j < max - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) star += "*";
    console.log(space + star);
    i++;
}