function reverseWordsSentence(sentence) {
    const words = sentence.split(' ');
    const reversedWords = [];
    for (const word of words) {
        reversedWords.push(reverseWord(word));
    }
    return reversedWords.join(' ');
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}
const sentence = "This is a sunny day";
const reversedSentence = reverseWordsSentence(sentence);
console.log(reversedSentence);