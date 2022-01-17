const getDays = require("../script1")

    test('return number of day in 4 month', () => {
        expect(getDays(2021, 4)).toBe(30);
    });

    test('return number of day in month February', () => {
        expect(getDays(2021, 'February')).toBe(28);
    });

    test('return number of day in month', () => {
        expect(getDays(2021, 22)).toBe(false);
    });

    test('return number of day in month', () => {
        expect(getDays(2021, 'somethin')).toBe(false);
    });

    test('return number of day in month', () => {
        expect(getDays(2021, '')).toBe(false);
    });

    test('return number of day in month', () => {
        expect(getDays(-2021, 11)).toBe(false);
    });


