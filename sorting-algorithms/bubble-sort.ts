export function bubbleSort(arr: number[], size: number): number[]{
  if(size == 0) return arr
  for(let i = 0; i < size - 1; i++){
    if(arr[i] > arr[i + 1])
      [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
  }
 return bubbleSort(arr, size - 1)
}

console.time("Execution Time Bubble Sort")
console.log(bubbleSort([4,2,7,12,21,5,88,19,54], 9))
console.timeEnd("Execution Time Bubble Sort")