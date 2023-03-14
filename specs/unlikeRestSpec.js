/* eslint-disable max-len */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Tidak menyukai sebuah restoran: ', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({id: 1});
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('6) Menampilkan tombol unlike ketika restoran sudah disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});
    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
        .toBeTruthy();
  });

  it('7) Tidak menampilkan tombol like ketika restoran sudah disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});
    expect(document.querySelector('[aria-label="like this restaurant"]'))
        .toBeFalsy();
  });

  it('8) Menghapus restoran yang disukai dari list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('9) Tidak error jika restoran yang disukai tidak ada pada list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
