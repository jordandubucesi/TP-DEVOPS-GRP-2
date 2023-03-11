`use strict`;

const assert = require('assert');
const request = require('supertest');
const {app, fibRecursive} = require('../../index');

describe('Fibonacci API', function () {
    describe('GET /:entryFib', function () {
        it('should return an error for entryFib < 0', function (done) {
            request(app)
                .get('/-1')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    assert.deepEqual(res.body, {
                        entry: '-1',
                        result: -1,
                    });
                    done();
                });
        });

        it('should return the correct result for entryFib = 0', function (done) {
            request(app)
                .get('/0')
                .expect(200)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    if (err) return done(err);
                    assert.deepEqual(res.body, {
                        entry: '0',
                        result: 0,
                    });
                    done();
                });
        });

        it('should return the correct result for entryFib = 1', function (done) {
            request(app)
                .get('/1')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    assert.deepEqual(res.body, {
                        entry: '1',
                        result: 1,
                    });
                    done();
                });
        });

        it('should return the correct result for entryFib = 10', function (done) {
            request(app)
                .get('/10')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    assert.deepEqual(res.body, {
                        entry: '10',
                        result: 55,
                    });
                    done();
                });
        });

        it('should return the correct result for entryFib = 20', function (done) {
            request(app)
                .get('/20')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    assert.deepEqual(res.body, {
                        entry: '20',
                        result: 6765,
                    });
                    done();
                });
        });
    });

    it('should return the correct result for a random entryFib value between 1 and 30', function (done) {
        const randomValue = Math.floor(Math.random() * (30 - 1) + 1);
        request(app)
            .get(`/${randomValue}`)
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                const expectedValue = fibRecursive(randomValue);
                assert.deepEqual(res.body, {
                    entry: `${randomValue}`,
                    result: expectedValue,
                });
                done();
            });
    });
});

after(function () {
    // exit the process after all tests have run
    process.exit(0);
});
