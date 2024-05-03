import { visualCheck } from 'visual-check-testcafe';
 
fixture `TestCafe tests with Visual compare`
    .page `http://example.com`;
 
test('Automated visual testing', async t => {
  await visualCheck(t, options);
});