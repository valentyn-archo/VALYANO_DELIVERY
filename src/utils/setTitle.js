export default function setTitle(title) {
  const pageTitle = title.slice(0, 1).toUpperCase() + title.slice(1);

  document.title = `${pageTitle} | Good Fast Food`;
}
