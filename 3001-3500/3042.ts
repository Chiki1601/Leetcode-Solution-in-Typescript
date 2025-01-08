function countPrefixSuffixPairs(words: string[]): number {
    let count:number =0;
    for(let i=0; i<words.length; i++){
        for(let j=i+1; j<words.length; j++){
            true===isPrefixAndSuffix(words[i],words[j])?count++:null;
         }
    }
    return count;

};

    function isPrefixAndSuffix(str1:string,str2:string):boolean{
        let m:number = str1.length;
        let n:number = Math.floor(str2.length-m);
        if(str1=== str2.substring(0,m) && str1 === str2.substring(n,str2.length) )
        return true

        return false
    }
