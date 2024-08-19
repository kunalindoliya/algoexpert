/**
 * Implement a MinHeap class that supports
 * 1. Building a min heap from an input array of integers
 * 2. inserting integers in the heap
 * 3. Removing the heap's minimum/root value
 * 4. Peeking at heap's minimum/root value
 * 5. sifting integers up and down the heap which is to be used when inserting and removing values respectively.
 * e.g [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8]
 * current node = i, leftChild= 2i+1, rightChild = 2i+2, parent = floor ((i-1)/2)
 */

class MinHeapConstruction {
    /**
     * @type number[]
     */
    static heap;

    /**
     *
     * @param{number[]} array
     */
    constructor(array) {
        MinHeapConstruction.heap = MinHeapConstruction.buildHeap(array);
    }

    /**
     * @param{number[]} array
     * @return{number[]}
     * Time: O(n) | Space: O(1) because we use sift down
     */
    static buildHeap(array) {
        let firstParentIdx = Math.floor((array.length - 2) / 2);
        for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
            this.siftDown(currentIdx, array.length - 1, array);
        }
        return array;
    }

    /**
     *
     * @param{number} currentIdx
     * @param{number} endIdx
     * @param{number[]} heap
     * Time: O(log(n)
     */
    static siftDown(currentIdx, endIdx, heap) {
        // in sift down we swap with the minimum of both child if is not already heapified
        let childOneIdx = currentIdx * 2 + 1;
        while (childOneIdx <= endIdx) {
            let childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
            let idxToSwap;
            if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
                idxToSwap = childTwoIdx;
            } else {
                idxToSwap = childOneIdx;
            }
            if (heap[idxToSwap] < heap[currentIdx]) {
                this.swap(idxToSwap, currentIdx, heap);
                currentIdx = idxToSwap;
                childOneIdx = currentIdx * 2 + 1;
            } else {
                break;
            }
        }
    }

    /**
     *
     * @param{number} currentIdx
     * @param{number[]} heap
     * Time: O(log(n)
     */
    static siftUp(currentIdx, heap) {
        // is used for insert a value
        let parentIdx = Math.floor((currentIdx - 1)/2);
        while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
            this.swap(currentIdx, parentIdx, heap);
            currentIdx = parentIdx;
            parentIdx = Math.floor((currentIdx - 1) / 2);
        }
    }

    static swap(i, j, heap) {
        let temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }

    static peak() {
        return this.heap[0];
    }

    static remove() {
        // we swap the root with the last node and then delete last node and then heapify array again
        this.swap(0, this.heap.length - 1, this.heap);
        const poppedValue = this.heap.pop();
        this.siftDown(0, this.heap.length- 1, this.heap);
        return poppedValue;
    }

    static insert(value) {
        // we push the value to last and then heapify it
        this.heap.push(value);
        this.siftUp(this.heap.length -1, this.heap);
    }
}

const obj = new MinHeapConstruction([48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8]);
console.log(MinHeapConstruction.heap);