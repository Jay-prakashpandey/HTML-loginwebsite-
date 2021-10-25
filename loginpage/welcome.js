firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, Welcome you loged in" + user.email
    }
})
function logout(){
    firebase.auth().signOut()
}