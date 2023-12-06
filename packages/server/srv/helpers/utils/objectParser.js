// This object is an utility class, to contain the reusable objects and array function. 
/**
 * Group the array elements by key
 * @param {*} array Array to be group
 * @param {*} key  Key of the element to be grouped by
 * @returns 
 */
const groupBy = (array, key) => {
    return array.reduce((result, currentItem) => {
      const keyValue = currentItem[key];
      if (!result[keyValue]) {
        result[keyValue] = [];
      }
      result[keyValue].push(currentItem);
      return result;
    }, {});
}

/**
 * The Aggregate by function is a helper method to aggregate the sum of values based on the specific keys. 
 * The limitation to this function is only to aggregate the the array entries based on specific element and does not 
 * support filters
 * @param {Array} array - List of elements to be aggregated 
 * @param {String} key - Key attribute of the object that needs to be aggregated 
 * @returns 
 */
const aggregateBy = (array,key) => {
  return array.reduce((result, currentItem) => {
    const sum = currentItem[key];
    result = result + parseInt(sum);
    return result;
  }, 0);
}

module.exports = { groupBy , aggregateBy };