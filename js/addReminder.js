// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function storeAll(){
  var inputName = document.getElementById("pillName").value;
  var inputShape = document.querySelector('input[name="pillShape1"]:checked').value;
  var inputColor = document.querySelector('input[name="pillColor1"]:checked').value;
  var e = document.getElementById("pillDose");
  var inputDose = e.options[e.selectedIndex].value;
  var f = document.getElementById("pillTimes");
  var inputTimes = f.options[f.selectedIndex].value;
  var inputCalendar = document.getElementById("pillCalendar").value;
  var inputTag = document.querySelector('input[name="customRadioInline1"]:checked').value;

  db.collection("Users").doc().set({
      name: inputName,
      shape: inputShape,
      color: inputColor,
      dose: inputDose,
      times: inputTimes,
      calendar: inputCalendar,
      tag: inputTag
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
}
