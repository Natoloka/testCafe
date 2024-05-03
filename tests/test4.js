import { takeSnapshot } from 'testcafe-blink-diff';
import { Selector } from 'testcafe';
import constants from '../util/constants';

fixture `Fixture`
    .page`${constants.consts.url}`;

test('Count amount of elements', async t => {
    const amount = await Selector('h2 a').count;
    console.log(amount);
    await takeSnapshot(t);
});