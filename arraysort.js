/*We have an array of objects A and an array of indexes B. Reorder objects in array A with given indexes in array B. Do not change array A's length. 

example:


var A = [C, D, E, F, G];
var B = [3, 0, 4, 1, 2];

sort(A, B);
// A is now [D, F, G, C, E]; */

function sort(a, b) {
  var c = new Array(a.length);
  b.forEach((val, i) => {
  c[val] = a[i]; 
  console.log("value of i",i)
  console.log("c after first foreach",c)
  });

  a.forEach((val, i) => { a[i] = c[i]; });
  console.log(a);
}

sort(['c','d','e','f','g'],[3,0,4,1,2]);

//or

/*var A = ['C', 'D', 'E', 'F', 'G'],
    B = [3, 0, 4, 1, 2];
    C = new Array(B.length)
A.forEach(function(value, index) {
    C[B[index]] = value;
});

console.log(C);*/