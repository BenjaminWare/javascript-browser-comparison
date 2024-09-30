// Collection of easy js questions

const printTest = (code) => {
    console.log("--------------------")
    console.log(code.toString())
    console.log("--------------------")
    try {
    code()
    }
    catch(e) {
        console.log(e.message.split('\n')[0])
    }
    finally {
    console.log("--------------------")
    console.log("\n")
    }

}

// Empty an array
function emptyAnArray() {
    let arr = [1, 2, 3]
    arr.length = 0
    console.log(arr)
}

function scopeTest() {

    {
        var x = 10;
        let y = 20;
    }
    console.log(x);  // 10, because `var` is function-scoped
    console.log(y);  // ReferenceError, because `let` is block-scoped
}

function hoistingTest() {
    console.log(a);  // undefined due to hoisting
    console.log(b);  // reference error

    var a = 5;
    let b = 10;


}
function coercionTest() {
    console.log(1 + "2" + 3);  // "123"
    console.log(1 + 2 + "3");  // "33"
}

function precisionTest() {
    console.log(0.1 + 0.2);  // 0.30000000000000004
}

// Medium, or split into three tests
function defiesBooleanLogicTest() {
    
    console.log([] == ![])
    console.log(null == !!null)  // !! is the logical NOT operator twice
    console.log(undefined == !!undefined)
}

function referenceTest() {
    console.log(!![] === ![])
}
// Print all the tests
[emptyAnArray,scopeTest,hoistingTest,coercionTest,precisionTest,defiesBooleanLogicTest,referenceTest].forEach(func => printTest(func))