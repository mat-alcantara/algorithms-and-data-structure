/*
* Problem URL: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
*/

function jumpingOnClouds(c: number[]): number {
  let jumps = 0;
  
  for (let i = 0; i < c.length; i += 1) {
    if (c[i+2] === 0) {
      i += 1;
      jumps += 1;
    } else if (c[i+1] === 0) {
      jumps += 1
    }
  }
  
  return jumps;
}