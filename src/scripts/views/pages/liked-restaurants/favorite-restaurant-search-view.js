/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import {createRestaurantItemTemplate} from '../../templates/templates-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
        <div class="content">
          <h2 class="content__heading judul">Restoran Favoritmu</h2>
          <label for="query" class="judul">Cari Restoran :</label>
          <input id="query" type="text">
          <div id="restaurants" class="restaurants"></div>
        </div>
      `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;
    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Restoran tidak ditemukan</div>';
  }
}

export default FavoriteRestaurantSearchView;
