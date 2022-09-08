function mergeSort(array) {
    // Correct usage
    if (!Array.isArray(array) || array.length === 0) return "Please provide an numbers of array";
    if (array.length === 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArray, rightArray) {
    const result = [];

    let countLeft = 0;
    let countRight = 0;

    while (countLeft < leftArray.length && countRight < rightArray.length) {
        if (leftArray[countLeft] < rightArray[countRight]) {
            result.push(leftArray[countLeft]);
            countLeft++;
        } else {
            result.push(rightArray[countRight]);
            countRight++;
        }
    }

    while (countLeft < leftArray.length) {
        result.push(leftArray[countLeft]);
        countLeft++;
    }

    while (countRight < rightArray.length) {
        result.push(rightArray[countRight]);
        countRight++;
    }

    return result;
}

console.log(mergeSort([6, 0, 5, 12, 33, 31, 100, 67, 52, 18, 63]));