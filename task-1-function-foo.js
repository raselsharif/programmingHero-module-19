

function foo() {
    console.log("foo");
    bar();  //call a function in another function
}
function bar() {
    console.log("bar");
}


foo();