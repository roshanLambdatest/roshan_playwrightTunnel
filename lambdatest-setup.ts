/**
 * Add the file in your test suite to run tests on LambdaTest.
 * Import `test` object from this file in the tests.
 */




// import * as base from "@playwright/test";
// import path from "path";
// import { chromium } from "playwright";
// var lambdaTunnel = require('@lambdatest/node-tunnel');

// // LambdaTest capabilities
// const capabilities = {
//   browserName: "Chrome",
//   browserVersion: "latest",
//   "LT:Options": {
//     platform: "Windows 10",
//     build: "Playwright TS Build",
//     name: "Playwright Test",
//     user: 'roshank',
//     accessKey: 'LT_pdN9i3brrjhqvhD82BuHMGL29zUl83MBQpdartL2hae9QdE',
//     network: true,
//     video: true,
//     console: true,
//     tunnel: false, // Ensure LambdaTest doesn't start another tunnel
//     tunnelName: "my-tunnel",
//     geoLocation: '',
//   },
// };

// // Singleton for tunnel
// let tunnelInstance = new lambdaTunnel();
// let tunnelStarted = false;

// async function startTunnel() {
//   if (!tunnelStarted) {
//     try {
//       await new Promise((resolve, reject) => {
//         tunnelInstance.start({
//           user: capabilities["LT:Options"].user,
//           key: capabilities["LT:Options"].accessKey,
//           tunnelName: "my-tunnel",
//         }, (err) => {
//           if (err) {
//             console.error("Tunnel failed to start:", err);
//             reject(err);
//           } else {
//             console.log("Tunnel started successfully");
//             tunnelStarted = true;
//             resolve(true);
//           }
//         });
//       });
//     } catch (error) {
//       console.error("Tunnel start error:", error);
//     }
//   } else {
//     console.log("Tunnel already running");
//   }
// }

// async function stopTunnel() {
//   if (tunnelStarted) {
//     try {
//       await new Promise((resolve, reject) => {
//         tunnelInstance.stop((err) => {
//           if (err) {
//             console.error("Failed to stop tunnel:", err);
//             reject(err);
//           } else {
//             console.log("Tunnel stopped successfully");
//             tunnelStarted = false;
//             resolve(true);
//           }
//         });
//       });
//     } catch (error) {
//       console.error("Tunnel stop error:", error);
//     }
//   }
// }

// // Modify capabilities dynamically
// const modifyCapabilities = (configName, testName) => {
//   let config = configName.split("@lambdatest")[0];
//   let [browserName, browserVersion, platform] = config.split(":");
//   capabilities.browserName = browserName || capabilities.browserName;
//   capabilities.browserVersion = browserVersion || capabilities.browserVersion;
//   capabilities["LT:Options"].platform = platform || capabilities["LT:Options"].platform;
//   capabilities["LT:Options"].name = testName;
// };

// // base.test.beforeAll(async () => {
// //   await startTunnel();
// // });

// // base.test.afterAll(async () => {
// //   await stopTunnel();
// // });

// const test = base.test.extend({
//   page: async ({ page, playwright }, use, testInfo) => {
//     let fileName = testInfo.file.split(path.sep).pop();

//       // startTunnel();

//     if (testInfo.project.name.match(/lambdatest/)) {
//       startTunnel();
//       modifyCapabilities(testInfo.project.name, `${testInfo.title} - ${fileName}`);

//       const browser = await chromium.connect({

//         wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,
//       });

//       const ltPage = await browser.newPage(testInfo.project.use);
//       await use(ltPage);

//       const testStatus = {
//         action: "setTestStatus",
//         arguments: {
//           status: testInfo.status,
//           remark: testInfo.error?.stack || testInfo.error?.message,
//         },
//       };
//       await ltPage.evaluate(() => {}, `lambdatest_action: ${JSON.stringify(testStatus)}`);
//       await ltPage.close();
//       await browser.close();
//     } else {
//       await use(page);
//     }
//   },
// });

// export default test;




// import * as base from "@playwright/test";
// import path from "path";
// import { chromium } from "playwright";
// var lambdaTunnel = require('@lambdatest/node-tunnel');

// // LambdaTest capabilities
// const capabilities = {
//   browserName: "Chrome",
//   browserVersion: "latest",
//   "LT:Options": {
//     platform: "Windows 10",
//     build: "Playwright TS Build",
//     name: "Playwright Test",
//     user: process.env.LT_USERNAME || 'roshank',
//     accessKey: process.env.LT_ACCESS_KEY || 'LT_pdN9i3brrjhqvhD82BuHMGL29zUl83MBQpdartL2hae9QdE',
//     network: true,
//     video: true,
//     console: true,
//     tunnel: true, // Ensure tunnel is enabled
//     tunnelName: "my-tunnel",
//     geoLocation: '',
//   },
// };

// // Singleton for tunnel
// let tunnelInstance = new lambdaTunnel();
// let tunnelStarted = false;

// async function startTunnel() {
//   if (!tunnelStarted) {
//     try {
//       await new Promise((resolve, reject) => {
//         tunnelInstance.start({
//           user: capabilities["LT:Options"].user,
//           key: capabilities["LT:Options"].accessKey,
//           tunnelName: "my-tunnel",
//         }, (err) => {
//           if (err) {
//             console.error("Tunnel failed to start:", err);
//             reject(err);
//           } else {
//             console.log("Tunnel started successfully");
//             tunnelStarted = true;
//             resolve(true);
//           }
//         });
//       });
//     } catch (error) {
//       console.error("Tunnel start error:", error);
//     }
//   } else {
//     console.log("Tunnel already running");
//   }
// }

// async function stopTunnel() {
//   if (tunnelStarted) {
//     try {
//       await new Promise((resolve, reject) => {
//         tunnelInstance.stop((err) => {
//           if (err) {
//             console.error("Failed to stop tunnel:", err);
//             reject(err);
//           } else {
//             console.log("Tunnel stopped successfully");
//             tunnelStarted = false;
//             resolve(true);
//           }
//         });
//       });
//     } catch (error) {
//       console.error("Tunnel stop error:", error);
//     }
//   }
// }

// // Modify capabilities dynamically
// const modifyCapabilities = (configName, testName) => {
//   let config = configName.split("@lambdatest")[0];
//   let [browserName, browserVersion, platform] = config.split(":");
//   capabilities.browserName = browserName || capabilities.browserName;
//   capabilities.browserVersion = browserVersion || capabilities.browserVersion;
//   capabilities["LT:Options"].platform = platform || capabilities["LT:Options"].platform;
//   capabilities["LT:Options"].name = testName;
// };

// // Ensure tunnel starts before all tests
// base.test.beforeAll(async () => {
//   await startTunnel();
// });

// // Stop tunnel after all tests
// base.test.afterAll(async () => {
//   await stopTunnel();
// });

// const test = base.test.extend({
//   page: async ({ page, playwright }, use, testInfo) => {
//     let fileName = testInfo.file.split(path.sep).pop();

//     if (testInfo.project.name.match(/lambdatest/)) {

//       modifyCapabilities(testInfo.project.name, `${testInfo.title} - ${fileName}`);

//       const browser = await chromium.connect({
//         wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,
//       });

//       const ltPage = await browser.newPage(testInfo.project.use);
//       await use(ltPage);

//       const testStatus = {
//         action: "setTestStatus",
//         arguments: {
//           status: testInfo.status,
//           remark: testInfo.error?.stack || testInfo.error?.message,
//         },
//       };
//       await ltPage.evaluate(() => {}, `lambdatest_action: ${JSON.stringify(testStatus)}`);
//       await ltPage.close();
//       await browser.close();
//     } else {
//       await use(page);
//     }
//   },
// });

// export default test;



import * as base from "@playwright/test";
import path from "path";
import { chromium } from "playwright";
var lambdaTunnel = require('@lambdatest/node-tunnel');

// LambdaTest capabilities
const capabilities = {
  browserName: "Chrome",
  browserVersion: "latest",
  "LT:Options": {
    platform: "Windows 10",
    build: "Playwright TS Build",
    name: "Playwright Test",
    user: 'roshank',
    accessKey: 'LT_pdN9i3brrjhqvhD82BuHMGL29zUl83MBQpdartL2hae9QdE',
    network: true,
    video: true,
    console: true,
    tunnel: true, // Ensure tunnel is enabled
    tunnelName: "my-tunnel",
    geoLocation: '',
  },
};

// Singleton for tunnel
let tunnelInstance = new lambdaTunnel();
let tunnelStarted = false;

// Function to start the tunnel
async function startTunnel() {
  if (!tunnelStarted) {
    try {
      await new Promise((resolve, reject) => {
        tunnelInstance.start({
          user: capabilities["LT:Options"].user,
          key: capabilities["LT:Options"].accessKey,
          tunnelName: "my-tunnel",
        }, (err) => {
          if (err) {
            console.error("Tunnel failed to start:", err);
            reject(err);
          } else {
            console.log("Tunnel started successfully");
            tunnelStarted = true;
            resolve(true);
          }
        });
      });
    } catch (error) {
      console.error("Tunnel start error:", error);
    }
  } else {
    console.log("Tunnel already running");
  }
}

// Function to stop the tunnel
// async function stopTunnel() {
//   if (tunnelStarted) {
//     try {
//       await new Promise((resolve, reject) => {
//         tunnelInstance.stop((err) => {
//           if (err) {
//             console.error("Failed to stop tunnel:", err);
//             reject(err);
//           } else {
//             console.log("Tunnel stopped successfully");
//             tunnelStarted = false;
//             resolve(true);
//           }
//         });
//       });
//     } catch (error) {
//       console.error("Tunnel stop error:", error);
//     }
//   }
// }

// Modify capabilities dynamically
const modifyCapabilities = (configName, testName) => {
  let config = configName.split("@lambdatest")[0];
  let [browserName, browserVersion, platform] = config.split(":");
  capabilities.browserName = browserName || capabilities.browserName;
  capabilities.browserVersion = browserVersion || capabilities.browserVersion;
  capabilities["LT:Options"].platform = platform || capabilities["LT:Options"].platform;
  capabilities["LT:Options"].name = testName;
};

// Ensure tunnel starts before all tests
base.test.beforeAll(async () => {
  await startTunnel();
  // Add a delay after tunnel start (e.g., 10s) to ensure readiness
await new Promise(resolve => setTimeout(resolve, 10000));

});

// Stop tunnel after all tests
// base.test.afterAll(async () => {
//   await stopTunnel();
// });

// Playwright test with timeouts
const test = base.test.extend({
  page: async ({ page, playwright }, use, testInfo) => {
    let fileName = testInfo.file.split(path.sep).pop();

    if (testInfo.project.name.match(/lambdatest/)) {
      modifyCapabilities(testInfo.project.name, `${testInfo.title} - ${fileName}`);

      const browser = await chromium.connect({
        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,
      });

      const ltPage = await browser.newPage(testInfo.project.use);

      // Setting timeouts
      ltPage.setDefaultTimeout(20000); // Global timeout for actions (20s)
      ltPage.setDefaultNavigationTimeout(30000); // Navigation timeout (30s)

      await use(ltPage);

      const testStatus = {
        action: "setTestStatus",
        arguments: {
          status: testInfo.status,
          remark: testInfo.error?.stack || testInfo.error?.message,
        },
      };
      await ltPage.evaluate(() => {}, `lambdatest_action: ${JSON.stringify(testStatus)}`);
      await ltPage.close();
      await browser.close();
    } else {
      await use(page);
    }
  },
});

// Set global test timeouts
// test.setTimeout(60000); // Set the max timeout for each test case to 60s

export default test;



//TYPES OF WAIT





// import * as base from "@playwright/test";
// import path from "path";
// import { chromium } from "playwright";
// var lambdaTunnel = require('@lambdatest/node-tunnel');

// // LambdaTest capabilities
// const capabilities = {
//   browserName: "Chrome",
//   browserVersion: "latest",
//   "LT:Options": {
//     platform: "Windows 10",
//     build: "Playwright TS Build",
//     name: "Playwright Test",
//     user: process.env.LT_USERNAME || 'roshank',
//     accessKey: process.env.LT_ACCESS_KEY || 'LT_pdN9i3brrjhqvhD82BuHMGL29zUl83MBQpdartL2hae9QdE',
//     network: true,
//     video: true,
//     console: true,
//     tunnel: true,
//     tunnelName: "my-tunnel",
//     geoLocation: '',
//   },
// };

// // Singleton for tunnel
// let tunnelInstance = new lambdaTunnel();
// let tunnelStarted = false;

// async function startTunnel() {
//   if (!tunnelStarted) {
//     try {
//       await new Promise((resolve, reject) => {
//         tunnelInstance.start({
//           user: capabilities["LT:Options"].user,
//           key: capabilities["LT:Options"].accessKey,
//           tunnelName: "my-tunnel",
//         }, (err) => {
//           if (err) {
//             console.error("Tunnel failed to start:", err);
//             reject(err);
//           } else {
//             console.log("Tunnel started successfully");
//             tunnelStarted = true;
//             resolve(true);
//           }
//         });
//       });
//     } catch (error) {
//       console.error("Tunnel start error:", error);
//     }
//   } else {
//     console.log("Tunnel already running");
//   }
// }

// async function stopTunnel() {
//   if (tunnelStarted) {
//     try {
//       await new Promise((resolve, reject) => {
//         tunnelInstance.stop((err) => {
//           if (err) {
//             console.error("Failed to stop tunnel:", err);
//             reject(err);
//           } else {
//             console.log("Tunnel stopped successfully");
//             tunnelStarted = false;
//             resolve(true);
//           }
//         });
//       });
//     } catch (error) {
//       console.error("Tunnel stop error:", error);
//     }
//   }
// }

// // Modify capabilities dynamically
// const modifyCapabilities = (configName, testName) => {
//   let config = configName.split("@lambdatest")[0];
//   let [browserName, browserVersion, platform] = config.split(":");
//   capabilities.browserName = browserName || capabilities.browserName;
//   capabilities.browserVersion = browserVersion || capabilities.browserVersion;
//   capabilities["LT:Options"].platform = platform || capabilities["LT:Options"].platform;
//   capabilities["LT:Options"].name = testName;
// };

// // Ensure tunnel starts before all tests
// base.test.beforeAll(async () => {
//   await startTunnel();
// });

// // Stop tunnel after all tests
// base.test.afterAll(async () => {
//   await stopTunnel();
// });

// const test = base.test.extend({
//   page: async ({ page, playwright }, use, testInfo) => {
//     let fileName = testInfo.file.split(path.sep).pop();

//     if (testInfo.project.name.match(/lambdatest/)) {
      
//       modifyCapabilities(testInfo.project.name, `${testInfo.title} - ${fileName}`);

//       const browser = await chromium.connect({
//         wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,
//       });

//       const ltPage = await browser.newPage(testInfo.project.use);

//       // ✅ Implicit Wait - Applies to all elements globally
//       ltPage.setDefaultTimeout(10000); 

//       await use(ltPage);

//       // ✅ Explicit Wait - Waits for a specific element (e.g., login button)
//       await ltPage.waitForSelector("#login-btn", { timeout: 5000 });
//       await ltPage.click("#login-btn");

//       // ✅ Fluent Wait - Polls every 500ms until condition is met
//       await ltPage.waitForFunction(() => document.querySelector("#dashboard") !== null, {
//         polling: 500,
//         timeout: 10000,
//       });

//       const testStatus = {
//         action: "setTestStatus",
//         arguments: {
//           status: testInfo.status,
//           remark: testInfo.error?.stack || testInfo.error?.message,
//         },
//       };
//       await ltPage.evaluate(() => {}, `lambdatest_action: ${JSON.stringify(testStatus)}`);
//       await ltPage.close();
//       await browser.close();
//     } else {
//       await use(page);
//     }
//   },
// });

// export default test;





/**
 * Add the file in your test suite to run tests on LambdaTest.
 * Import `test` object from this file in the tests.
 */

// import * as base from "@playwright/test";
// import path from "path";
// import { chromium } from "playwright";
// // import { Tunnel } from '@lambdatest/node-tunnel';
// const Tunnel = require("@lambdatest/node-tunnel");

// // LambdaTest capabilities
// const capabilities = {
//   browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
//   browserVersion: "latest",
//   "LT:Options": {
//     platform: "Windows 10",
//     build: "Playwright TS Build",
//     name: "Playwright Test",
//     user: 'roshank',
//     accessKey: 'LT_pdN9i3brrjhqvhD82BuHMGL29zUl83MBQpdartL2hae9QdE',
//     network: true,
//     video: true,
//     console: true,
//     tunnel: true, // Enable tunnel
//     tunnelName: "your-tunnel-name", // Replace with your tunnel name
//     geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
//   },
// };

// // Patching the capabilities dynamically according to the project name.
// const modifyCapabilities = (configName, testName) => {
//   let config = configName.split("@lambdatest")[0];
//   let [browserName, browserVersion, platform] = config.split(":");
//   capabilities.browserName = browserName
//     ? browserName
//     : capabilities.browserName;
//   capabilities.browserVersion = browserVersion
//     ? browserVersion
//     : capabilities.browserVersion;
//   capabilities["LT:Options"]["platform"] = platform
//     ? platform
//     : capabilities["LT:Options"]["platform"];
//   capabilities["LT:Options"]["name"] = testName;
// };

// const test = base.test.extend({
//   page: async ({ page, playwright }, use, testInfo) => {
//     // Configure LambdaTest platform for cross-browser testing
//     let fileName = testInfo.file.split(path.sep).pop();
//     if (testInfo.project.name.match(/lambdatest/)) {
//       modifyCapabilities(
//         testInfo.project.name,
//         `${testInfo.title} - ${fileName}`
//       );

//       const browser = await chromium.connect({
//         wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
//           JSON.stringify(capabilities)
//         )}`,
//       });

//       const ltPage = await browser.newPage(testInfo.project.use);
//       await use(ltPage);

//       const testStatus = {
//         action: "setTestStatus",
//         arguments: {
//           status: testInfo.status,
//           remark: testInfo.error?.stack || testInfo.error?.message,
//         },
//       };
//       await ltPage.evaluate(() => {},
//       `lambdatest_action: ${JSON.stringify(testStatus)}`);
//       await ltPage.close();
//       await browser.close();
//     } else {
//       // Run tests in local in case of local config provided
//       await use(page);
//     }
//   },
// });

// export default test;






