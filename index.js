var MODULE_REQUIRE
	/* built-in */

	/* NPM */
	, yuan = require('yuan')

	/* in-package */
	, core = require('./lib/core')
	;

module.exports = yuan.expand(core, {
	VERSION  : require('./package').version,
	crypto   : require('./lib/crypto')
});
