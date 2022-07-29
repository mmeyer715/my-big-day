const router = require('express').Router();
const { User } = require('../../models');

// GET all users /api/users
router.get('/', (req, res) => {
    User.findAll()
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET  one user by id /api/users/1
router.get('/:id', (req, res) => {});

// POST create new user /api/users
router.post('/', (req, res) => {});

// UPDATE user /api/users/1
router.put('/:id', (req, res) => {});

// DELETE user /api/users/1
router.delete('/:id', (req, res) => {});

module.exports = router;