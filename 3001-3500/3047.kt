function largestSquareArea(bottomLeft: number[][], topRight: number[][]): number {
    
    const size = bottomLeft.length;
    let maxArea = 0 ;
    
    for (let i=0;i<size;i++){
        for (let j=i+1;j<size;j++){
            let x1 = Math.max(bottomLeft[i][0],bottomLeft[j][0]);
            let y1 = Math.max(bottomLeft[i][1],bottomLeft[j][1]);
            
             let x2 = Math.min(topRight[i][0],topRight[j][0]);
            let y2 = Math.min(topRight[i][1],topRight[j][1]);
            
            if(x1<x2 && y1<y2){
                let s = Math.min(x2-x1,y2-y1);
                maxArea = Math.max(maxArea,s*s)
            }
        }
    }
    return maxArea
};
