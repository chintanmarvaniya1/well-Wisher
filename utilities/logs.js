const fs = require('fs')

function genrateLogs (message) {
    fs.appendFile('./logs.txt',`${message} \n`,function (err) {
        if (err) throw err;
        
      })
}

module.exports = genrateLogs