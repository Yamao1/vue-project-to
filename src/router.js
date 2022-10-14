import {createRouter, createWebHistory, createWebHashHistory} from "vue-router";

const routerHistory = createWebHashHistory();


import HomePage from '../src/pages/home'
import AboutPage from '../src/pages/about'
import NotFound from '../src/pages/notFound'

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
      path: '/:CatchAll(.*)',
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
