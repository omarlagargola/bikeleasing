import {
  chromium,
  expect,
  test,
} from '@playwright/test';

const BASE_URL = 'http://localhost:8080/dist/src/index.html';

test.describe('Bike list', () => {
  let browser;
  let context;
  let page;

  test.use({ viewport: { width: 1600, height: 1200 } });

  test.beforeEach(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(BASE_URL);
    await page.waitForSelector('#bike-items-wrapper');
  });

  test('components are rendered', async () => {
    const searchBar = await page.locator('.search-bar-wrapper').count();
    const bikeItems = await page.locator('.bike-item').count();
    const price = await page.locator('#shopping-bag__price').innerHTML();
    expect(searchBar).toEqual(1);
    expect(bikeItems).toEqual(6);
    expect(price).toEqual('0,00&nbsp;€');
  });

  test('filtering function', async () => {
    const bikeItemsBeforeFilter = await page.locator('.bike-item').count();
    expect(bikeItemsBeforeFilter).toEqual(6);
    await page.locator('.search-bar-wrapper input').fill('cool');
    const bikeItemsAfterFilter = await page.locator('.bike-item').count();
    expect(bikeItemsAfterFilter).toEqual(2);
  });

  test('select items', async () => {
    await page.locator('.bike-item').first().click();
    let price = await page.locator('#shopping-bag__price').innerHTML();
    expect(price).toEqual('1.245,00&nbsp;€');
    await page.locator('.bike-item').last().click();
    price = await page.locator('#shopping-bag__price').innerHTML();
    expect(price).toEqual('2.544,00&nbsp;€');
    await page.locator('.bike-item').first().click();
    await page.locator('.bike-item').last().click();
    price = await page.locator('#shopping-bag__price').innerHTML();
    expect(price).toEqual('0,00&nbsp;€');
  });
});