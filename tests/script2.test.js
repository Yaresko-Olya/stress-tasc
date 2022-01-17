const { Number } = require("../script2");

    test('pass odd number, get true', () => {
        expect((5).isOdd()).toBe(true);
    });

    test('pass odd number, get true', () => {
        expect((-5).isOdd()).toBe(true);
    });

    test('pass even number, get false', () => {
        expect((6).isOdd()).toBe(false);
    });

    test('pass even number, get false', () => {
        expect((-6).isOdd()).toBe(false);
    });
