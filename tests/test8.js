import { Selector } from "testcafe";
import constants from "../util/constants";

fixture`Fixture`.page`${constants.consts.url}`;

test("get request", async (t) => {
  const response = await t.request({
    url: "https://swapi.dev/api/people/1/",
    headers: {
      "content-type": "application/json",
    },
  });
  console.log(response.body);
});
