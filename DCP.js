
const addUp = () => {
  let arr = [10, 15, 3, 7];
  let k = 17;
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    const diff = k - arr[i];

    if (!temp[diff]) {
      temp[arr[i]] = arr[i];
    }
    else
      return temp[diff];
  }
}

console.log(addUp());