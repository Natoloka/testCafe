import { Selector } from 'testcafe';
import constants from '../util/constants';

fixture `Fixture`
    .page`${constants.consts.url}`;

test('Find element by trimmed text', async t => {
    const targetElement = Selector('#feed');
    await t.expect(targetElement.innerText).contains('Головне');
});