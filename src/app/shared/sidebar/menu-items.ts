import { RouteInfo } from "./sidebar.metadata";

export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "Personal",
    icon: "mdi mdi-dots-horizontal",
    class: "nav-small-cap",
    extralink: true,
    submenu: []
  },

  {
    path: "/dashboard/classic",
    title: "Dashboard",
    icon: "mdi mdi-adjust",
    class: "",
    extralink: false,
    submenu: []
  },
  {
    path: "/user",
    title: "Coustomer",
    icon: "mdi mdi-adjust",
    class: "",
    extralink: false,
    submenu: []
  },
  {
    path: "/affiliate",
    title: "Affiliate",
    icon: "mdi mdi-adjust",
    class: "",
    extralink: false,
    submenu: []
  },
  {
    path: "/vendor",
    title: "Vendor",
    icon: "mdi mdi-adjust",
    class: "",
    extralink: false,
    submenu: []
  },


  {
    path: "",
    title: "Ecommerce Pages",
    icon: "mdi mdi-cart-outline",
    class: "has-arrow",
    extralink: false,
    submenu: [
      {
        path: "/ecom/products",
        title: "Products",
        icon: "mdi mdi-cards-variant",
        class: "",
        extralink: false,
        submenu: []
      },
      {
        path: "/ecom/cart",
        title: "Cart",
        icon: "mdi mdi-cart",
        class: "",
        extralink: false,
        submenu: []
      },
      {
        path: "/ecom/edit",
        title: "Edit Products",
        icon: "mdi mdi-cart-plus",
        class: "",
        extralink: false,
        submenu: []
      },
      {
        path: "/ecom/details",
        title: "Product Details",
        icon: "mdi mdi-camera-burst",
        class: "",
        extralink: false,
        submenu: []
      },
      {
        path: "/ecom/orders",
        title: "Orders",
        icon: "mdi mdi-chart-pie",
        class: "",
        extralink: false,
        submenu: []
      },
      {
        path: "/ecom/checkout",
        title: "Checkout",
        icon: "mdi mdi-clipboard-check",
        class: "",
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: "",
    title: "Authentication",
    icon: "mdi mdi-account-circle",
    class: "has-arrow",
    extralink: false,
    submenu: [
      {
        path: "/authentication/login",
        title: "Login",
        icon: "mdi mdi-account-key",
        class: "",
        extralink: false,
        submenu: []
      },
      {
        path: "/authentication/login2",
        title: "Login 2",
        icon: "mdi mdi-account-key",
        class: "",
        extralink: false,
        submenu: []
      },
      {
        path: "/authentication/signup",
        title: "Register",
        icon: "mdi mdi-account-plus",
        class: "",
        extralink: false,
        submenu: []
      },
      {
        path: "/authentication/signup2",
        title: "Register 2",
        icon: "mdi mdi-account-plus",
        class: "",
        extralink: false,
        submenu: []
      },
      {
        path: "/authentication/404",
        title: "404",
        icon: "mdi mdi-alert-outline",
        class: "",
        extralink: false,
        submenu: []
      },
      {
        path: "/authentication/lock",
        title: "Lockscreen",
        icon: "mdi mdi-account-off",
        class: "",
        extralink: false,
        submenu: []
      }
    ]
  }
];
