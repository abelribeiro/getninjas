export default function label({ htmlFor, text }) {
  const el = document.createElement('label');
  el.htmlFor = htmlFor;
  el.innerText = text;
  return el;
}
