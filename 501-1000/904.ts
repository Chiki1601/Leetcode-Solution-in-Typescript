function totalFruit(fruits: number[]): number {
      let maxLength = 0;
      let currLength = 0;
      let tuple: [number, number] = [-1, -1];
      let prevIndex = 0;

      fruits.forEach((f, i) => {
        if (tuple.includes(f)) {
          currLength++;
        } else {
          maxLength = currLength > maxLength ? currLength : maxLength;
          currLength = 1 + i - prevIndex;
          tuple = [fruits[prevIndex], f];
        }
        prevIndex = fruits[i] === fruits[i - 1] ? prevIndex : i;
      });
      return currLength > maxLength ? currLength : maxLength;
    }
