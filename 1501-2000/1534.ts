function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {

    let count = 0;
        for(let i = 0 ; i < arr.length; i++) {
             for(var j = 1+i ;  j < arr.length; j++) {            
                for(var k = 1+j;  k < arr.length; k++) {

           if(Math.abs(arr[i] - arr[j])<= a && 
              Math.abs(arr[j] - arr[k])<= b && 
              Math.abs(arr[k] - arr[i]) <= c){
                count+=1;
               }
            }
        }        
    }
    return count;
};
