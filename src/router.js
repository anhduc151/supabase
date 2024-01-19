import Home from "./pages/Home";
import SignIn from "./Auth/Sign-in";
import SignUp from "./Auth/sign-up";
import Create from "./pages/create";
import About from "./pages/about";
import Contact from "./pages/contact";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/sign-in", component: SignIn, layout: null },
  { path: "/sign-up", component: SignUp, layout: null },
  { path: "/create", component: Create },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
