import { send } from "./Email";

export function setupNewUser(
  info: { name: string },
  callback: (err: any) => void
) {
  const user = {
    name: info.name,
    nameLowercase: info.name.toLowerCase(),
  };

  try {
    return send(user);
  } catch (err) {
    callback(err);
  }
}
