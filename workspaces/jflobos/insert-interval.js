/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval];
    }
    const updatedIntervals = [];
    let intervalOpen = false;
    let usedInterval = false;
    const [begin, end] = newInterval;
    let insertedInterval = [];
    for (let i = 0; i < intervals.length; i++) {
        const [first, last] = intervals[i];
        if (!intervalOpen) {
            if (end < first && !usedInterval) {
                updatedIntervals.push(newInterval);
                usedInterval = true;
                updatedIntervals.push(intervals[i]);
            } else if (last < begin) {
            updatedIntervals.push(intervals[i]);
            } else if (first > end) {
                updatedIntervals.push(intervals[i]);
            } else if (begin >= first && first < last) {
                insertedInterval.push(first);
                intervalOpen = true;
            } else if (begin <= first && first < last) {
                insertedInterval.push(Math.min(first, begin));
                intervalOpen = true;
            }
        }
        if (intervalOpen) {
            if (end < first) {
                insertedInterval.push(end);
                intervalOpen = false;
                updatedIntervals.push(insertedInterval);
                usedInterval = true;
                updatedIntervals.push(intervals[i]);
            } else if (end >= first && (last >= end)) {
                insertedInterval.push(Math.max(last, end));
                intervalOpen = false;
                updatedIntervals.push(insertedInterval);
                usedInterval = true;
            }
        }
    }
    if (intervalOpen) {
        insertedInterval.push(end);
        updatedIntervals.push(insertedInterval);
    } else if (!usedInterval) {
        updatedIntervals.push(newInterval);
    }

    return updatedIntervals;
};
