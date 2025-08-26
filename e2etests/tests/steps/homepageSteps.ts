import { Given, Then, When } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";

Given("User is on homepage", async function () {
	console.log("----------User is on the homepage----------");
	let browser: Browser = await chromium.launch({ headless: false, channel: "chromium", args: ["--start-maximized"] });
	let browserContext: BrowserContext = await browser.newContext({ viewport: null, javaScriptEnabled: true });
	let page: Page = await browserContext.newPage();
	await page.goto("https://ecommerce-playground.lambdatest.io/");
	await page.close();
	await browser.close();
});

When("User enters login details", async function () {
	console.log("----------User enters login details----------");
});

Then("Login should be successful", async function () {
	console.log("----------User login should be successful----------");
});

Then("Homepage should be displayed", async function () {
	console.log("----------Homepage should be displayed----------");
});
