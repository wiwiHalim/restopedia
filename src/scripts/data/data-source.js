/* eslint-disable require-jsdoc */
import API_ENDPOINT from '../globals/api-endpoint';

class DataSource {
  static async restaurantsDb() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    console.log('responseJson restaurantsDb:', responseJson);
    return responseJson.restaurants;
  }

  static async restaurantsDetail(id) {
    // eslint-disable-next-line new-cap
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log('responseJson restaurantsDetail:', responseJson);
    return responseJson.restaurant;
  }
}

export default DataSource;
