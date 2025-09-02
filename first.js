function login(){
    let loginDetails = [{
        "username": "shalvin",
        "password": "savio"
    }
]

let user = document.getElementById("username").value;
let password = document.getElementById("password").value;

let result = false;

for(let i=0; i<loginDetails.length; i++){
    if(user === loginDetails[i].username && password === loginDetails[i].password){
        console.log("login successful");
        result = true;
    }
}
if(!result){
    console.log( window.open("secondpage.html","_blank"));
     
}
else{
    console.log( window.open("project.html","_blank"));
}
}





