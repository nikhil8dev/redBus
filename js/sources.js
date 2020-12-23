
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

  var clientsRef = firebase.database().ref('Resources');

 var Counrtry = document.getElementById('country');
 var State = document.getElementById('state');
 var Industry = document.getElementById('industry');
 var Company = document.getElementById('company');
 var Ref = document.getElementById('ref');
 var Message = document.getElementById('message');

 var Submit = document.getElementById('btn');
 var logout = document.getElementById('logout')
 Submit.addEventListener('click', e => { 
     
    alert('Thank you for choosing Us! One of our representative will get back to you shortly!')
    console.log(Industry.value)

    var Sources =  clientsRef.push();
    Sources.set({
        Counrtry:  Counrtry.value,
        State: State.value,
        Industry: Industry.value,
        Company: Company.value,
        Referance: Ref.value,
        Message: Message.value
    });
 })


 logout.addEventListener('click', e =>{
    firebase.auth().signOut();
    location.replace('logIn.html')
})

 

firebase.auth().onAuthStateChanged(data =>{
    if(data){
      console.log(data)
      location.replace("sources.html")
    }else{
      console.log('not log')
     
    }
  })
  