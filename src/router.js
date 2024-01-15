import Home from "./pages/Home";
import SignIn from "./Auth/Sign-in";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/sign-in", component: SignIn, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
