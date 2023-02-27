export function send(user: { name: string; nameLowercase: string }) {
  console.log("Sending.....",user.name);

  return user.nameLowercase.toUpperCase();
}
