// A linguagem js aceita apenas arrays unidimensionais; Ela não tem suporte para matrizes.

let averageTemp = [];
averageTemp[0] = [1, 2, 3, 4];
averageTemp[1] = [1, 2, 3, 4];

function printMatrix(myMatrix) {
  for (let i in myMatrix) {
    for (let j in myMatrix[i]) {
      console.log(myMatrix[i][j]);
    }
  }
}

printMatrix(averageTemp); 
console.table(averageTemp)