import { Selector } from 'testcafe';
import constants from '../util/constants';

fixture `Fixture`
    .page`${constants.consts.url}`
    .before(async (t) => {
        
    })
    .after(async (t) => {
        
    })
    .beforeEach(async (t) => {
        
    })
    .afterEach(async (t) => {
        // await t.takeScreenshot(constants.getPath())
    });

test('Find element by text', async t => {
    const targetElement = Selector('#feed');
    await t.expect(targetElement.innerText).contains('Головне');
});