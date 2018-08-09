// Enum allows you to group values together with friendlier names
var ListOfBirds;
(function (ListOfBirds) {
    ListOfBirds[ListOfBirds["Finch"] = 0] = "Finch";
    ListOfBirds[ListOfBirds["Budgie"] = 1] = "Budgie";
    ListOfBirds[ListOfBirds["Parrot"] = 2] = "Parrot";
    ListOfBirds[ListOfBirds["Eagel"] = 3] = "Eagel";
    ListOfBirds[ListOfBirds["Duck"] = 4] = "Duck";
})(ListOfBirds || (ListOfBirds = {}));
console.log(ListOfBirds);
var whois2 = ListOfBirds[2];
console.log(whois2);
