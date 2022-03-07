const{ test, expect } = require("@playwright/test");

test("Beginner Test", async({page}) => {
    await page.goto("https://example.com/");
    const pageTitle = await page.locator("h1");
    await expect(pageTitle).toContainText("Example Domain");
})

test("Click On Element", async ({page}) => {
    await page.goto("https://scrapethissite.com/");
    await page.click("text = Explore Sandbox");
    const pageTitle = await page.locator("h1");
    await expect(pageTitle).toContainText("Web Scraping Sandbox");
})

test("Find Sony Logo", async ({page}) => {
    await page.goto("https://playstation.com/");
    const pageTitle = await page.locator(".sr-only");
    await expect(pageTitle).toContainText("Sony");
})