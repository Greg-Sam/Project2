document.getElementById('loginBtn').addEventListener('click', e => {
  e.preventDefault()
  loginUser()
})

const loginUser = () => {
  let inputEmail = document.getElementById('inputEmail').value
  let inputPassword = document.getElementById('inputPassword').value

  axios.get('/api/users')
    .then(res => {
      let users = res.data
      console.log(users)
      users.forEach(user => {
        if (inputEmail === user.email && inputPassword === user.password) {
          let userId = user.id
          localStorage.setItem('codebookUID', `${userId}`)
          window.open("../index.html", "_self")
        }
      })
    })
    .catch(err => { console.error(err) })
}