export const randomMovieID = () => {
  // generate a random number between 1 and 10
  const random = Math.floor(Math.random() * 10) + 1;

  return random;
};
