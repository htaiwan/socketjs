var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X'));  // timestamp s
console.log(now.format('x'));  // timestamp ms

var timestamp = 132324435343;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.format('h:mm a')); // 11:06 am

now.subtract(1, 'year');

console.log(now.format());

console.log(now.format('MMM Do YYYY, h:mm a')); // Oct 5th 2015, 6:45 pm

