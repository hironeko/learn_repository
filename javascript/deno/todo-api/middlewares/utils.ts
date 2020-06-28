import { RouterContext, Status } from "../deps.ts";

export async function getParams(ctx: RouterContext) {
  const { value } = await ctx.request.body();

  return {
    ...ctx.params,
    ...value
  };
}

export function handleOK(ctx: RouterContext, data: any) {
  ctx.response.status = Status.OK;
  ctx.response.body = {
    data
  };
}

export function handleError(ctx: RouterContext, error: Error) {
  ctx.response.status = Status.BadRequest;
  ctx.response.body = {
    error: {
      message: error.message,
      stack: error.stack
    }
  }
}