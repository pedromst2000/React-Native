export const randomStyles = (fontSize, color) => {
//   random FontSize between 30 and 60
const randomFontSize = Math.floor(Math.random() * 30) + 30;
  const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255,
  )}, ${Math.floor(Math.random() * 255)})`;

  return {
    fontSize:  randomFontSize,
    color:  randomColor,
  };
};
