/* eslint-disable max-len */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Menyukai sebuah restoran:', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('1) Tombol like muncul saat restoran belum pernah disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});
    expect(document.querySelector('[aria-label="like this restaurant"]'))
        .toBeTruthy();
  });

  it('2) Tombol unlike tidak muncul ketika restoran belum pernah disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});
    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
        .toBeFalsy();
  });

  it('3) Dapat menyukai sebuah restoran', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({id: 1});
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('4) Tidak menambahkan restoran lagi ketika sudah disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});
    await FavoriteRestaurantIdb.putRestaurant({id: 1});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{id: 1}]);
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('5) Tidak menambahkan restoran jika tidak ada id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
