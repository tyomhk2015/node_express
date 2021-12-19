const path = require('path');
// Returns the root path that activates the app. 
module.exports = path.dirname(require.main.filename);