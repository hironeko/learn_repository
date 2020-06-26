import { Router } from "./deps.ts";
import { routerHnder } from "./middlewares/mod.ts";

export const router = new Router();

router.get("/", (ctx) => {
  routerHnder.getHome(ctx);
});
