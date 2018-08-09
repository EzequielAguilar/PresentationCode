function myCallBack(name) {
    console.log(name);
}
;
var theOneWhoKnocks = function theOneWhoKnocks(name) {
    myCallBack(name);
};
theOneWhoKnocks("Heisenberg");
