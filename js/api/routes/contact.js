const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /contact'
    });
});

router.post('/', (req, res, next) => {
    const contact = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        comment: req.body.comment,
    };
    res.status(201).json({
        message: 'Handling POST requests to /contact',
        order: contact
    });
});

router.get('/:contactId', (req, res, next) => {
    const id = req.params.contactId;
    if (id === 'Test') {
        res.status(201).json({
            message: 'Prueba exitosa',
            id: id
        });
    } else {
        res.status(201).json({
            message: 'Alternativa a la prueba'
        });
    }
});

module.exports = router;