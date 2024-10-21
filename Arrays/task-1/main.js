const vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я", "a", "e", "i", "o", "u"];
const word = 'JavaScript';

const countVowels = (word) => {
  return word
  .toLowerCase()
  .split('')
  .filter((letter) => vowels.includes(letter)).length;
};

const vowelCount = countVowels(word);
console.log(vowelCount);