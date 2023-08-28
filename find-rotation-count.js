function findRotationCount(iter) {
    const length = iter.length;
    let leftIdx = 0;
    let rightIdx = length - 1;

    while (leftIdx <= rightIdx) {
        if (iter[leftIdx] <= iter[rightIdx]) {
            return leftIdx;
        }

        const midIdx = Math.floor((leftIdx + rightIdx) / 2);

        const nextIdx = (midIdx + 1) % length;
        const prevIdx = (midIdx + length - 1) % length;

        if (iter[midIdx] <= iter[nextIdx] && iter[midIdx] <= iter[prevIdx]) {
            return midIdx;
        } else if (iter[midIdx] <= iter[rightIdx]) {
            rightIdx = midIdx - 1;
        } else if (iter[midIdx] >= iter[leftIdx]) {
            leftIdx = midIdx + 1;
        }
    }

    return 0;
}

module.exports = findRotationCount