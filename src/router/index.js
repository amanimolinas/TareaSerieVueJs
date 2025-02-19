import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddTask from '@/views/AddTask.vue';
import TaskList from '../views/TaskList.vue';
import CombinedView from '@/views/CombinedView.vue';
// Importa los otros componentes en esta sección

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tasklist',
    name: 'TaskList',
    component: TaskList
  },
  {
    path: '/addtask',
    name: 'AddTask',
    component: AddTask
  },
  {
    path: '/combinedview',
    name: 'CombinedView',
    component: CombinedView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;