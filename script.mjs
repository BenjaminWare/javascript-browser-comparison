// 1, Am I Blocked? (Waits for fetch), 2, data
// const prom1 = new Promise(async (resolve,reject) =>{
//     console.log('1')
//     const response = await fetch('http://localhost:3000/');
//     const data = await response.json()
//     console.log('2')
//     resolve(data);
//   })
  

// console.log("Am I blocked?") // No
// const data = await prom1
// console.log(data)

//  -------
// let i = 0;
// (function (){let time = performance.now()
// setInterval(() => {
//     let time_now = performance.now()
//     console.log("Time since last simulated render:",(time_now - time).toFixed(2),i)
//     time = time_now
// },15)}())

// // Blocks for almost a second 
// // for(let i = 0; i < 1000000000;i++) {}



// // This function only does ~15 ms of work, 14ms in loop and 1 sec for overheaad. We still sometimes will run it twice before a render
// function countBillion() {
//     let time = performance.now()
//     while (i < 1000000000) {
//         // Only run each time for 10 ms
//         if (performance.now() - time > 14) {
//             setTimeout(countBillion,0)
//             return
//         }
//         i += 1
//     }
//     console.log(i)
// }

// countBillion()

// ----
// Set timeout 0, has to wait till the next event loop iteration, it can't run with this context if in there is blocking
const timed = (i) => {setTimeout(() => {
    timed(i+1);
    console.log(i)
    // Sync work taking a little bit
    for(let i =0; i< 100000;i++) {}
    queueMicrotask(() => {console.log("Task Queue empty")})

},0)}

timed(0)