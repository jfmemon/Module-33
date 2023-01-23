const loadComments = () => {
    const url = `https://jsonplaceholder.typicode.com/comments`
    fetch(url)
    .then(response => response.json())
    .then(data => displayLoadedComments(data))
}

const displayLoadedComments = comments => {
    const loadComments = document.getElementById('load-comments');
    comments.forEach(comment => {
        if(comment.postId <= 4) {
            const li = document.createElement('li');
            li.addEventListener('click', function() {
                commentDetails(comment.id);
            })
            li.classList.add('comment');
            li.innerText = comment.body;
            loadComments.appendChild(li);
        }
    })
}

const commentDetails = (details) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${details}`
    // console.log(details)
    fetch(url)
    .then(response => response.json())
    .then(data => commentDetailsDisplay(data))
}

const commentDetailsDisplay = value => {
    const loadCommentDetails = document.getElementById('load-comment-details');
    loadCommentDetails.innerHTML = ``;
    const createNewDiv = document.createElement('div')
    createNewDiv.classList.add('commentDetails');
    createNewDiv.innerHTML = `
    <p>User id: ${value.userId}</p>
    <p>Id: ${value.id}</p>
    <p>Title: ${value.title}</p>
    <p>Comment body: ${value.body}</p>
    `;
    loadCommentDetails.appendChild(createNewDiv);
}