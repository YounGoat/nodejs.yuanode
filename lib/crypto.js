var MODULE_REQUIRE
	/* built-in */
	, crypto = require('crypto')
	/* NPM */

	/* in-package */
	;

var _ME = {};

_ME.md5 = function(buf) {
	return crypto.createHash('md5')
		.update(content)
		.digest('hex');
};

module.exports = _ME;
