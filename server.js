const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

require('./db').sync()
  .then(() => app.listen(8080))
<<<<<<< HEAD
  .catch(err => console.log(err))
=======
  .catch(err => console.log(err))
>>>>>>> 0e92f9a10c0482dd901d0edbf524e2c8d0412dd6
