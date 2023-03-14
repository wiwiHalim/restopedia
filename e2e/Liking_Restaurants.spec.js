/* eslint-disable max-len */
/* eslint-disable new-cap */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty liked restaurants', ({I}) => {
  I.seeElement('#query');
  I.waitForElement('.restaurant-item__not__found', 3);
  I.see('Restoran tidak ditemukan', '.restaurant-item__not__found');
});

Scenario('Liking one restaurant', async ({I}) => {
  I.waitForElement('.restaurant-item__not__found', 3);
  I.see('Restoran tidak ditemukan', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.waitForElement('.restaurant__title a', 3);

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.forceClick(firstRestaurant);
  I.waitForElement('#likeButton', 3);
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurantItem');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Batal menyukai restoran', async ({I}) => {
  I.waitForElement('.restaurant-item__not__found', 3);
  I.see('Restoran tidak ditemukan', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.waitForElement('.restaurant__title a', 3);

  const firstRestaurant = locate('.restaurant__title a').first();
  const likedRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.forceClick(firstRestaurant);
  I.waitForElement('#likeButton', 3);
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurantItem', 3);
  I.forceClick(likedRestaurantTitle);
  I.waitForElement('#likeButton', 3);
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSee(likedRestaurantTitle);
});

Scenario('searching restaurants', async ({I}) => {
  I.waitForElement('.restaurant-item__not__found', 3);
  I.see('Restoran tidak ditemukan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__title a');

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.forceClick(locate('.restaurant__title a').at(i));
    I.waitForElement('#likeButton', 3);
    I.forceClick('#likeButton');
    titles.push(await I.grabTextFrom('.restaurant_detail_name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');
});
