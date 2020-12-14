const router = require('express').Router()
const { User, Post } = require('../models')

router.get('/posts', (req, res) => {
  Post.findAll()
    .then(posts => res.json(posts))
    .catch(err => console.log(err))
})

router.post('/posts', (req, res) => {
  Post.create(req.body)
    .then(post => res.json(post))
    .catch(err => console.log(err))
})

router.put('/posts/:id', (req, res) => {
  Post.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/posts/:id', (req, res) => {
  Post.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
