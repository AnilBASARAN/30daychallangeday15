/* sum of lengths
Write a function sumOfLengths that takes in array of strings and returns the total length of the strings.

You must solve this recursively.

 */

const sumOfLengths = (strings) => {
    if(strings.length == 0 ) return 0;
    return strings.pop().length + sumOfLengths(strings);
  };