function countSymmetricIntegers(low: number, high: number): number {
      let count = 0;
      const isSymmetric = (num: number): number => {
        const str = String(num);
        const n = str.length;
        if (n % 2 !== 0) return 0;
        const half = n / 2;
        let leftSum = 0, rightSum = 0;
        for (let i = 0; i < half; i++) {
        leftSum += Number(str[i]);
        rightSum += Number(str[i + half]);
        }
        return leftSum === rightSum ? 1 : 0; 
     };
      while(low < high){
          count += isSymmetric(low);
          count += isSymmetric(high);
          low++;
          high--
      }
      if(low === high){
         count += isSymmetric(low);
      }
      return count;
};
