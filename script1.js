function getDays(year, month) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    if (typeof month === 'string') {
        month = monthNames.indexOf(month) + 1;
    }
    if (month < 1 || month > 12) return false;
    if (year < 1) return false;
    return new Date(year, month, 0).getDate();
}

console.log(getDays(2021, 4))

module.exports = getDays;