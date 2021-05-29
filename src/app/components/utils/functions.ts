export function summarize(description: string) {
  if (description.length <= 100) {
    return description;
  }
  return description.slice(0, 100) + '...';
}

export function openInNewTab(url: string) {
  window.open(url, '_blank');
}

export function stringToArray(text: string) {
  return text.split(', ');
}

export function extractCategory(url: string) {
  const paths = url.split('/');
  return paths[paths.length - 1];
}

export function filterCategories(child: any, key: string, category: string) {
  const lowerCased = child[key].map((item: string) => item.toLowerCase());
  return lowerCased.includes(category.toLowerCase());
}

export function validateEmail(email: string) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(String(email).toLowerCase());
}
