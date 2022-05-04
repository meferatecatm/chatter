
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCUdEBHDnCIzn6hNgNd9GL7ydcHQ9z4z4o",
      authDomain: "kwitter-711af.firebaseapp.com",
      databaseURL: "https://kwitter-711af-default-rtdb.firebaseio.com",
      projectId: "kwitter-711af",
      storageBucket: "kwitter-711af.appspot.com",
      messagingSenderId: "382957887586",
      appId: "1:382957887586:web:3bf750e2f96b152957313b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name= localStorage.getItem("keyusername");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

    function addRoom(){
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("kwitter_room",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("kwitter_room",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("kwitter_room");
      localStorage.removeItem("keyusername");
      window.location="index.html";
}
