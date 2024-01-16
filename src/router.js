import Home from "./pages/Home";
import SignIn from "./Auth/Sign-in";
import SignUp from "./Auth/sign-up";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/sign-in", component: SignIn, layout: null },
  { path: "/sign-up", component: SignUp, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
