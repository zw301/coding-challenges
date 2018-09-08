function countTime(deliveries) {
  let total = 0;
  let startTime = 0;
  let count = 0;

  for (let i = 0; i < deliveries.length; i++) {
    if (deliveries[i].action === "pickup") {
      count++;
      if (count === 0) {
        startTime = deliveries[i].time;
      }
    } else if (deliveries[i].action === "dropoff") {
      count--;
      if (count === 0) {
        total += (deliveries[i].time - startTime);
        startTime = 0;
      }
    }
  }
  return total;
}

deliveries = [
  {id: 1, time: 30, action: "pickup"},
  {id: 1, time: 60, action: "dropoff"},
  {id: 2, time: 90, action: "pickup"},
  {id: 3, time: 110, action: "pickup"},
  {id: 2, time: 120, action: "dropoff"},
  {id: 3, time: 130, action: "dropoff"}
]

console.log(countTime(deliveries));
