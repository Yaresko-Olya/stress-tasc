const every = require("../script3")

    test('should return true', () => {
        expect(every([8,4,2], function(num) {
            return num % 2 === 0;
        })).toBe(true);
    });

    test('should return false', () => {
        expect(every([6,3,1], function(num) {
            return num % 2 === 0;
        })).toBe(false);
    });

    test('should return false', () => {
        expect(every(['6','3','1'], function(num) {
            return num % 2 === 0;
        })).toBe(false);
    });

    test('should return false', () => {
        expect(every(['6','2','4'], function(num) {
            return num % 2 === 0;
        })).toBe(true);
    });