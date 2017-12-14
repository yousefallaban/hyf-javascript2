//Step 4-2
let range = [];

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    for (let i = startIndex; i <= stopIndex; i++) {
        range.push(i);
    }
    console.log(range);
    for (let x = 0; x < range.length; x++) {
        if (range[x] % 3 === 0 && range[x] % 5 === 0) {
            console.log('I am three Callbak and fiveCallbak ');
            threeCallback();
            fiveCallback();
        } else if (range[x] % 5 === 0) {
            console.log('I am fiveCallbak');
            fiveCallback();
        } else if (range[x] % 3 === 0) {
            console.log('I am three Callbak')
            threeCallback();
        }
    }
    // threeCallback();
    // fiveCallback();
}
threeFive(10, 15, sayThree, sayFive);

function sayFive() {
    //console.log('I am fiveCallbak');
    let newRanges = range.filter(a => {
        return a % 5 === 0;
    });
    console.log(newRanges);
}
function sayThree() {
    // console.log('I am three Callbak')
    let newRange = range.filter(a => {
        return a % 3 === 0;
    });
    console.log(newRange);
}