function findRotatedIndex(iter, searchValue) {
    const length = iter.length;
    let leftIdx = 0;
    let rightIdx = length - 1;

    while (leftIdx <= rightIdx) {
        const midIdx = Math.floor((leftIdx + rightIdx) / 2);

        if (iter[midIdx] === searchValue) {
            return midIdx;
        }

        if (iter[leftIdx] <= iter[midIdx]) {
            if (searchValue >= iter[leftIdx] && searchValue < iter[midIdx]) {
                rightIdx = midIdx - 1;
            } else {
                leftIdx = midIdx + 1;
            }
        } else {
            if (searchValue > iter[midIdx] && searchValue <= iter[rightIdx]) {
                leftIdx = midIdx + 1;
            } else {
                rightIdx = midIdx - 1;
            }
        }
    }
    return -1;
}

module.exports = findRotatedIndex