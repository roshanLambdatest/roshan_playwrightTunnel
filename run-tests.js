

// // Set your LambdaTest credentials


// const { exec, spawn } = require("child_process");

// const LT_USERNAME = "roshank";
// const LT_ACCESS_KEY = "LT_pdN9i3brrjhqvhD82BuHMGL29zUl83MBQpdartL2hae9QdE";

// // Start LambdaTest Tunnel
// console.log("🚀 Starting LambdaTest Tunnel...");

// const tunnelProcess = spawn("./LT --user roshank@lambdatest.com --key LT_pdN9i3brrjhqvhD82BuHMGL29zUl83MBQpdartL2hae9QdE"
// );

// tunnelProcess.stdout.on("data", (data) => console.log(`[Tunnel] ${data}`));
// tunnelProcess.stderr.on("data", (data) => console.error(`[Tunnel Error] ${data}`));

// tunnelProcess.on("exit", (code) => {
//   console.log(`Tunnel process exited with code ${code}`);
// });

// // Wait for tunnel to establish before running tests
// setTimeout(() => {
//   console.log("🧪 Running Playwright Tests...");

//   const testProcess = exec("npx playwright test");

//   testProcess.stdout.on("data", (data) => console.log(`[Playwright] ${data}`));
//   testProcess.stderr.on("data", (data) => console.error(`[Playwright Error] ${data}`));

//   testProcess.on("exit", (code) => {
//     console.log(`✅ Playwright tests completed with exit code ${code}`);

//     console.log("⏳ Stopping LambdaTest Tunnel...");
//     exec("pkill -f LT", () => {
//       console.log("❌ Tunnel stopped.");
//     });
//   });
// }, 15000); // Wait 15 seconds to ensure tunnel is ready
