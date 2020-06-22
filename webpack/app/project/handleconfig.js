const  { getOptions } = require('loader-utils');
const fs = require('fs')
module.exports = function (source, a, meta) {
    console.log(JSON.parse(source))
    console.log(a)
    console.log(getOptions(this))
    let str = `export default `
    fs.writeFileSync('./src/router.js', `${str}${source}`, 'utf-8')
    return source;
};