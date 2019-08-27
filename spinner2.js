let delay = 200;
const spinOptions = ['|', '/', '-', '\\'];

const spinEvent = function (i) {
    process.stdout.write('\r' + spinOptions[i % spinOptions.length])
    if (i < 25) { setTimeout(() => {
        spinEvent(i + 1);
    }, delay);
    } else {
        process.stdout.write('\r\n');
    }
};

spinEvent(0);

// const spinner = function (character) {
//     setTimeout(() => {character}, delay);
// }

// function startSpinning(i, delay) {
//     if (i < 16) {
//         let current = spinOptions[i];
//         delay += 200;
//         spinner(current, delay);
//     }
// }

// console.log(startSpinning(0, 0));




// function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     // add a zero in front of numbers<10
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById("txt").innerHTML = h+ ":" + m + ":" + s;
//     t = setTimeout(function(){ startTime() }, 500);
//   }
  
//   function checkTime(i) {
//     if (i<10) {
//       i = "0" + i;
//     }
//     return i;
//   } 




//   const timeOut = function (character, delay){
//     if (counter === 16) {
//         return;
//     } else {
//     setTimeout(() => {character}, delay );
//     delay += 200;
//     timeOut(b, x);
//     timeOut(c, x);
//     timeOut(d, x);
//     counter++;
//     }
// };

// console.log(timeOut(a, x));