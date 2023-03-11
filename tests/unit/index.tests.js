`use strict`;

const assert = require('assert');
const {fibRecursive} = require('../../index');

describe('fibRecursive', function () {
    it('should return -1 for negative input', function () {
        const result = fibRecursive(-1);
        assert.strictEqual(result, -1);
    });

    it('should return 0 for input 0', function () {
        const result = fibRecursive(0);
        assert.strictEqual(result, 0);
    });

    it('should return 1 for input 1', function () {
        const result = fibRecursive(1);
        assert.strictEqual(result, 1);
    });

    it('should return 55 for input 10', function () {
        const result = fibRecursive(10);
        assert.strictEqual(result, 55);
    });

    it('should return 6765 for input 20', function () {
        const result = fibRecursive(20);
        assert.strictEqual(result, 6765);
    });

    it('should throw an error for non-numeric input', function () {
        assert.throws(() => fibRecursive('foo'), RangeError);
    });
});
