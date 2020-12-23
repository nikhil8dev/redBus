var firebaseConfig = {
    apiKey: "AIzaSyC2VbRgVvIMCyk-KOC45zSj1znN-ODSwII",
    authDomain: "signup-5f47e.firebaseapp.com",
    databaseURL: "https://signup-5f47e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "signup-5f47e",
    storageBucket: "signup-5f47e.appspot.com",
    messagingSenderId: "163961442480",
    appId: "1:163961442480:web:33a65fb7726595cb96eb75"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
 

var clientsRef = firebase.database().ref('clients');


var Fname = document.getElementById('fName')
var Lname = document.getElementById('lName')
var mob = document.getElementById('mobNo')
var password = document.getElementById('pass')
var passConf = document.getElementById('confpass')
var txtemail = document.getElementById('email') 
var signup = document.getElementById('btn')
var passConfErr = document.getElementById('passErr')
var passerr = document.getElementById('passVal')
var submit = document.getElementById('submit')
var logIn = document.getElementById('logIn')

signup.addEventListener('click',e => {
  const email = txtemail.value;
  const pass = password.value;
  const confPass = passConf.value;
  const auth = firebase.auth();
// pass != 0
  if(pass === confPass ){
  const promise = auth.createUserWithEmailAndPassword(email,pass);
  promise.catch(e=>console.log(e.message));
  submit.innerText = 'Query has been submited.'
  
  
  }else{
    passConfErr.innerText = 'Password don\'t match.'
    passerr.innerText = 'Password must be more than eight charecter long.'
  }
   saveClient(Fname, Lname, txtemail, mob)
   
})
 

logIn.addEventListener('click', e =>{
  location.replace('logIn.html')
})


firebase.auth().onAuthStateChanged(data =>{
  if(data){
    console.log(data)
  }else{
    console.log('not log')
  }
})

  

function saveClient(Fname, Lname, txtemail, mob){
 var firstName = Fname.value
 var lastName = Lname.value
 var email = txtemail.value
 var mobile = mob.value
  var newClientRef =  clientsRef.push();
  newClientRef.set({
      firstName:  firstName,
      lastName: lastName,
      email: email,
      mobile: mobile 
  });
}
