import { Home } from "../components/pages/home";
import { Login } from "../components/pages/login";
import { Register } from "../components/pages/register";
import { AddProduct } from "../components/pages/add-product"
import { EditProduct } from "../components/pages/edit-product"

export const routes = [
  {
    strict: true,
    path: '/register',
    component: Register,
    onAuthRoute: '/',
  },
  {
    strict: true,
    path: '/login',
    component: Login,
    onAuthRoute: '/',
  },
  {
    strict: true,
    path: '/',
    component: Home,
    authPage: '/register',
  },
  {
    strict: true,
    path: "/create",
    component: AddProduct,
    authPage: '/register',
  },
  {
    strict: true,
    path: "/edit/:id",
    component: EditProduct,
    authPage: '/register',
  }
];
