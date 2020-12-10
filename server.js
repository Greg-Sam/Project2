const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

require('./db').sync()
  .then(() => app.listen(8080))
  .catch(err => console.log(err))
<<<<<<< HEAD
=======
<<<<<<< HEAD
  .catch(err => console.log(err))
=======
  .catch(err => console.log(err))
>>>>>>> 0e92f9a10c0482dd901d0edbf524e2c8d0412dd6
>>>>>>> 8e459e878df864f0ca16316525d14ef591edadd7
=======
>>>>>>> b5f31d8bede4898630905788640daa4cd89d11e8
