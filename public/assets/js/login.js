document.getElementById('loginBtn').addEventListener('click', e => {
  e.preventDefault()
  let inputEmail = document.getElementById('inputEmail').value
  let inputPassword = document.getElementById('inputPassword').value
  let confirmedPassword = document.getElementById('inputConfirmPassword').value
  let inputUsername = document.getElementById('inputUsername').value
  console.log(inputEmail, inputPassword)
})