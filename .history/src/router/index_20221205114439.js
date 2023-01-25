import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductsView from '../views/ProductsView.vue';
import ClientsView from '../views/ClientsView.vue';
import ContactView from '../views/ContactView.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/testimonial',
    name: 'testimonial',
    component: ClientsView
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: ContactView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
