import test from '@playwright/test'
//promt alert
test("Handle Alert with page.on",async({page})=>{


//handle first alert present in the test case
page.once('dialog',alertType=>{
// type of alert
const type=alertType.type()
console.log(type)
//alert box what message it has 
console.log(alertType.message())
//handle alert 
//alertType.accept()
alertType.dismiss()

})

await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
await page.frameLocator("//iframe[@id='iframeResult']").locator("//button[text()='Try it']").click()
const mess = await page.frameLocator("//iframe[@id='iframeResult']").locator(`//p[@id='demo']`).innerText()
console.log(mess)
})

