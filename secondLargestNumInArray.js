// find second largetst number in the
//Array[1,2,5,4,3]
function secondLargestNumInArray(arr){
  arr.sort();
  console.log("second largest num in arr",arr[arr.length-2])
  return (arr[arr.length-2]);
}
secondLargestNumInArray([1,4,3,2,5,6,7])

