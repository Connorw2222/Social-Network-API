const router = require('express').Router();
const { Thought, User } = require('../models');

router.get('/', (req, res) => {
    // Use the `find()` method to get all of the notes in the database's collection
    Thought.find().then(dbNodes => {
        res.json(dbNodes)
    })
    .catch(err => {
        res.status(400).json(err)
    })
});

router.post('/', ({ body }, res) => {
    // Use the `create()` method to create a new note using the data in `body`
    Thought.create(body).then(dbNodes => {
      res.json(dbNodes)
    })
    .catch(err => {
        res.status(400).json(err)
    })
});

router.put('/:id', ({ params, body }, res) => {
    // Use the `findOneAndUpdate()` method to update a note using the `_id` and data from the `body`
    // If there is no note with that `id` in the collection, return an error message.
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true }).then(dbNodes => {
        if (!dbNodes) {
            res.status(400).json({ message: "failed" })
        }
        res.json(dbNodes)
    })
    .catch(err => {
        res.status(400).json(err)
    })
});

router.delete('/:id', ({ params }, res) => {
    // Use the `findOneAndDelete()` method to delete a note using the `_id`
    // If there is no note with that `id` in the collection, return an error message.
    Thought.findOneAndDelete({ _id: params.id }).then(dbNodes => {
        if (!dbNodes) {
            res.status(400).json({ message: "failed" })
        }
        res.json(dbNodes)
    })
    .catch(err => {
        res.status(400).json(err)
    })
});

module.exports = router;