function gcdOfStrings(str1: string, str2: string): string {
   let str1Store: string = "";

    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
        if(str1[i] && str2[i]) {
            if(str1[i] !== str2[i]) {
                return ""
            } else {
                str1Store += str1[i];
                continue;
            };
        }

        if(str1[i] && str1[i % str1Store.length] !== str1[i]) {
            return ""
        }

        if(str2[i] && str2[i % str1Store.length] !== str2[i]) {
            return ""
        }
    }

    const gcd = (a: number, b: number) => {
        if(b === 0) return a;

        return gcd(b, a % b);
    }

    return str1Store.substring(0, gcd(str1.length, str2.length))
};
