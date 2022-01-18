const every = require("../script3")

    test('all even', () => {
        expect(every([8,4,2], function(num) {
            return num % 2 === 0;
        })).toBe(true);
    });

    test('even + odd', () => {
        expect(every([6,3,1], function(num) {
            return num % 2 === 0;
        })).toBe(false);
    });

    test('even + odd strings', () => {
        expect(every(['6','3','1'], function(num) {
            return num % 2 === 0;
        })).toBe(false);
    });

    test('all even strings', () => {
        expect(every(['6','2','4'], function(num) {
            return num % 2 === 0;
        })).toBe(true);
    });