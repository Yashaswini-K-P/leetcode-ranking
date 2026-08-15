export function getCurrentUsername() {
  const metaTag = document.querySelector('meta[name="current-user"]');

  if (!metaTag || !metaTag.content) {
    console.warn("Current user meta tag is missing or empty.");
    return null;
  }

  return metaTag.content.trim();
}
