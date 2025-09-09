import test from '@playwright/test'
import { before } from 'node:test'
test("Frame assignment", async ({ page }) => {


await page.goto("https://leafground.com/frame.xhtml")
//Interact with the Click Me button inside frame
// Assert the text changed after clicking the button
console.log("before click:  " + await page.frameLocator("(//iframe)[1]").locator("#Click").innerText())
await page.frameLocator("(//iframe)[1]").locator("#Click").click()
console.log("After click:  " + await page.frameLocator("(//iframe)[1]").locator("#Click").innerText())

//Get the total count of frames present in the page
console.log("Get the total count of frames present in the page:" + page.frames().length)


//nested Frame
console.log("Before nested frame click:" + await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").innerText())
await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#click").click()
await page.waitForTimeout(2000)
console.log("After nested frame click:" + await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").innerText())
})

