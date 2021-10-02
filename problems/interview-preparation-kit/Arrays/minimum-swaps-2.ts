function minimumSwaps(arr: number[]) {
  let swaps = 0;  
  
  for (let i = 0; i < arr.length; i += 1) {
    const actualNumber = arr[i];
    const targetNumber = i + 1;
    
    if (actualNumber === targetNumber) {
      continue;
    }
    
    [arr[arr.indexOf(targetNumber)], arr[i]] = [arr[i], arr[arr.indexOf(targetNumber)]]
            
    swaps += 1;
  }

  return swaps;
}