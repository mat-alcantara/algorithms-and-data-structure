// Challenge URL: https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
function hourglassSum(arr: number[][]): number {
  let maxSum: number = -Infinity;
  
   for (let line = 0; line < 4; line += 1) {
     for (let column = 0; column < 4; column += 1) {
       const firstLine = arr[line][column] + arr[line][column + 1] + arr[line][column + 2]
       const middleLine = arr[line + 1][column + 1]
       const lastLine = arr[line + 2][column] + arr[line + 2][column + 1] + arr[line + 2][column + 2];
       
       const sum = firstLine + middleLine + lastLine;
              
       if (sum > maxSum) {
         maxSum = sum;
       }
     }
   }

return maxSum;
}