let userId = localStorage.getItem('codebookUID')
console.log(userId)

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
                src="./assets/images/sample photos/IMG_0872.jpeg" width="45">
                <div class="d-flex flex-column flex-wrap ml-2"><span class="font-weight-bold"></span><span
                  class="text-black-50 time">40 minutes ago</span></div>
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
  .catch(err => console.error(err))

function getNameFromId(postUID) {
  let name = ''
  axios.get('/api/users')
    .then(({ data }) => {
      console.table(data)
      for (let i = 0; i < data.length; i++) {
        if (postUID === data[i].id) {
          name += `${data[i].first_name} ` + `${data[i].last_name}`
          console.log(name)
        }
      }
    })
    .catch(err => { console.error(err) })
    return name
}

getNameFromId(5)