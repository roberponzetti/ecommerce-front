import { CartRoute } from "./cart/route";
import { HomeRoute } from "./container/route";
import { DetailRoute } from "./detail/route";
import { LoginRoute } from "./auth/login/route";
import { RegisterRoute } from "./auth/register/route";

export const routes = [HomeRoute, DetailRoute, LoginRoute, RegisterRoute, CartRoute];
