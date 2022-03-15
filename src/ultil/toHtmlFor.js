export default function toHtmlFor(text) {
  return text.replaceAll(' ', '_').toLowerCase();
}
