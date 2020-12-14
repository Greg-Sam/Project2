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

    if (localStorage.getItem('codebookUID') !== null) {
      document.getElementById('postingAs').textContent = `(Posting as ${nameArr[userId]})`
    } else {
      document.getElementById('postingAs').textContent = `You are not logged in! Please return to the homepage to log in.`
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
                src="${pfpArr[post.user_id]}" width="45" height="45">
                <div class="d-flex flex-column flex-wrap ml-2"><span class="font-weight-bold">${nameArr[post.user_id]}</span><span
                  class="text-black-50 time">${usernameArr[post.user_id]}</span></div>
                </div>
                <div class="feed-icon px-2"><i class="fa fa-ellipsis-v text-black-50"></i></div>
              </div>
            </div>
            <div class="p-2 px-3 postModule" id="${post.id}"><span>${post.post}</span><br></div>
            <hr>
            <div class="p-2 px-3 commentsWrapper" id="commentsWrapper">

            </div>
            <div class="d-flex justify-content-end socials p-2 py-3"><i class="fa fa-thumbs-up"></i><i
              class="fa fa-comments-o"></i><i class="fa fa-share"></i>
              <button type="button" id="startCommentBtn" class="btn btn-secondary startCommentBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
                      <div class="input-group">
                        <span class="input-group-text">Comment:</span>
                        <textarea class="form-control" id="commentInput" aria-label="With textarea"></textarea>
                    </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Delete</button>
                      <button type="button" id="postCommentBtn" class="btn btn-primary postCommentBtn">Post</button>                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      `)
      document.getElementById('feed').append(postElem)
    })

    readyPostComment()

    axios.get('/api/comments')
      .then(({ data }) => {
        console.log(data)
        let posts = document.getElementsByClassName('commentsWrapper')
        for (let b = 0; b < data.length; b++) {
          for (let i = 0; i < posts.length; i++) {
            //console.log(parseInt(posts[i].parentNode.children.item(1).id), data[b].post_id)
            if (parseInt(posts[i].parentNode.children.item(1).id) === data[b].post_id) {
              let commentElem = document.createElement('p')
              commentElem.innerHTML = `
                <img class="rounded-circle"
                src="${pfpArr[data[b].user_id]}" width="30">
                <b>${nameArr[data[b].user_id]}</b> ${data[b].comment}
              `
              posts[i].append(commentElem)
            }
          }
        }
      })
  })
  .catch(err => console.error(err)) })
  .catch(err => { console.error(err) })
  //asynchronicity fix

console.log(nameArr)

document.getElementById('postBtn').addEventListener('click', e => {
  axios.post('/api/posts', {
    post: document.getElementById('postInput').value,
    user_id: userId,
  })
  .then(res => {
    window.location.reload()
  })
  .catch(err => console.error(err))
})

const readyPostComment = () => {
  let elements = document.getElementsByClassName('startCommentBtn')
  for(let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', e => {
      let commentPostID = e.target.parentNode.parentNode.children.item(1).id
      getPostId(commentPostID)
      localStorage.setItem('codebookComment', commentPostID)
    })
  }

  let elements2 = document.getElementsByClassName('postCommentBtn')
  for (let i = 0; i < elements2.length; i++) {
    elements2[i].addEventListener('click', e => {
      axios.post('/api/comments', {
        comment: document.getElementById('commentInput').value,
        user_id: userId,
        post_id: localStorage.getItem('codebookComment')
      })
      .then(res => {
        window.location.reload()
      })
      .catch(err => { console.error(err) })
    })
  }
}

function getPostId(id) {
  console.log(id)
  return id
}