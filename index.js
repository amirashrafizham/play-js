//exampleLinear(2)
exampleQuadratic(2)



function exampleLinear(n) {
  for (let i = 0; i < n; i++){
    console.log(i)
  }
}

function exampleQuadratic(n){
  for (let i=0; i<n; i++){
    console.log(i);
    for (let j=0; j<n; j++){
      console.log(j)
    }
  }
}