const {test,expect} = require("@playwright/test")

test('', async ({ page }) => {


  // Constructs promise that adds an event listener, and resolves when we have recieved "n" console logs. It throws an error if they don't match expected_msgs
  const end = new Promise((resolve,reject) =>{
    let i = 0
    const n = 2
    const expected_msgs = ["0","1"]
    const actual_msgs = []
    page.on("console", (msg) => {
      actual_msgs.push(msg.text())
  
      i += 1
      if (i == n) {
        expect(actual_msgs).toEqual(expected_msgs)
        resolve()
      }
    })
  })


  // Runs JS code in simulated browser
  await page.evaluate(() => {
    setTimeout(() => {
      console.log(0);
    }, 1);
    
    // for (let i = 0; i < 1000000000; i++) {}
    
    setTimeout(() => {
      console.log(1);
    }, 0);
  });

  // Prevents the program from terminating until all the console logs have been printed
  await end

  }
)