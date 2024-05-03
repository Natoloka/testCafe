import constants from "../util/constants";
import mainPage from "../pages/mainPage";
import step, { Severity } from "testcafe-reporter-allure-plus/dist/utils";
const punycode = require("punycode/");

fixture`Fixture`.page`${constants.consts.url}`;

test.meta({
  //   severity: Severity.TRIVIAL,
  issue: "TEST-ISSUE",
  description: "An example discription",
  epic: "Example Epic Ticket",
  feature: "Example Feature Ticket",
  story: "Example Story Ticket",
  suite: "Main Example Group",
  // ... any other key: value property as custom metadata
})("Use Page Object", async (t) => {
  await step("verifyElementsPresent", t, mainPage.verifyElementsPresent());
  // await takeSnapshot(t);
});
