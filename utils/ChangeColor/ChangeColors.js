export const changeColor = () => {
    const randomNumber = (min,max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  
    const value = randomNumber(0, 128);
    const color = `rgb(${value},${value},${value})`;
    return color;
  }
  