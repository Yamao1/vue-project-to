import {createRouter, createWebHistory, createWebHashHistory} from "vue-router";

const routerHistory = createWebHashHistory();


import HomePage from '../src/pages/home'
import AboutPage from '../src/pages/about'
import NotFound from '../src/pages/notFound'
import itemAlias from '../src/pages/itemAlias'
import CardStats from "@/components/UI/CardStats";

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/:itemAlias',
      name: 'itemAlias',
      component: itemAlias
    },
    {
      path: '/cardstats',
      name: 'cardstats',
      component: CardStats
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
  ]
})


export default routers;


// {
//   path: '/:PathMatch(.*)*',
//     component: <h1 class="title">404 Not Found</h1>
// },                                                          //страница 404
