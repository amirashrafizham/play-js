/*

  This example is from the JavaScript Data Structures and Algorithms book 
  Chapter 1  
*/

console.log("example linear")
exampleLinear(5)

console.log("example quadratic")
exampleQuadratic(5)

console.log("example cubic")
exampleCubic(5)



function exampleLinear(n) {
  for (let i = 0; i < n; i++){
    console.log(i)
  }
}

function exampleQuadratic(n){
  for (let i=0; i<n; i++){
    console.log(i);
    for (let j=i; j<n; j++){
      console.log(j)
    }
  }
}

function exampleCubic(n){
  for (let i=0; i<n; i++){
     console.log(i);
     for (let j=i; j<n; j++){
       console.log(j);
       for (let k=j; j<n;j++){
         console.log(k)
       }
     } 
  }
}