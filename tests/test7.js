import constants from "../util/constants";
import step from "testcafe-reporter-allure-plus/dist/utils";

fixture`Fixture`.page`${constants.consts.url}`;

test.meta({
  //   severity: Severity.TRIVIAL,
  issue: "JIRA-7",
  description: "Tests to show how to work with IFrame",
  epic: "Epic Iframe",
  feature: "IFrame",
  story: "Work with IFrame",
  suite: "Suite with tests about IFrame",
  // ... any other key: value property as custom metadata
})("Switch to IFrame", async (t) => {
  await step(
    "iframe",
    t,
    //   t.debug()
    t.switchToIframe("iframe[title='3rd party ad content']")
  );
});
