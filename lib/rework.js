/**
 * Dependencies.
 */

var rework  = require('rework'),
    vars    = require('rework-vars'),
    pseudos = require('rework-pseudos'),
    media   = require('rework-custom-media');

/**
 * Expose.
 */

module.exports = process;

/**
 * Post-process final CSS with Rework.
 *
 * @param  {String} css
 * @param  {Object} options [optional]
 * @return {String}
 */

function process (css, options) {
    options = options || {};

    var production = !options.development;

    return rework(css)
        .use(vars())
        .use(pseudos())
        .use(media)
        .toString({ compress: production });
};
