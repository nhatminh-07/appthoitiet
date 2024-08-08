let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

let time = new Date();
date = time.getDate();
month = time.getMonth() +1;
year = time.getFullYear();
hours = time.getHours();
minutes = time.getMinutes();
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);