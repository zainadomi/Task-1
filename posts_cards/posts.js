document.getElementById('getPosts').addEventListener('click',getPosts);
document.getElementById('addPost').addEventListener('submit',addPost);



function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Cards:</h2>';
        data.forEach(function(post){
            output +=`
            <button onclick="editInfo"> <div class="cardContainer">
             <div class="card">
                <div class="cardTitle">
                 <strong >${post.title}</strong>
                </div>
             <div class="cardBody">
                    <p>${post.body}</p>
                </div>
             </div>
            </div>
            </button>
            `;
        }); 
        document.getElementById('output').innerHTML = output;
    })
}
function editInfo(){
    document.getElementById('title').innerHTML(post.title);
}

function addPost(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            title:title,
            body:body,
        })
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}