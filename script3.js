//3
// Написать функцию every, которая будет принимать первым аргументом массив,
// а вторым функцию колбэк(которая будет принимать каждый элемент массива и возвращать true либо false).
// Результатом функции должно быть логическое выражение true/false  в зависимости от того,
// выполняется ли условие для каждого из элементов.
// Example: every([8, 2, 4], function (num){ return  num%2===0 })  // true

function every(arr, callback) {
    let result = true;

    arr.forEach((num) => {
        result = callback(num) && result
    })

    return result;
}

let result = every([8,4,2], function(num) {
    return num % 2 === 0;
});

console.log(result);


module.exports = every;