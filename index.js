// const nemo = ['nemo'];
// function find(array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log("Found NEMO!")
//     }
//     let t1 = performance.now();
//     console.log("Calling nemo took " + (t1 - t0) + " ms time")
//   }
// }
// find(nemo);

// const boxes = [1, 2, 3, 4, 5];

// function pairsOfNumber(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j]);
//     }
//   }
// }

// pairsOfNumber(boxes);

// const array1=['a', 'b','c','d'];
// const array2 =['e','f','g'];
// const array1= [1, 2, 4, 6];
// const array2=[7, 8, 9, 2];

// function arrayEqualValue(arr1, arr2)
// {
//   for (let i =0; i<arr1.length; i++){
//     for (let j=0; j<arr2.length; j++){
//       if (arr1[i] === arr2[j]){
//         return true;  
//       }
//     }
//   }
//   return false;
// }

// let ans = arrayEqualValue(array1, array2);
// console.log(ans)

// This code need O(n^2) time complexity

// const array2 =['e','f','g'];
// const array1=['a', 'b','c','e'];

// function chechSimilarity(arr1, arr2){
//     let map={};
//   for (let i=0;i<arr1.length; i++){
//     if (!map[i]){
//       const item =arr1[i];
//       map[item]= true;
//     }
//   }
//   for (let j =0 ;j<arr2.length; j++){
//     if (map[arr2[j]]){
//       return true;
//     }
//   }
//   return false;
  
// }
// const ans = chechSimilarity(array1, array2)
// console.log(ans);
//Time Complexity of this fucntion is O(n+n)

const array2 =['e','f','g'];
const array1=['a', 'b','c','p'];
function isSimilarElement(arr1, arr2){
 return arr1.some(item => arr2.includes(item))
  
}
const result = isSimilarElement(array1, array2);
console.log(result)