interface DstDistance {
  dst: number;
  distance : number;
}

function minScore(n: number, roads: number[][]): number {
  const isVisit = new Array(n+1).fill(false);
  const adjMap = new Map<number, DstDistance[]>();

  // create adjMap
  createAdjMap();

  // calc
  const stack = [1];
  isVisit[1] = true;
  let ret = Number.MAX_SAFE_INTEGER;
  while(stack.length !== 0) {
    const src = stack.pop();

    const dstDistances = adjMap.get(src);
    if(!dstDistances) continue;

    for(const {dst, distance} of dstDistances) {
      ret = Math.min(ret, distance);
      if(isVisit[dst] === true) continue;
      isVisit[dst] = true;
      stack.push(dst);
    }
  }

  function createAdjMap () {
    for(const road of roads) {
      const [src,dst,distance] = road;

      addMap(src,dst,distance);
      addMap(dst,src,distance);
    }

    function addMap(src: number, dst: number, distance: number) {
      if(adjMap.has(src)) {
        adjMap.get(src).push({dst, distance});
      } else {
        adjMap.set(src,[{dst,distance}]);
      }
    }    
  }

  return ret;
}
