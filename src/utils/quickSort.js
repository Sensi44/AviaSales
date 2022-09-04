function partition(arr, start, end) {
  const pivotValue = arr[end].price;

  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i].price < pivotValue) {
      [arr[i].price, arr[pivotIndex].price] = [
        arr[pivotIndex].price,
        arr[i].price,
      ];
      pivotIndex++;
    }
  }
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function quickSortIterative(arr) {
  const stack = [];
  stack.push(0);
  stack.push(arr.length - 1);
  while (stack[stack.length - 1] >= 0) {
    const end = stack.pop();
    const start = stack.pop();
    const pivotIndex = partition(arr, start, end);

    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }
}

export default quickSortIterative;
