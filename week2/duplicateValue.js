//Bonus
//Solution 1  ----filter-----
const uniqueValues = (arr) => arr.filter((v, i) => arr.indexOf(v) === i);   

console.log(uniqueValues([1, 2, 2, 3, 3, 4, 5, 5]));
// Solution 2  ---- for loop-----
function removeDuplicateValues(arr) {
    let uniqueValues = [];
    for (var i in arr) {
        if (uniqueValues.indexOf(arr[i]) == -1) {
            uniqueValues.push(arr[i]);
        }
    }
    return uniqueValues
}
console.log(removeDuplicateValues(['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']));
