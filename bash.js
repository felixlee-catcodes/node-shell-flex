const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')

ls();
pwd();
cat('bash.js');

const done = (output) => {
  // show the output
  // show the prompt
};