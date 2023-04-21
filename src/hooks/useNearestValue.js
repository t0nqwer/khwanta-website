import { useState } from "react";

function useNearestValue(arr, target) {
  const [nearestValue, setNearestValue] = useState(null);

  function findNearestValue() {
    let minDifference = Infinity;
    let nearestValue = null;

    for (let i = 0; i < arr.length; i++) {
      let difference = Math.abs(arr[i] - target);

      if (difference < minDifference) {
        minDifference = difference;
        nearestValue = arr[i];
      }
    }

    setNearestValue(nearestValue);
  }

  return [nearestValue, findNearestValue];
}

export default useNearestValue;
