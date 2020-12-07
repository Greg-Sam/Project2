document.getElementById('loginBtn').addEventListener('click', e => {
  e.preventDefault()
  let inputEmail = document.getElementById('inputEmail').value
  let inputPassword = document.getElementById('inputPassword').value
  console.log(inputEmail, inputPassword)
})