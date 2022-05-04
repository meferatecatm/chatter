function addUser(){
    username_var = document.getElementById("user_name").value;
    localStorage.setItem("keyusername",username_var);
    window.location="kwitter_room.html";
}