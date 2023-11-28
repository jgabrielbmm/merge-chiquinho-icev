export function insertionSort(arr: number[], size: number): number[]{
  for(let i = 1; i < size; i++){
    if(arr[i] < arr[i-1]){
      let swapNumber = arr[i]
      let y = i - 1
      while(swapNumber < arr[y] && y >= 0){
        arr[y+1] = arr[y]
        y--
      }
      arr[y+1] = swapNumber
    }
  }

  return arr
}

// console.log(insertionSort([2,5,3, 1, 4, 6], 6))
console.time("Execution Time Insertion Sort")
insertionSort([4,2,7,12,21,5,88,19,54], 9)
console.timeEnd("Execution Time Insertion Sort")
