import { takeSnapshot } from 'testcafe-blink-diff';
import constants from '../util/constants';
import mainPage from '../pages/mainPage';

fixture `Fixture`
    .page`${constants.consts.url}`;

test('Use Page Object', async t => {
    await mainPage.verifyElementsPresent();
    await takeSnapshot(t);
});