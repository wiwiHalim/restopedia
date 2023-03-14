/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <div id="restaurantitem" class="restaurantItem">
      <img class="restaurant_img skeleton" src="./images/placeholder-small.jpg" alt="skeleton-img">
      <h3 class="restaurant__title skeleton skeleton_text"></h3>
      <p class="skeleton skeleton_text"></p>
      <p class="skeleton skeleton_text"></p>
      <p class="skeleton skeleton_text"></p>
      <p class="skeleton skeleton_text"></p>
      <p class="skeleton skeleton_text"></p>
      <p class="skeleton skeleton_text"></p>
      <p class="skeleton skeleton_text"></p>
    </div>
    `;
  }
  return template;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div id="restaurantitem" class="restaurantItem">
    <img class="restaurant_img lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name || '-'}">
    <h3 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
    <p>${restaurant.city}</p>
    <p>⭐️ ${restaurant.rating}</p>
    <p>${restaurant.description}</p>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div id="restaurantdetail" class="restaurantDetail">
    <img class="restaurant_detail_image lazyload"
      data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    <h3 class="restaurant_detail_name">${restaurant.name}</h3>
    <p>⭐️ ${restaurant.rating}</p>
    <p>${restaurant.address}, ${restaurant.city}</p>

    <h4>Description :</h4>
    <p>${restaurant.description}</p>

    <h4>Category :</h4>
    <p>${restaurant.categories.reduce((show, value) => show.concat(`<li>- ${value.name} </li>`), '')}</p>

    <h4>Foods :</h4>
    <p>${restaurant.menus.foods.reduce((show, value) => show.concat(`<li>- ${value.name} </li>`), '')}</p>
    <h4>Drinks :</h4>
    ${restaurant.menus.drinks.reduce((show, value) => show.concat(`<li>- ${value.name} </li>`), '')}

    <h4>Reviews :</h4>
    ${restaurant.customerReviews.reduce((show, value) => show.concat(`
      <p>----------</p>
      <p>${value.name}</p>
      <p>${value.review}</p>
      <p>${value.date}</p>
      

      `), '')}
    <p>----------</p>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createSkeletonRestaurantTemplate,
};
