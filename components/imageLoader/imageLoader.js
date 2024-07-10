export const imageLoader = ({ src, width, quality }) => {
  return `https://zanapo.cz/${src}?w=${width}&q=${quality || 75}`;
};
