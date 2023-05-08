
export const randomWords = () => {
    const words = ["casa", "banco", "supermercado", "escalera", "tractor", "auriculares", "maceta", "ordenador"];
    const randomIndex = Math.floor(Math.random() * words.length);
    let upperWord = words[randomIndex];
    return upperWord.toUpperCase();
}
  


