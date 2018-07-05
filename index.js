var _ = require('lodash');
var numbers = [1,2,3,4,5,6,7];

_.each(numbers, function(number, i) {
    console.log(number);
});