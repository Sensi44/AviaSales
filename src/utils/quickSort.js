function swap(arrs, firstIndex, secondIndex) {
  const result = arrs;
  const temp = result[firstIndex];
  result[firstIndex] = result[secondIndex];
  result[secondIndex] = temp;
}

function partition(arr, left, right) {
  const result = arr;
  const pivot = result[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (result[i].price < pivot.price) {
      i++;
    }
    while (result[j].price > pivot.price) {
      j--;
    }
    if (i <= j) {
      swap(result, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  const result = items;
  let index;
  if (result.length > 1) {
    left = typeof left != 'number' ? 0 : left;
    right = typeof right != 'number' ? result.length - 1 : right;
    index = partition(result, left, right);
    if (left < index - 1) {
      quickSort(result, left, index - 1);
    }
    if (index < right) {
      quickSort(result, index, right);
    }
  }
  return result;
}

export default quickSort;
