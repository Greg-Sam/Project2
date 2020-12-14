document.getElementById('logoutBtn').addEventListener('click', e => {
  e.preventDefault()
  localStorage.removeItem('codebookUID')
  window.open("../index.html", "_self")
})