// let n1 = 0 , n2 = 1;
// let fibonacciSeries = [n1, n2];

// let count = 3;
// while (count <= 15) {
//     let nextTerm = n1 + n2;
//     fibonacciSeries.push(nextTerm);
//     n1 = n2;
//     n2 = nextTerm;
//     count++;
// }
// console.log(fibonacciSeries);


let n1 = 0 , n2 = 1;

let index = 3;

while (index <=15) {
    let nextTerm = n1 + n2;
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    index++;
}

