describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should be able to add a new skill', async () => {
    const inputNewSkiil = await element(by.id('input-new'));
    const buttonAdd = await element(by.id('button-add'));
    const flatListSkiils = await element(by.id('flat-list-skiils'));

    await inputNewSkiil.tap();
    await inputNewSkiil.typeText('React Native');
    await flatListSkiils.tap();

    await buttonAdd.tap();
    
  });
});
