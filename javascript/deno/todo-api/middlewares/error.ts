import { Context, isHttpError, Status } from "./../deps.ts";

export async function errorHandler(ctx: Context, next: () => Promise<void>) {
  try {
    await next();
  } catch (error) {
    if (!isHttpError(error)) {
      ctx.response.status = Status.InternalServerError;
      ctx.response.body = {
        error: {
          message: error.message,
          stack: error.stack,
        },
      };
      return;
    }
  }
}
