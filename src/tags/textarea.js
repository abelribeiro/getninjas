import toHtmlFor from '../ultil/toHtmlFor';

export default function textarea({ placeholder, required, name }) {
  const el = document.createElement('textarea');
  el.placeholder = placeholder;
  el.required = required;
  el.id = toHtmlFor(name);
  return el;
}
