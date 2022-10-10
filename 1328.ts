function breakPalindrome(palindrome: string): string {
    if (palindrome.length === 1) return "";
    
    const arrPldr = palindrome.split('');
    
    arrPldr.every((ele, i, arr) => {
        // since it is symetric, only half of arr need to be checked
        if (i === Math.floor(arr.length / 2)) return false;

        // change the first non 'a' element to 
        if (ele !== 'a') {
            arr[i] = 'a';   // p.s. do not modify ele directly        
            return false;
        } else {
            // reach the last half element, so all the elements are 'a', 
            // change the last one to 'b'
            i === Math.floor(arr.length / 2) - 1 && (arr[arr.length - 1] = 'b');
        }
        
        return true; // p.s. must return true to make the loop continue
    });
    
    return arrPldr.join('');
};
