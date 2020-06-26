import { Application, bold, yellow } from "./deps.ts";
import { router } from "./router.ts";
import { logger, errorHandler } from "./middlewares/mod.ts";

const app = new Application();

app.use(logger);
app.use(errorHandler); // ここじゃないとmessageがでなかった
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(
    bold(`Start listening on`) + yellow(`${hostname ?? "localhost"}:${port}`),
  );
});

const port = parseInt(Deno.env.get("PORT") ?? "8000");

app.listen({ port });
