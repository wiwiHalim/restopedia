/* eslint-disable max-len */
import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import {createRestaurantDetailTemplate} from '../templates/templates-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div class="restaurantdetail judul">Detail Restoran</div>
      <div id="restaurantdetail" class="restaurantdetail"></div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await DataSource.restaurantsDetail(url.id);
    const detailContainer = document.querySelector('#restaurantdetail');
    detailContainer.innerHTML = createRestaurantDetailTemplate(detail);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {

        pictureId: detail.pictureId,
        id: detail.id,
        name: detail.name,
        city: detail.city,
        rating: detail.rating,
        description: detail.description,
      },
    });
  },

};

export default Detail;
