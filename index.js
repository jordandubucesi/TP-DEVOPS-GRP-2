'use strict';
const fibRecursive = n => {
    if (n < 0) return -1;

    if (n < 2) return n;

    return fibRecursive(n - 1) + fibRecursive(n - 2);
};

const express = require('express');
const app = express();
app.get('/:entryFib', (req, res) => {
    let {entryFib} = req.params || {};

    entryFib = entryFib || 20;
    res.status(200).send({
        entry: entryFib,
        result: fibRecursive(entryFib),
    });
});

app.listen(1234, () => console.log('Server %d running !', process.pid));

module.exports = {
    fibRecursive,
    app,
};
