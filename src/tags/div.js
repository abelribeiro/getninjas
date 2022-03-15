export default function div({
  className, id,
}) {
  const el = document.createElement('div');
  el.className = className;
  if (id) el.id = id;
  return el;
}
