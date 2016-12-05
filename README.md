See [CHANGE LOG](./CHANGELOG.md) for notable changes.

#	yuanode, a spoon of sugar for Node.js

*yuanode* is the abbreviation of "yuan" and "node", please attention that there is only ONE "n" in the middle of "yuanode". yuanode is a collection of syntax sugar for built-in Node.js modules, making it easier to accomplish general tasks in Node.js.

##	Start Up

Install *yuanode* by NPM,
```bash
npm install yuanode --save
```
then import it by name,
```javascript
var yuanode = require('yuanode');
```
##	crypto

```javascript
// Return the md5 digest (encoded in HEX by default).
yuanode.crypto.md5(buf);
```
