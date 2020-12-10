const express = require('express')
const { join } = require('path')

const app = express()

// required for pusher and live support functionality
// const bodyParser = require('body-parser');
// const Pusher = require('pusher');
// const pusher = new Pusher({
//   appId: '1120190',
//   key: '5aaba2f508844b3273fb',
//   secret: 'f86818913cd31f3c73e5',
//   cluster: 'us3',
//   encrypted: true
// });

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

require('./db').sync()
  .then(() => app.listen(8080))
  .catch(err => console.log(err))
