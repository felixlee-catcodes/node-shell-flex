module.exports = function () {
    //Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if(cmd === 'pwd'){
    done(process.cwd());
  }
  process.stdout.write('\nprompt > ');
});
}