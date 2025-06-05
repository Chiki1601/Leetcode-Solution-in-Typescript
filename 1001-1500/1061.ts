function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
    const uf = new UF(26);
    const A = 'a'.charCodeAt(0);

    for (let i = 0; i < s1.length; i++) {
        uf.union(s1.charCodeAt(i) - A, s2.charCodeAt(i) - A);
    }

    let str = '';
    for (let i = 0; i < baseStr.length; i++) {
        str += String.fromCharCode(uf.find(baseStr.charCodeAt(i) - A) + A);
    }

    return str;
};

class UF {
    private rep: number[];
    constructor(size: number) {
        this.rep = new Array(size);
        for (let i = 0; i < this.rep.length; i++) this.rep[i] = i;
    }

    find(num: number): number {
        if (this.rep[num] === num) {
            return num;
        } 

        return this.rep[num] = this.find(this.rep[num]);
    }

    union(num1: number, num2: number): void {
        const x = this.find(num1);
        const y = this.find(num2);

        if (x === y) {
            return;
        }

        if (x < y) {
            this.rep[y] = x;
        } else {
            this.rep[x] = y;
        }
    }
}
