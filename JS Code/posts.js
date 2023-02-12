
// Get Posts Function: 

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((post) => {
        let output = "";
        post.forEach(function(post){
            output +=`
           <div class="cardContainer">
           <span>
           <button onClick="deletePost(this)" class="options">Delete</button>
           <button onClick="editPost('${post.title}' , \`${post.body}\`)" class="options">Edit</button>
          </span>   
             <div class="card">
                <div class="cardTitle">
                 <strong >${post.title}</strong>
                </div>
             <div class="cardBody">
                    <p>${post.body}</p>
                </div>
             </div>
            </div>
            `; 
        }); 
        document.getElementById('output').innerHTML = output;
    })
}

//Add post function:

document.getElementById("postForm").addEventListener('submit',addPost);

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
        }),
    })
    .then((res) => res.json())
    .then((post) => {
        let newData ="";
            newData +=`
           <div class="cardContainer">
           <span>
           <button onClick="deletePost(this)" class="options">Delete</button>
           <button onClick="editPost('${post.title}' , \`${post.body}\`)" class="options">Edit</button>
          </span>   
             <div class="card">
                <div class="cardTitle">
                 <strong >${post.title}</strong>
                </div>
             <div class="cardBody">
                    <p>${post.body}</p>
                </div>
             </div>
            </div>
            `; 
        document.getElementById('output').innerHTML += newData;
    })
}
    
let deletePost=(e) =>{
    e.parentElement.parentElement.remove();
};


 
