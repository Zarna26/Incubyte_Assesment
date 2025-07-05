// stringCalculator.test.js

const add = require('./stringCalculator');

describe('String Calculator', () => {
    test('returns 0 for empty string', () => {
        expect(add("")).toBe(0);
    });

    test('returns number for single number input', () => {
        expect(add("1")).toBe(1);
    });

    test('returns sum for two numbers separated by comma', () => {
        expect(add("1,5")).toBe(6);
    });

    test('handles new lines between numbers', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('supports custom delimiter ;', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test('supports custom delimiter |', () => {
        expect(add("//|\n4|5|6")).toBe(15);
    });

    test('throws exception on single negative number', () => {
        expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");
    });

    test('throws exception on multiple negative numbers', () => {
        expect(() => add("1,-2,-3,4")).toThrow("negative numbers not allowed: -2,-3");
    });

    test('ignores non-numeric and empty tokens', () => {
        expect(add("1,\n,2")).toBe(3);
    });

    test('supports custom delimiter -', () => {
        expect(add("//-\n10-20-30")).toBe(60);
    });
});
