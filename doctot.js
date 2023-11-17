const firebaseConfig = {
    apiKey: "AIzaSyA8dNXKz1xNbhiiBbPgzr4yC2vlnAAXvW0",
    authDomain: "doctorlogin-fa433.firebaseapp.com",
    databaseURL: "https://doctorlogin-fa433-default-rtdb.firebaseio.com",
    projectId: "doctorlogin-fa433",
    storageBucket: "doctorlogin-fa433.appspot.com",
    messagingSenderId: "1043812918428",
    appId: "1:1043812918428:web:7b41ccc5aefa149f3bf959",
    measurementId: "G-E6RP7VKSYS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.then((e)=>{

       console.log(e)
            window.location.href="./wards.html";

    })
    .catch((e)=>{

    console.log(e)
    alert("Invalid Email or password")
    })
    //promise.catch( e => alert(e.msg));
    //window.location.href="./loginafter.html";
  
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("registered sucessfully")
    window.location.href="./loginafter.html";
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}