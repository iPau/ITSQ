// var mainText = document.getElementById("main");
// var submit = document.getElementById("mainbt");
// var firebaseRef = firebase.database().ref();
//
// var firebasehead = firebase.database().ref().child("Heading");
// firebasehead.on('value',function(datasnapshot){
//   mainText.value = datasnapshot.val(); // retreiving data
// });
// function mainbt1() {
//
//   var msg = mainText.value;
//
//   firebaseRef.push().set(msg); // append data
//
// }

//$(document).ready(function functionName() {
// var maintab = document.getElementById("tab");
//   var rootRef = firebase.database().ref().child("Users");
//   rootRef.on("child_added", snap => {
//
//     var name = snap.child("Name").val();
//     //alert(name); //retreive multiple
//     maintab.append("<tr><td>" + name +  "</td></tr>");
//
//   });
//});

var rootRef = firebase.database().ref().child("Employee Details");
  rootRef.on("child_added", snap => {

    var uname = snap.child("username").val();
    var pss = snap.child("password").val();

  });
var uname = document.getElementById("user");
var pass = document.getElementById("pass");
var firebaseRef = firebase.database().ref();
var exist = 0;
var employeeRef = firebaseRef.child("Employee Details").child(firebaseRef.push().key);
function Samp() {
  // var u = uname.value;
  // var p = pass.value;
  // rootRef.on("child_added", snap => {
  //   var uname = snap.child("username").val();
  //   var pss = snap.child("password").val();
  //   if(uname == u && pss == p){
  //     exist = 1;
  //   }
  // });
  // if(exist == 1){
  //   alert("Exist");
  // }
  // else{
  //   alert("Not Exist");
  // } // Userlogin Verify

    // employeeRef.set({
    //   username: uname.value,
    //   password: pass.value
    // }); // add value to database
    // employeeRef.set(p);
}
