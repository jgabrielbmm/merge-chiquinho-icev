export function selectionSort(arr:number[], size: number): number[]{
  for(let i = 0; i < size; i++){
    let minPointer = i
    for(let y = i+1; y < size; y++){
      if(arr[y] < arr[minPointer]){
        minPointer = y
      }
    }
    [arr[i], arr[minPointer]] = [arr[minPointer], arr[i]]
  }
  return arr
}

console.time("Execution Time Selection Sort")
selectionSort([4,2,7,12,21,5,88,19,54], 9)
console.timeEnd("Execution Time Selection Sort")