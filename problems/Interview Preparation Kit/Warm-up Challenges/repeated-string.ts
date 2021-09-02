function repeatedString(s: string, n: number): number {
  // Write your code here
  
  let numberOfRepetitions = 0;
  
  const completeLoops = Math.floor(n / s.length);
  
  // ? How many a's exists in a single subs?
  let numberOfAsInASub = 0;
  
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === 'a') {
      numberOfAsInASub += 1;
    }
  }
  
  numberOfRepetitions = numberOfAsInASub * completeLoops;
  
  // Calculate the rest
  const restOfString = n % s.length;
  
  for (let i = 0; i < restOfString; i += 1) {
    if (s[i] === 'a') {
      numberOfRepetitions += 1;
    }
  }
  
  return numberOfRepetitions;
}
