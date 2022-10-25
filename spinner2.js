
const symbolArray = ["|","/", "-", "\\","|","/", "-", "\\"]
let timeOutValue = 0;

for (let symbol of symbolArray) {
  timeOutValue += 200;
  setTimeout(() => {
    process.stdout.write(`\r${symbol}  `);
  }, timeOutValue);


}


/*

setTimeout(() => {
  process.stdout.write('\r|  ');
}, 100,);

setTimeout(() => {
 process.stdout.write('\r/  ');
}, 300);

setTimeout(() => {
 process.stdout.write('\r-  ');
}, 500);


setTimeout(() => {
 process.stdout.write('\r\\  ');
}, 700);

setTimeout(() => {
 process.stdout.write('\r|  ');
}, 900);

setTimeout(() => {
 process.stdout.write('\r/  ');
},1100);

setTimeout(() => {
 process.stdout.write('\r- ');
},1300);

setTimeout(() => {
 process.stdout.write('\r\\ ');
},1500);

setTimeout(() => {
 process.stdout.write('\r| ');
},1700);

setTimeout(() => {
 process.stdout.write('\r/  ');
}, 1900);

setTimeout(() => {
 process.stdout.write('\r-  ');
}, 2100);


setTimeout(() => {
 process.stdout.write('\r\\  ');
}, 2300); */