/* eslint-disable max-len */
import DataSource from '../../data/data-source';
import {createRestaurantItemTemplate, createSkeletonRestaurantTemplate} from '../templates/templates-creator';

const Home = {
  async render() {
    return `
    <div id="restaurantlist" class="restaurantList">${createSkeletonRestaurantTemplate(8)}</div>
    `;
  },

  async afterRender() {
    const restaurants = await DataSource.restaurantsDb();
    const restaurantContainer = document.querySelector('#restaurantlist');
    restaurantContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },

};

export default Home;
