var Clean  = require('clean-css');

var extend = require('yiwn-extend');

var defaults = {
        keepSpecialComments: 0
    };

module.exports = function(css, options) {
    options = extend({}, defaults, options);

    var clean = new Clean(options);

    return clean.minify(css);
};

