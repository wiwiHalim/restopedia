import Home from '../views/pages/home-page';
import Favorite from '../views/pages/favorite-page';
import Detail from '../views/pages/detail-page';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,

};

export default routes;
