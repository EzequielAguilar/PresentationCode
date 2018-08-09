// We can also assign where the enum is going to start
var ListOfColors;
(function (ListOfColors) {
    ListOfColors[ListOfColors["BLUE"] = 8] = "BLUE";
    ListOfColors[ListOfColors["RED"] = 9] = "RED";
    ListOfColors[ListOfColors["YELLOW"] = 10] = "YELLOW";
})(ListOfColors || (ListOfColors = {}));
console.log(ListOfColors);
var whatnumberisyellow = ListOfColors.YELLOW;
console.log(whatnumberisyellow);
var red = ListOfColors[9];
console.log(typeof red);
