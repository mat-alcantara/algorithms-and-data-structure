function countingValleys(steps: number, path: string): number {
  let valleys = 0;
  let counter = 0;
  
  for (let i = 0; i < path.length; i += 1) {
    if (path[i] === 'U') {
      counter += 1;
      
      if (counter === 0) {
        valleys += 1
      }
    } else {
      counter -= 1;
    }
  }
  
  return valleys;
}