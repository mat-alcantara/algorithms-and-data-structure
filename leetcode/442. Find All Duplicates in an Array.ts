function findDuplicates(nums: number[]): number[] {
  const appearsTwice = [];
  
  for (let i = 0; i < nums.length; i += 1) {
    const index = Math.abs(nums[i]) - 1;
    
    if (nums[index] < 0) {
      appearsTwice.push(index + 1);
    }
    
    nums[index] = -nums[index]
  }
  
  return appearsTwice;
};