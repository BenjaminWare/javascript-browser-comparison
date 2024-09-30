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

function tryCatchOrderTest() {
    try {
        try {
            a = b // Reference Error
        }
        finally {
            console.log("Finally at same level")
        }
    }
    catch {
        console.log("Error caught one layer up")
    }
    finally {
        console.log("Finally one layer up")
    }
}

function falsyTruthyTest() {
    console.log(0 == false) // 0 is falsey
    console.log(0 === false) // 0 is not false
    console.log(!!0 === false) // The double ! converts from a truthy/falsey value to true/false
}

function emptyArrayGuantletTest() {
    console.log(![] == [])
    console.log(!![] == ![])
    console.log(!![] === ![])
    console.log(!!![] === ![])

}

function objectIsTest() {

    console.log(Object.is(NaN,NaN) == (NaN === NaN)) // true == false
    console.log(Object.is(undefined,undefined) == (undefined === undefined)) // true == true
    console.log(Object.is(0,-0) == (0 === -0)) // false == true
    console.log(Object.is([],[]) == ([] === [])) // false == false
}
[tryCatchOrderTest,falsyTruthyTest,emptyArrayGuantletTest,objectIsTest].forEach(func => printTest(func))