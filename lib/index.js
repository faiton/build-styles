var postprocess = require('./rework.js'),
    autoprefix  = require('./autoprefixer.js');

var Build = require('faiton-builder');

var plugins = Build.plugins;

exports.styles = function (done) {
    var options = this.options;

    var build = Build.styles(this.tree, options);

    this.stylePlugins(build, options);

    build.end(function (err, css) {
        if (err) return done(err);
        if (!css) return done(null, '');

        done(null, postprocess(css, options));
    });
};

exports.stylePlugins = function (build, options) {
    build
    .use('styles',
        plugins.urlRewriter(options.prefix || ''),
        autoprefix(options));
};
