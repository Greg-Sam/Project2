const express = require('express')
const { join } = require('path')

const app = express()

const Pusher = require('pusher');
const pusher = new Pusher({
  appId: '1120190',
  key: '5aaba2f508844b3273fb',
  secret: 'f86818913cd31f3c73e5',
  cluster: 'us3',
  encrypted: true
});

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

app.post('/comment', function (req, res) {
  console.log(req.body);
  var newComment = {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment
  }
  pusher.trigger('flash-comments', 'new_comment', newComment);
  res.json({ created: true });
});

require('./db').sync()
  .then(() => app.listen(process.env.PORT || 8080))
  .catch(err => console.log(err))
