//it contains all the sorting algorithms in order
//1.Bubble Sort
//2.Selection Sort
//3.Insertion Sort
//4.Merge Sort
//5.Quick Sort

// sleep
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
//Bubble Sort
export async function bubbleSort(arr, speed, setSorting) {
    const n = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        // Update the sorting state with the indices of elements being compared
        setSorting([i, i + 1]);
  
        if (arr[i] > arr[i + 1]) {
          // Swap elements
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
        // Delay for visualization
        await sleep(speed);
      }
    } while (swapped);
  }

//Selection Sort
export async function selectionSort(arr, speed, setSorting) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        // Update the sorting state with the indices of elements being compared
        setSorting([minIndex, j]);
  
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
        // Delay for visualization
        await sleep(speed);
      }
      // Swap elements
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

//Insertion Sort
export async function insertionSort(arr, speed, setSorting) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      let current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        // Update the sorting state with the indices of elements being compared
        setSorting([j, j + 1]);
  
        // Shift elements to the right
        arr[j + 1] = arr[j];
        j--;
        // Delay for visualization
        await sleep(speed);
      }
      arr[j + 1] = current;
    }
  }

//Merge Sort
export async function mergeSort(arr, speed, setSorting) {
    // Merge function
    const merge = async (left, right) => {
      let result = [];
      let i = 0, j = 0;
  
      while (i < left.length && j < right.length) {
        // Update the sorting state with the indices of elements being compared
        setSorting([left[i], right[j]]);
  
        if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
        // Delay for visualization
        await sleep(speed);
      }
  
      return result.concat(i < left.length ? left.slice(i) : right.slice(j));
    };
  
    // Merge sort helper function
    const mergeSortHelper = async (arr) => {
      if (arr.length <= 1) return arr;
  
      const mid = Math.floor(arr.length / 2);
      const left = await mergeSortHelper(arr.slice(0, mid));
      const right = await mergeSortHelper(arr.slice(mid));
  
      return await merge(left, right);
    };
  
    const sortedArray = await mergeSortHelper(arr);
  
    // Copy sortedArray back to the original arr
    sortedArray.forEach((val, idx) => {
      arr[idx] = val;
    });
  }
  

//Quick Sort
export async function quickSort(arr, speed, setSorting) {
    if (arr.length <= 1) return arr;
  
    // Function to partition the array
    const partition = async (arr, low, high) => {
      const pivot = arr[high];
      let i = low - 1;
  
      for (let j = low; j < high; j++) {
        // Update the sorting state with the indices of elements being compared
        setSorting([j, high]);
  
        if (arr[j] < pivot) {
          i++;
          // Swap arr[i] and arr[j]
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        // Delay for visualization
        await sleep(speed);
      }
  
      // Swap arr[i+1] and arr[high] (or pivot)
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      return i + 1;
    };
  
    // Quick sort helper function
    const quickSortHelper = async (arr, low, high) => {
      if (low < high) {
        const pi = await partition(arr, low, high);
  
        // Recursively sort elements before partition and after partition
        await quickSortHelper(arr, low, pi - 1);
        await quickSortHelper(arr, pi + 1, high);
      }
    };
  
    await quickSortHelper(arr, 0, arr.length - 1);
  }
  
  