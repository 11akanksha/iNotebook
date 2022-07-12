const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        a: 'xyz',
        number: 4
    }
    res.json(obj)
})

module.exports = router