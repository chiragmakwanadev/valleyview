const convertToRem = (fontsize) => {
  return parseInt(fontsize, 10) / 16;
};

const Clamp = (minSize, maxSize) => {
  const minVw = convertToRem("280");
  const maxVw = convertToRem("1920");
  const slope = (maxSize - minSize) / (maxVw - minVw);
  const yAxisIntersection = -minVw * slope + minSize;
  const preferredValue = `${yAxisIntersection}rem + ${slope * 100}vw`;
  return `clamp(${minSize}rem, ${preferredValue} , ${maxSize}rem)`;
};

export default Clamp;
