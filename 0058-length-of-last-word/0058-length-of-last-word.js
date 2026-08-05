function lengthOfLastWord(s){
    let words=s.trim().split(/\s+/);
    return words[words.length-1].length;
}
console.log(lengthOfLastWord("Hello World"));