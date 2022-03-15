export default async function api(entrypoint) {
  const data = await fetch(entrypoint);
  return data.json();
}
