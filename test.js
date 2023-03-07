const misson = process.argv[2];
console.log(process.argv)
if (misson === 'learn') {
  console.log('Time to write some code')
} else {
  console.log('Is ' + misson + ' really more fun?')
}