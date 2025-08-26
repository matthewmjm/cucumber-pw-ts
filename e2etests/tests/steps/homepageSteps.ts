import { Given, Then, When } from "@cucumber/cucumber";

Given("User is on homepage", async function () {
	console.log("----------User is on the homepage----------");
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
