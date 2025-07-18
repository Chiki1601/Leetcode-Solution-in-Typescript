class MinHeap {
  heap: number[] = [];

  push(val: number) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop(): number {
    if (this.size() === 1) return this.heap.pop()!;
    const top = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown();
    return top;
  }

  size(): number {
    return this.heap.length;
  }

  private bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] <= element) break;
      this.heap[idx] = this.heap[parentIdx];
      idx = parentIdx;
    }
    this.heap[idx] = element;
  }

  private bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swapIdx = -1;

      if (leftIdx < length && this.heap[leftIdx] < element) {
        swapIdx = leftIdx;
      }
      if (
        rightIdx < length &&
        this.heap[rightIdx] < (swapIdx === -1 ? element : this.heap[leftIdx])
      ) {
        swapIdx = rightIdx;
      }
      if (swapIdx === -1) break;

      this.heap[idx] = this.heap[swapIdx];
      idx = swapIdx;
    }

    this.heap[idx] = element;
  }
}

class MaxHeap {
  heap: number[] = [];

  push(val: number) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop(): number {
    if (this.size() === 1) return this.heap.pop()!;
    const top = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown();
    return top;
  }

  size(): number {
    return this.heap.length;
  }

  private bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] >= element) break;
      this.heap[idx] = this.heap[parentIdx];
      idx = parentIdx;
    }
    this.heap[idx] = element;
  }

  private bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swapIdx = -1;

      if (leftIdx < length && this.heap[leftIdx] > element) {
        swapIdx = leftIdx;
      }
      if (
        rightIdx < length &&
        this.heap[rightIdx] > (swapIdx === -1 ? element : this.heap[leftIdx])
      ) {
        swapIdx = rightIdx;
      }
      if (swapIdx === -1) break;

      this.heap[idx] = this.heap[swapIdx];
      idx = swapIdx;
    }

    this.heap[idx] = element;
  }
}

function minimumDifference(nums: number[]): number {
  const n = nums.length / 3;
  const maxH = new MaxHeap();
  const minH = new MinHeap();

  let leftSum = 0;
  let rightSum = 0;
  const diff = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    leftSum += nums[i];
    maxH.push(nums[i]);

    const j = nums.length - i - 1;
    rightSum += nums[j];
    minH.push(nums[j]);
  }

  for (let i = 0; i <= n; i++) {
    diff[i] += leftSum;
    diff[n - i] -= rightSum;

    const l = n + i;
    const r = nums.length - n - i - 1;

    if (l < nums.length) {
      maxH.push(nums[l]);
      leftSum += nums[l];
      leftSum -= maxH.pop();
    }

    if (r >= 0) {
      minH.push(nums[r]);
      rightSum += nums[r];
      rightSum -= minH.pop();
    }
  }

  let res = Number.MAX_SAFE_INTEGER;
  for (const d of diff) {
    res = Math.min(res, d);
  }

  return res;
}
