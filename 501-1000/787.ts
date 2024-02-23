function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, K: number): number {
        const childrens:Array<Array<[number,number]>> = []
        for (let i=0;i<n;i++) {
            childrens.push([])
        }
        flights.forEach(item => {
            const fromNode = item[0]
            const toNode = item[1]
            const distance = item[2]
            childrens[fromNode].push([toNode,distance])
        })

        //const minHeap = new Heap<Node>((a,b) => a.value - b.value);
        const minHeap = new TsHeap<Node>((a,b) => a.value - b.value)
        minHeap.add({
            value:0,
            index:src,
            remain: K + 1,
        })

        while (minHeap.length() > 0) {
            const topNode = minHeap.pop()
            const v = topNode!.index
            const topValue = topNode!.value
            const remain = topNode!.remain

            if (v == dst) {
                return  topValue
            }

            if (remain === 0) {
                continue
            }

            const children = childrens[v]

            children.forEach(item => {
                const toNode = item[0]
                const dist = item[1]
                const l = topValue + dist
                minHeap.add({
                    index:toNode,
                    value: l,
                    remain: remain - 1,
                })
            })
        }
        return -1

};


interface Node{
    index:number
    value:number
    remain: number
}


declare type Comparator<T> = (a:T,b:T) => number

class TsHeap<T>{
    private comparator:Comparator<T>
    private arr:T[] = []

    constructor(comparator:Comparator<T>) {
        this.comparator = comparator
    }

    public length():number {
        return this.arr.length
    }

    public toString() {
        console.log(this.arr)
    }

    private upAdjust(childrenIndex:number) {
        if (childrenIndex == 0) {
            return;
        }

        let parentIndex = Math.floor((childrenIndex-1)/2)
        if (this.comparator(this.arr[parentIndex],this.arr[childrenIndex]) <= 0){
            return
        }

        const tmp = this.arr[parentIndex]
        this.arr[parentIndex] = this.arr[childrenIndex]
        this.arr[childrenIndex] = tmp
        this.upAdjust(parentIndex)
    }

    private downAdjust(parentIndex:number) {
        let children = 2 * parentIndex + 1
        const n = this.arr.length

        if (children >= n) {
            return
        }

        if (((children+1) < n) && (this.comparator(this.arr[children+1],this.arr[children]) < 0)) {
            children += 1
        }

        if (this.comparator(this.arr[parentIndex],this.arr[children]) < 0) {
            return
        }

        if (this.comparator(this.arr[parentIndex],this.arr[children]) > 0){
            const tmp = this.arr[parentIndex]
            this.arr[parentIndex] = this.arr[children]
            this.arr[children] = tmp
        }

        parentIndex = children

        this.downAdjust(parentIndex)
    }

    public buildHeap(arr:T[]) {
        this.arr = arr
        const n = this.arr.length
        for (let i=Math.floor(n / 2)-1;i >= 0; i --) {
            this.downAdjust(i)
        }
    }

    public pop(): (T | null) {
        const n = this.arr.length
        if (n === 0) return null
        // swap the first and the last
        const tmp = this.arr[0]
        this.arr[0] = this.arr[n-1]
        this.arr[-1] = tmp
        // the last should be removed
        this.arr = this.arr.slice(0,n-1)
        this.downAdjust(0)
        return tmp
    }

    public add(node:T) {
        this.arr.push(node)
        this.upAdjust(this.arr.length-1)
    }

}
