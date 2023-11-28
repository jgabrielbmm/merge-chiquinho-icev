export function merge(arr: number[], initial: number, middle: number, final: number){
  // aux array
  let auxArr = new Array(arr.length)

  // first step is to make a copy of array
  for(let i = 0; i < arr.length; i++){
    auxArr[i] = arr[i]
  }

  // create the pointers 
  let left = initial
  let right = middle + 1
  let current = initial

  // Now let's sort the array
  while(left <= middle && right <= final){
    if(auxArr[left] <= auxArr[right]){
      arr[current] = auxArr[left]
      left++
    } else {
      arr[current] = auxArr[right]
      right++
    }

    current++
  }

  // Now let's check witch size didn't finish
  while(left <= middle){
    arr[current] = auxArr[left]
    left++
    current++
  }

  while(right <= final){
    arr[current] = auxArr[right]
    right++
    current++
  }
}

export function mergeSort(arr: number[], initial: number, final: number){
  if(initial >= final){
    return
  } else {
    // divide 
    let middle = Math.floor((initial + final)/2)
    // left size
    mergeSort(arr, initial, middle)
    // right size
    mergeSort(arr, middle+1, final)
    // merge
    merge(arr, initial, middle, final)
  }
}

// Time Complexity O(n*log(n)) => T(n) = 2T(n/2) + n => making n = 2ˆk 
// Use Master theorem to type T(n) = a*T(n/b) + nˆc recurrence

let arr = [13,6,4,5,54,7,5,2,5,9,22,17,23,5,11,16]
let arr2 = [223,8,4,5,10,11,5,7,8,9,14,17,234,522,110]
let arr3 = [1,3,4,5,10,11,5,7,8,9,14,17,234,522,110]
let arr4 = [4,2,1,8,7,5,5,6]
let arr5 = [133, 425, 244, 385, 236, 236, 328, 1000, 299, 325]
let arr6 = [425, 244, 385, 236, 236, 328, 1000, 299, 325]

mergeSort(arr4, 0, arr4.length - 1)
console.log(arr4)

