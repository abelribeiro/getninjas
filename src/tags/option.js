export default function option({
  value, text, required,
}) {
  const el = document.createElement('option');
  el.value = value;
  el.innerText = text;
  el.required = required;
  return el;
}
