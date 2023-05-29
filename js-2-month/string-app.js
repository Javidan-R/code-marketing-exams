
class NewString {
    constructor(str1, str2) {
      this.str1 = str1;
      this.str2 = str2;
    }
  
    findLongestWord() {
        const words = this.str1.split(' ');
        return words.reduce((longestWord, currentWord) => {
          return currentWord.length > longestWord.length ? currentWord : longestWord;
        }, '');
      }
  
    reverseSentence() {
        const words = this.str1.split(' ');
        return words.reverse().join(' ');
      }
    
    removeRepeatedCharacters() {
        return [...new Set(this.str1)].join('');
      }
    capitalizeFirstLetter() {
        const words = this.str1.split(' ');
        let capitalizedSentence = '';
    
        for (let i = 0; i < words.length; i++) {
          const currentWord = words[i];
          const firstChar = currentWord.charAt(0).toUpperCase();
          const restOfWord = currentWord.slice(1).toLowerCase();
    
          capitalizedSentence += firstChar + restOfWord;
    
          if (i < words.length - 1) {
            capitalizedSentence += ' ';
          }
        }
        return capitalizedSentence;
    }
  
    containsOnlyNumbers() {
        for (let i = 0; i < this.str1.length; i++) {
          const currentChar = this.str1[i];
          if (!(currentChar >= '0' && currentChar <= '9')) {
            return false;
          }
        }
        return true;
      }
  
    replaceSpacesWithDashes() {
      let result = '';
  
      for (let i = 0; i < this.str1.length; i++) {
        const currentChar = this.str1[i];
        if (currentChar === ' ') {
          result += '-';
        } else {
          result += currentChar;
        }
      }
  
      return result;
    }
  
    swapFirstAndLastCharacters() {
      if (this.str1.length < 2) {
        return this.str1;
      }
      const firstChar = this.str1[0];
      const lastChar = this.str1[this.str1.length - 1];
      const middleChars = this.str1.slice(1, -1);
      return lastChar + middleChars + firstChar;
    }
  
    countUppercaseLetters() {
        let count = 0;
        for (let i = 0; i < this.str1.length; i++) {
          const currentChar = this.str1[i];
          if (currentChar >= 'A' && currentChar <= 'Z') {
            count++;
          }
        }
        return count;
      }
  
      mergeStrings() {
        return this.str1.includes(this.str2) ? this.str1 + this.str2 : this.str2 + this.str1;
      }
    
  }
  
  // Usage example:
  const str1 = 'Hello World';
  const str2 = 'lo';
  const string = new NewString(str1, str2);
  
  console.log('1. Cümlədə ən uzun sözü tapmaq üçün bir funksiya yazın.', string.findLongestWord());
  console.log('2. Cümlənin sırasını tərsinə çevirmək üçün bir funksiya yazın.', string.reverseSentence());
  console.log('3. Stringdən təkrarlanan simvolları silən bir funksiya yazın.', string.removeRepeatedCharacters());
  console.log('4. Cümlədəki hər bir sözün ilk hərfini böyük hərf etmək üçün bir funksiya yazın.', string.capitalizeFirstLetter());
  console.log('5. Stringin yalnız rəqəmlərdən ibarət olub-olmadığını yoxlamaq üçün bir funksiya yazın.', string.containsOnlyNumbers());
  console.log('6. Stringdəki bütün boşluqları tirelərlə əvəzləyən funksiya yazın.', string.replaceSpacesWithDashes());
  console.log('7. Stringin ən birinci və sonuncu simvolların yerini dəyişdirən funksiya yazın.', string.swapFirstAndLastCharacters());
  console.log('8. Cümlədəki böyük hərflərin sayını tapan funksiya yazın.', string.countUppercaseLetters());
  console.log('9. Cümlədəki sözlərin yerini dəyişin.', string.mergeStrings());
  