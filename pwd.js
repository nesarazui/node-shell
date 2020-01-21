let prompt = process.stdout.write('prompt >');

// let pwd = process.stdin.on('data', data => {
//   //process.stdout.write('prompt >');
//   if (data.toString().trim() === 'pwd') {
//     process.stdout.write(process.cwd());
//   }
// });

// module.exports =  {prompt, pwd}

module.exports = function pwd () {
    let prompt = process.stdout.write('prompt >');
    process.stdin.on('data', data => {
        //process.stdout.write('prompt >');
        if (data.toString().trim() === 'pwd') {
          process.stdout.write(process.cwd());
        }
      });
}