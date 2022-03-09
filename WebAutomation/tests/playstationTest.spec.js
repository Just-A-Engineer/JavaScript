const{ test, expect } = require("@playwright/test");

test("Find Sony Logo", async ({page}) => {
    await page.goto("https://playstation.com/");
    const pageTitle = await page.locator(".sr-only");
    await expect(pageTitle).toContainText("Sony");
})

test("Search for Elden Ring", async ({page}) => {
    await page.goto("https://www.playstation.com/en-us/");
    await page.click(".shared-nav-search-container");
    await page.fill(".search-text-box__input", "Elden Ring");
    await page.click(".jetstream-search__offscreen-label");
    await page.locator(":nth-match(:text('Elden Ring'), 4)").click();
    const pageTitle = await page.locator(".game-title");
    await expect(pageTitle).toContainText("Elden Ring");
})