import test from "../lambdatest-setup";
import { expect } from "@playwright/test";

test.describe("Browse LambdaTest", () => {
  test("Opening localhost on Lambdatest ", async ({ page }) => {
    await page.goto('https://localhost:8080/')
    // let element = await page.locator("[name=\"q\"]");
    // await element.click();
    // await element.type("LambdaTest");
    // await element.press("Enter");
    // const title = await page.title()

    // console.log("Page title:: ", title);
    // // Use the expect API for assertions provided by playwright
    // expect(title).toEqual(expect.stringContaining("LambdaTest"));
  });
});
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

// // Function to start the tunnel
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

// // Function to stop the tunnel
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

// // Playwright test with timeouts
// const test = base.test.extend({
//   page: async ({ page, playwright }, use, testInfo) => {
//     let fileName = testInfo.file.split(path.sep).pop();

//     if (testInfo.project.name.match(/lambdatest/)) {
//       modifyCapabilities(testInfo.project.name, `${testInfo.title} - ${fileName}`);

//       const browser = await chromium.connect({
//         wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,
//       });

//       const ltPage = await browser.newPage(testInfo.project.use);

//       // Setting timeouts
//       ltPage.setDefaultTimeout(20000); // Global timeout for actions (20s)
//       ltPage.setDefaultNavigationTimeout(30000); // Navigation timeout (30s)

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

// // Set global test timeouts
// test.setTimeout(60000); // Set the max timeout for each test case to 60s

// export default test;
