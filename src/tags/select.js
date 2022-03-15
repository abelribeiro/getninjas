import toHtmlFor from '../ultil/toHtmlFor';

export default function select({ required, name }) {
  const el = document.createElement('select');
  el.required = required;
  el.id = toHtmlFor(name);
  return el;
}
