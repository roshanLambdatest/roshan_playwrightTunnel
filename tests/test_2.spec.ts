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