const puppeteer = require('puppeteer');
const fileUrl = require('file-url');

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    page.on("pageerror", function (err) {
        theTempValue = err.toString()
        console.log("Page error: " + theTempValue)
    })

    page.on("error", function (err) {
        theTempValue = err.toString()
        console.log("Error: " + theTempValue)
    })

    page.on("console", function (err) {
        if (err.text() == "Failed to load resource: net::ERR_FILE_NOT_FOUND") return
        console.log("console: ")
        console.log(err.text())
    })

    page.on("requestfailed", function (request) {
        if (request.failure().errorText == "net::ERR_FILE_NOT_FOUND") return
        console.log("requestfailed: ")
        console.log(`${request.failure().errorText} ${request.url()}`)
    })

    await page.goto(fileUrl('dist/index.html'))

})()