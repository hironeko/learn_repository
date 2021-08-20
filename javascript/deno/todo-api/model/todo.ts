import { toMap, fromMap } from "./utils.ts"
import { uuid } from "./../deps.ts";

interface Todo {
  "id": string,
  "done": boolean,
  "title": string,
  "createdAt": string,
  "updatedAt": string
}

const FILE_PATH = "./db/todos.json";

export async function getAll(): Promise<Todo[]> {
  const data = await Deno.readFile(FILE_PATH);
  const decorder = new TextDecoder();
  return JSON.parse(decorder.decode(data));
}

type Result<T> = [T, undefined] | [undefined, Error];

export async function get({ id }: Pick<Todo, "id">): Promise<Result<Todo>> {
  const todos = await getAll();
  const todo = toMap(todos).get(id);
  if (!todo) {
    return [undefined, new Error("Cannot find item")];
  }
  return [todo, undefined];
}

export async function create(
  { title }: Pick<Todo, "title">
): Promise<true> {
  const todos = await getAll();
  const id = uuid.generate();
  const now = new Date().toISOString();

  await updateAll([
    ...todos,
    {
      id,
      done: false,
      title,
      createdAt: now,
      updatedAt: now
    }
  ]);
  return true;
}

async function updateAll(todos: Todo[]): Promise<true> {
  const encoder = new TextEncoder();
  Deno.writeFile(FILE_PATH, encoder.encode(JSON.stringify(todos)))
  return true;
}

export async function update(params: Partial<Todo> & Pick<Todo, "id">): Promise<Result<true>> {
  const todos = await getAll();
  const todosMap = toMap(todos);
  const current = todosMap.get(params.id);

  if (!current) {
    return [undefined, new Error("cannot find item")];
  }

  todosMap.set(params.id, {
    ...current, ...params, updatedAt: new Date().toISOString()
  });

  await updateAll(fromMap(todosMap));

  return [true, undefined];
}

export async function remove({ id }: Pick<Todo, "id">): Promise<Result<true>> {
  const todos = await getAll();
  const todosMap = toMap(todos);

  if (!todosMap.has(id)) {
    return [undefined, new Error("cannot find item")];
  }

  todosMap.delete(id);
  await updateAll(fromMap(todosMap));
  return [true, undefined];
}