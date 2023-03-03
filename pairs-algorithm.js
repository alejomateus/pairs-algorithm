const findPair = (numberList, target) => {
  const arrayLength = numberList.length - 1;
  const sums = [];
  for (let i = 0; i <= arrayLength; i++) {
    const currentNumber = numberList[i];
    let diff = target - currentNumber;
    for (let j = arrayLength; j > i; j--) {
      const item = numberList[j];
      if (diff === item) {
        console.log("Item",  [currentNumber, item] );
        sums.push([currentNumber, item]);
      }
    }
  }
  console.log("All", { sums });
};
let nums = [1, 9, 5, 0, 20, -4, 12, 16, 7];
let target = 12;
findPair(nums, target);

// let miarray = Array.from({ length: 5000 }, () => Math.floor(Math.random() * 10000));
// let miarray2 = Array.from({ length: 5000 }, () => -Math.floor(Math.random() * 10000));
// console.log(miarray);
// let target = 12;
// let start = window.performance.now();
// findPair([...miarray, ...miarray2], target);
// let end = window.performance.now();
