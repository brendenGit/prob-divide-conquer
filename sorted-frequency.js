function sortedFrequency(iter, searchValue) {
    function findFirstOccurrence() {
        let leftIdx = 0;
        let rightIdx = iter.length - 1;
        let result = -1;

        while (leftIdx <= rightIdx) {
            const midIdx = Math.floor((leftIdx + rightIdx) / 2);

            if (iter[midIdx] === searchValue) {
                result = midIdx;
                rightIdx = midIdx - 1;
            } else if (iter[midIdx] < searchValue) {
                leftIdx = midIdx + 1;
            } else {
                rightIdx = midIdx - 1;
            }
        }
        return result;
    }

    function findLastOccurrence(firstOccurrence) {
        let leftIdx = firstOccurrence;
        let rightIdx = iter.length - 1;
        let result = -1;

        while (leftIdx <= rightIdx) {
            const midIdx = Math.floor((leftIdx + rightIdx) / 2);

            if (iter[midIdx] === searchValue) {
                result = midIdx;
                leftIdx = midIdx + 1;
            } else if (iter[midIdx] < searchValue) {
                leftIdx = midIdx + 1;
            } else {
                rightIdx = midIdx - 1;
            }
        }
        return result;
    }

    const firstOccurrence = findFirstOccurrence();
    if (firstOccurrence === -1) {
        return 0;
    }

    const lastOccurrence = findLastOccurrence(firstOccurrence);
    return lastOccurrence - firstOccurrence + 1;
}

module.exports = sortedFrequency