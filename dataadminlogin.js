const firebaseConfig = {
    apiKey: "AIzaSyD3MAc6Qa4f07sOHN0siBxbqSuDk5tnYiY",
    authDomain: "adminlogin-fdfb9.firebaseapp.com",
    databaseURL: "https://adminlogin-fdfb9-default-rtdb.firebaseio.com",
    projectId: "adminlogin-fdfb9",
    storageBucket: "adminlogin-fdfb9.appspot.com",
    messagingSenderId: "531390338874",
    appId: "1:531390338874:web:c5499690045901609ba203",
    measurementId: "G-E7DPKPTT8B"
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
       alert("Login sucessfully")
            window.location.href="./ad.html";

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