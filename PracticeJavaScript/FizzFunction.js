let count = 0;
let array = [];
function fizz() {
    for (let index = 1; index <= 20; index++) {
        count++;
        if (count % 3 == 0 && count % 5 == 0) {
            array.push("FizzBuzz");
        } else if (count % 5 == 0) {
            array.push("Buzz");
        } else if (count % 3 == 0) {
            array.push("Fizz");
        } else {
            array.push(count);
        }
    }
    return array;
}
let result = fizz();
console.log(result);
