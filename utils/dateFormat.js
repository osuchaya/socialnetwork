const dayjs = require('dayjs');
const dateFormat = (timestamp) => { //declare function
  let day = dayjs(timestamp);
  return day.format('MM/DD/YYYY')
} 
module.exports = dateFormat;