 const message = [ 'c', 'a', 'k', 'e', ' ',
 'p', 'o', 'u', 'n', 'd', ' ',
 's', 't', 'e', 'a', 'l' ];

 /**
  * 
  * @param {]} messageArray 
  */
function reverseWords(messageArray) {
    /**
     * reverse characters in place,
     * returns right word order at least.
     */
    reverseCharacters(messageArray, 0, messageArray.length - 1);

    /**
     * Reverse each character in each word.
     * 
     */

    let currentStartIndex = 0;
    for (let index = 0; index < messageArray.length; index++) {
        /**
         * We find the end of the word if the item at the next index is " "
         * or the end of the array
         */
        if (index === messageArray.length || messageArray[index] === " ") {
            // next word is ahead
            reverseCharacters(messageArray, currentStartIndex, index - 1)
            currentStartIndex = index + 1
        }
        
    }
}

reverseWords(message)
console.log(message)


function reverseCharacters(arr, leftIndex, rightIndex){
    while(leftIndex < rightIndex){
        const temp = arr[leftIndex]
        arr[leftIndex] = arr[rightIndex]
        arr[rightIndex] = temp

        leftIndex++
        rightIndex--
    }
}