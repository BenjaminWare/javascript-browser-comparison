const {test,expect} = require("@playwright/test")

test('Empty an Array', async ({ page }) => {


  // Constructs promise that adds an event listener, and resolves when we have recieved "n" console logs. It throws an error if they don't match expected_msgs
  const end = new Promise((resolve,reject) =>{

    page.on("console", (msg) => {

        expected = "[]"
        actual = msg.text()
        expect(actual).toEqual(expected)
        resolve()
      }
    )
  })

  // Runs JS code in simulated browser
  await page.evaluate(() => {
    let arr = [1,2, 3]
    arr.length = 0
    console.log(arr)
  });

  // Prevents the program from terminating until all the console logs have been printed
  await end

  }
)