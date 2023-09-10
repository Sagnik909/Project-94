var firebaseConfig = {
  apiKey: "AIzaSyB4LY3TIq7vL-b_zcJ6tab5UACjPeQ_68w",
  authDomain: "hornbill-1f4d8.firebaseapp.com",
  databaseURL: "https://hornbill-1f4d8-default-rtdb.firebaseio.com",
  projectId: "hornbill-1f4d8",
  storageBucket: "hornbill-1f4d8.appspot.com",
  messagingSenderId: "923464174495",
  appId: "1:923464174495:web:5bf77bd5f4261535384baa"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  console.log(user_name);

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    console.log(room_name);
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "hornbill_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "hornbill_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  