/**
 * A function that takes  a list and reverses
 * leverages two pointer technique
 * O(n) time and O(1) space complexity
 * @param {A} list 
 */

function reverseListInPlace(list){
    let leftIndex = 0;
    let rightIndex = list.length - 1

    while(leftIndex<rightIndex){
        const temp = list[leftIndex]
        list[leftIndex] = list[rightIndex]
        list[rightIndex] = temp

        leftIndex++
        rightIndex--
    }
}

module.exports = {
    reverseListInPlace
}