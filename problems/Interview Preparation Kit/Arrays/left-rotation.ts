function rotLeft(a: number[], d: number): number[] {
    for(let i = 0; i < d; i += 1) {
      const shiftedItem = a.shift();

      if (shiftedItem) {
        a.push(shiftedItem)
      }     
    }
    
  return a;
}
