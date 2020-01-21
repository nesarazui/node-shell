/*Example of writing out anything:
process.stdout.write('prompt >');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  process.stdout.write('you typed: ' + cmd);
  process.stdout.write('\nwrite > ');
});
*/

// console.log('pure data:', data);
// console.log('with toString:', data.toString());
// console.log('with trim:', data.toString().trim());

process.stdout.write('prompt >');

process.stdin.on('data', data => {
  if (data.toString().trim() === 'pwd') {
    process.stdout.write(process.cwd());
  }
});
