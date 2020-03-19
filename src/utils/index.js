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

/**
 * Convert data from array of objects to array of ids
 * @param {Array} data - input data from response
 * @return {Array} - array of ids
 */
export const getIds = (data) => data.map((el) => el.id);
