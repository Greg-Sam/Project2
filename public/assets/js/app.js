let userId = localStorage.getItem('codebookUID')
console.log(userId)

let nameArr = ['null']
let pfpArr = ['null']
let usernameArr = ['null']

axios.get('/api/users')
  .then(({ data }) => {
    console.table(data)
    for (let i = 0; i < data.length; i++) {
      let name = `${data[i].first_name} ` + `${data[i].last_name}`
      let pfp = `${data[i].pfp}`
      let username = `${data[i].user_name}`
      nameArr.push(name)
      pfpArr.push(pfp)
      usernameArr.push(username)
    }

//both GET requests are under the same asynchronous request

axios.get('/api/posts')
  .then(({ data }) => {
    console.table(data)
    data.slice().reverse().forEach(post => {
      let postElem = document.createElement('div')
      postElem.innerHTML = (`
        <div class="bg-white border mt-2">
          <div>
            <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
              <div class="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle"
                src="${pfpArr[post.user_id]}" width="45">
                <div class="d-flex flex-column flex-wrap ml-2"><span class="font-weight-bold">${nameArr[post.user_id]}</span><span
                  class="text-black-50 time">${usernameArr[post.user_id]}</span></div>
                </div>
                <div class="feed-icon px-2"><i class="fa fa-ellipsis-v text-black-50"></i></div>
              </div>
            </div>
            <div class="p-2 px-3"><span>${post.post}</span></div>
            <div class="d-flex justify-content-end socials p-2 py-3"><i class="fa fa-thumbs-up"></i><i
              class="fa fa-comments-o"></i><i class="fa fa-share"></i>
              <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Comment
              </button>
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">Add Comment</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      ...
                          </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Delete</button>
                      <button type="button" class="btn btn-primary">Post</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      `)
      document.getElementById('feed').append(postElem)
    })
  })
  .catch(err => console.error(err)) })
  .catch(err => { console.error(err) })
  //asynchronicity fix

console.log(nameArr)

document.getElementById('postBtn').addEventListener('click', e => {
  axios.post('/api/posts', {
    post: 'This is a test post from ky',
    user_id: userId,
  })
  .then(res => {
    window.location.reload()
  })
  .catch(err => console.error(err))
})

console.log(pfpArr)