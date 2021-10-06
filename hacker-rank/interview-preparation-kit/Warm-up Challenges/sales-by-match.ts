/*
* Problem URL: https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
*/

// Solution
function sockMerchant(n: number, ar: number[]): number {
    // First i'll sort the array using quickSort
    const partition = (arr: number[], left: number, right: number) => {
        const pivot = arr[right];
        let i = left;
        for (let j = left; j < right; j++) {
            if (arr[j] <= pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
      }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    
    return i;
    }


    const quicksort = (arr: number[], left: number, right: number) => {
      if (left < right) {
          const pivot = partition(arr, left, right);
          quicksort(arr, left, pivot - 1);
          quicksort(arr, pivot + 1, right);
      }
    }
    
    quicksort(ar, 0, n - 1);
    
    // find same numbers
    let pairs: number = 0;
    
    // If it's a pair, it will jump the two numbers and add +1 to pairs. It it's not a pair, it will check the next number.
    for (let i = 0; i < n -1; i += 2) {
      if (ar[i] === ar[i+1]) {
        pairs += 1;
      } else {
        i -= 1;
      }
    }
    
    return pairs;
}
