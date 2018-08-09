function myCallBack(name: string): void {
    console.log(name);
};

const theOneWhoKnocks = function theOneWhoKnocks(name: string): void {
    myCallBack(name);
};

theOneWhoKnocks("Heisenberg");