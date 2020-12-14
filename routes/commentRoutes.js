const router = require('express').Router()
const { Comment } = require('../models')

router.get('/comments', (req, res) => {
  Comment.findAll()
    .then(comments => res.json(comments))
    .catch(err => console.log(err))
})

router.post('/comments', (req, res) => {
  Comment.create(req.body)
    .then(comment => res.json(comment))
    .catch(err => console.log(err))
})

router.put('/comments/:id', (req, res) => {
  Comment.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/comments/:id', (req, res) => {
  Comment.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
