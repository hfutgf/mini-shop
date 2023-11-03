import React from "react";

export const Error = React.lazy(() => import("pages/Error"));
export const Basket = React.lazy(() => import("pages/Basket"));
export const Anonim = React.lazy(() => import("pages/Anonim"));
export const Favourite = React.lazy(() => import("pages/Favourite"));
export const Main = React.lazy(() => import("pages/Main"));
export const Profile = React.lazy(() => import("pages/Profile"));
export const Login = React.lazy(() => import("pages/Login"));
export const ProductInfo = React.lazy(() => import("pages/ProductInfo"));

export const routes = [
  {
    component: Basket,
    path: "/basket",
  },
  {
    component: ProductInfo,
    path: "/products/:id",
  },
  {
    component: Anonim,
    path: "/anonim",
  },

  {
    component: Favourite,
    path: "/favourite",
  },
  {
    component: Main,
    path: "/",
  },
  {
    component: Profile,
    path: "/profile",
  },
];
