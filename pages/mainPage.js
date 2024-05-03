import { t, Selector } from "testcafe";

class MainPage {
  elements = {
    title: "title",
    newsHeaders: ".//h2/a",
    leftPannel: "#login-frame-wraper",
  };

  async verifyElementsPresent() {
    await t
      .expect(
        Selector(this.elements.title).withText(
          "UKR.NET: Всі новини України, останні новини дня в Україні та Світі"
        ).exists
      )
      .ok();
    await t.expect(Selector(this.elements.newsHeaders).visible).eql(true);
    await t.expect(Selector(this.elements.leftPannel).visible).eql(true);
  }
}
export default new MainPage();
