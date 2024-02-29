function isEvenOddTree(root: TreeNode | null): boolean {
    let q = [[root, 0]];
    let d = 0;
    let prev = 0;
    while(q.length > 0) {
        let v = q.shift() as any;
        if(v[0].left) q.push([v[0].left, v[1] + 1]);
        if(v[0].right) q.push([v[0].right, v[1] + 1]);
        
        let newRow = d != v[1];
        
        if(v[1] % 2 == 0) {
            if (v[0].val % 2 === 0 || (!newRow && v[0].val <= prev)) return false;
        } else {
            if (v[0].val % 2 !== 0 || (!newRow && v[0].val >= prev)) return false;
        }
        d = v[1];
        prev = v[0].val;
    }
    return true;
};
