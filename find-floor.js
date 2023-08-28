function findFloor(iter, searchValue) {
    let leftIdx = 0;
    let rightIdx = iter.length - 1;
    if (iter[leftIdx] > searchValue) {
        return -1;
    }
    while (leftIdx !== rightIdx) {
        const midIdx = Math.floor((leftIdx + rightIdx) / 2)
        const middleVal = iter[midIdx]
        if (searchValue > middleVal) {
            leftIdx = midIdx + 1;
            if (iter[leftIdx] <= searchValue) {
                return iter[rightIdx];
            }
        } else if (searchValue < middleVal) {
            rightIdx = midIdx - 1;
            if (iter[rightIdx] <= searchValue) {
                return iter[rightIdx];
            }
        } else if (searchValue === middleVal) {
            return middleVal;
        }
    }
}

module.exports = findFloor