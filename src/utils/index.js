/**
 * Convert data from array to { [id]: {...} }
 * @param {Array} data - input data from response
 * @return {Object}
 */
export const normalizeData = (data) => {
  const newObj = {};
  data.forEach((movie) => Object.assign(newObj, { [movie.id]: movie }));
  return newObj;
};
