document.getElementById('loginBtn').addEventListener('click', e => {
  e.preventDefault()
  addUser()
})

const addUser = () => {
  let inputEmail = document.getElementById('inputEmail').value
  let inputUsername = document.getElementById('inputUsername').value
  let inputFirstName = document.getElementById('inputFirstName').value
  let inputLastName = document.getElementById('inputLastName').value
  let inputPassword = document.getElementById('inputPassword').value
  let confirmedPassword = document.getElementById('inputConfirmPassword').value

  if (checkPasswordMatch()) {
    axios.post('/api/users', {
      first_name: inputFirstName,
      last_name: inputLastName,
      email: inputEmail,
      user_name: inputUsername,
      password: inputPassword
    })
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => console.error(err))
  }
}

function checkPasswordMatch(inputPassword, confirmedPassword) {
  let isMatch = inputPassword === confirmedPassword ? true : false
  return isMatch
}