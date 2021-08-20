import { RouterContext } from "../deps.ts";
import { todoModel } from "../model/mod.ts";
import { getParams, handleOK, handleError } from "./utils.ts";

export async function getAll(ctx: RouterContext) {
  const todos = await todoModel.getAll();
  handleOK(ctx, todos);
}

export async function get(ctx: RouterContext) {
  const params = await getParams(ctx);
  const [todo, error] = await todoModel.get(params);
  if (error) {
    handleError(ctx, error)
  }
  handleOK(ctx, todo);
}

export async function create(ctx: RouterContext) {
  console.log(9999);
  const params = await getParams(ctx);
  await todoModel.create(params);
  handleOK(ctx, "success");
}

export async function update(ctx: RouterContext) {
  const params = await getParams(ctx);
  const [_, error] = await todoModel.update(params);
  if (error) {
    return handleError(ctx, error);
  }

  handleOK(ctx, "success");
}

export async function remove(ctx: RouterContext) {
  const params = await getParams(ctx);
  const [_, error] = await todoModel.remove(params);

  if (error) {
    return handleError(ctx, error);
  }

  handleOK(ctx, "success");
}