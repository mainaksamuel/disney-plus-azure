export default function getImagePath(endpoint: string, fullsize?: boolean) {
  return endpoint
    ? `https://image.tmdb.org/t/p/${fullsize ? "original" : "w500"}/${endpoint}`
    : "/picture-placeholder.png";
}
