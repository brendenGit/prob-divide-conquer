function countZeroes(iter) {
    if (iter[-1] === 1){
        return 0;
    }
    if (iter[0] === 0){
        return iter.length;
    }
    let leftIdx = 0;
    let rightIdx = iter.length - 1;
    while (leftIdx !== rightIdx){
        const midIdx = Math.floor((leftIdx + rightIdx) / 2)
        if (iter[midIdx] === 1) {
            if (iter[midIdx + 1] === 0) {
                return iter.length - (midIdx + 1)
            } else {
                leftIdx = midIdx + 1;
            }
        } else {
            if (iter[midIdx - 1] === 1) {
                return iter.length - midIdx
            } else {
                rightIdx = midIdx - 1;
            }
        }
    }
}

module.exports = countZeroes