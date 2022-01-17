//2
//Через прототип расширьте встроенный объект Number методом isOdd(),
// который возвращает true, если число нечетное.

Number.prototype.isOdd = function () {

    if (this % 2 === 0) return false;
    if (this % 2 !== 0) return true;
}

console.log(Number(6).isOdd());
console.log(Number(5).isOdd());

module.exports = { Number };