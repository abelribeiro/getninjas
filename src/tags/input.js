import toHtmlFor from '../ultil/toHtmlFor';

export default function input({
  placeholder, type, required, name,
}) {
  const el = document.createElement('input');
  el.placeholder = placeholder;
  el.type = type || 'text';
  el.required = required;
  el.id = toHtmlFor(name);
  return el;
}
