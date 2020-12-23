// var firebaseConfig = {
//     apiKey: "AIzaSyC2VbRgVvIMCyk-KOC45zSj1znN-ODSwII",
//     authDomain: "signup-5f47e.firebaseapp.com",
//     databaseURL: "https://signup-5f47e-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "signup-5f47e",
//     storageBucket: "signup-5f47e.appspot.com",
//     messagingSenderId: "163961442480",
//     appId: "1:163961442480:web:33a65fb7726595cb96eb75"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   var serOne = document.getElementById("servOne")
//   var serTwo = document.getElementById("servTwo")
//   var serThree = document.getElementById("servThree")
//   var serDet = document.getElementById("servDet")
//   var serCase = document.getElementById("servCase")


//   serOne.addEventListener('click',e =>{

//     firebase.auth().onAuthStateChanged(data =>{
//         if(data){
//           console.log(data)
//           location.replace("services.html")
//         }else{
//             location.replace("logIn.html")
//         }
//       })
//   })

//   serTwo.addEventListener('click',e =>{

//     firebase.auth().onAuthStateChanged(data =>{
//         if(data){
//           console.log(data)
//           location.replace("services-2.html")
//         }else{
//             location.replace("logIn.html").then( location.replace("services.html"))
//         }
//       })
//   })

//   serThree.addEventListener('click',e =>{

//     firebase.auth().onAuthStateChanged(data =>{
//         if(data){
//           console.log(data)
//           location.replace("services-3.html")
//         }else{
//             location.replace("logIn.html").then( location.replace("services.html"))
//         }
//       })
//   })

//   serDet.addEventListener('click',e =>{

//     firebase.auth().onAuthStateChanged(data =>{
//         if(data){
//           console.log(data)
//           location.replace("service-detail.html")
//         }else{
//             location.replace("logIn.html")
//         }
//       })
//   })

//   serCase.addEventListener('click',e =>{

//     firebase.auth().onAuthStateChanged(data =>{
//         if(data){
//           console.log(data)
//           location.replace("cases.html")
//         }else{
//             location.replace("logIn.html")
//         }
//       })
//   })

  

