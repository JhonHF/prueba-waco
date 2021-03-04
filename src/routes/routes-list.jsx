import { Home } from "../components/pages/home";
import { Login } from "../components/pages/login";
import { Register } from "../components/pages/register";


export const routes = [
  {
    strict: true,
    path: '/',
    component: Home,
  },
  {
    strict: true,
    path: '/register',
    component: Register,
    onAuthRoute: '/temp',
  },
  {
    strict: true,
    path: '/login',
    component: Login,
    onAuthRoute: '/temp',
  },
  {
    strict: true,
    path: '/temp',
    component: Home,
    authPage: '/login',
  }
];
