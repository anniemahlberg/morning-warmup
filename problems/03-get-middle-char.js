function getMiddle(str) {
  console.log("str: ", str);
  let middleStr = ""
  if (str === "") {
    return "";
  }

  if (str.length % 2 === 0) {
    let middle = Math.floor(str.length / 2 - 1);
    middleStr = str[middle] + str[middle + 1];
  } else {
    let middle = Math.floor(str.length / 2);
    middleStr = str[middle];
  }

  return middleStr;
}
// do not touch this export
module.exports = getMiddle;
