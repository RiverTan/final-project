// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// const firestore = firebase.firestore();
// const docRef = db.doc("Users/one");
// const outputName = document.querySelector(".pillName");
// const outputIntro = document.querySelector(".pillIntro");
// const outputCalendar = document.querySelector(".pillCalendar");
const row = document.querySelector("#row");

db.collection("Users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      row.innerHTML += "<div class='col-lg-4 col-md-6 mb-4 pill'> <div class='card'> <div class='card-header'> <span class='h4 " + doc.data().name +"'>" + doc.data().name + "</span> <div class='d-inline float-right'> <a href='addReminder.html' class='text-secondary'><i class='fa fa-gear'></i></a></div></div><div class='card-body'><p class='card-text'>Shape: " + doc.data().shape + "<img class='shapeInfo' src='img/"+ doc.data().shape + ".png'></p>" + "<p class='card-text'>Color: " + doc.data().color + "<img class='colorInfo' src='img/" + doc.data().color + ".png'></p>" + "<p class='card-text'>Dose: " + doc.data().dose + "</p>" + "<p class='card-text'>Times: " + doc.data().times + "</p></div> <div class='card-footer'><small>" + doc.data().calendar + "</small></div> </div></div>"
    });
});

// row.innerHTML += "<div class='col-lg-4 col-md-6 mb-4 pill'> <div class='card'> <div class='card-header'> <span class='h4 " + doc.data().name +"'>" + doc.data().name + "</span> <div class='d-inline float-right'> <a href='addReminder.html' class='text-secondary'><i class='fa fa-gear'></i></a></div></div><div class='card-body'><p class='card-text'>Shape: " + doc.data().shape + "</p>" + "<p class='card-text'>Color: " + doc.data().color + "</p>" + "<p class='card-text'>Dose: " + doc.data().dose + "</p>" + "<p class='card-text'>Times: " + doc.data().times + "</p></div> <div class='card-footer'><small>" + doc.data().calendar + "</small></div> </div></div>"
//Delete documents

// deleteData = function(){
//   db.collection("Users").doc().delete().then(function() {
//       console.log("Document successfully deleted!");
//   }).catch(function(error) {
//       console.error("Error removing document: ", error);
//   });
// }

//Real time updata data
// getRealtimeUpdates = function(){
//   docRef.onSnapshot(function(doc){
//     if(doc && doc.exists){
//       const myData = doc.data();
//       outputName.innerText = myData.name;
//       outputIntro.innerHTML = "<p>Shape: " + myData.shape+ "</p>" + "<p>Color: " + myData.color + "</p>" +
//                               "<p>Dose: " + myData.dose + "</p>" + "<p>Times: " + myData.times + "</p>";
//       outputCalendar.innerText = myData.calendar;
//
//     }
//   });
// }
//
// getRealtimeUpdates();




//Test add data
// testData = function(){
//   db.collection("users").add({
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//   })
//   .then(function(docRef) {
//       console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//       console.error("Error adding document: ", error);
//   });
// }
//
// testData();

//Test data types
// typeData = function(){
//   var docData = {
//     stringExample: "Hello world!",
//     booleanExample: true,
//     numberExample: 3.14159265,
//     dateExample: new Date("December 10, 1815"),
//     arrayExample: [5, true, "hello"],
//     nullExample: null,
//     objectExample: {
//         a: 5,
//         b: {
//             nested: "foo"
//         }
//     }
// };
// db.collection("data").doc("one").set(docData).then(function() {
//     console.log("Document successfully written!");
// });
// }
//
// typeData();
