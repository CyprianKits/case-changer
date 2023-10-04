function toSentenceCase(name) {
    // Split the name into words
    const words = name.split(' ');
  
    // Convert each word to sentence case
    const sentenceCaseWords = words.map((word) => {
      // Ensure the word is not an empty string
      if (word.length > 0) {
        // Convert the first character to uppercase and the rest to lowercase
        const firstChar = word.charAt(0).toUpperCase();
        const restChars = word.slice(1).toLowerCase();
        return firstChar + restChars;
      } else {
        return ''; // Handle multiple spaces/empty words
      }
    });
  
    // Join the words back together with spaces
    const sentenceCaseName = sentenceCaseWords.join(' ');
  
    // Return the sentence case name
    return sentenceCaseName;
  }

  module.exports = toSentenceCase;
  
  