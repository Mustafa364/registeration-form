
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  import { getDatabase,ref,set, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCzEMeA-R1b7kd-hjEDc4uNbsK-5enTBbQ",
    authDomain: "registeaion-form.firebaseapp.com",
    databaseURL: "https://registeaion-form-default-rtdb.firebaseio.com",
    projectId: "registeaion-form",
    storageBucket: "registeaion-form.appspot.com",
    messagingSenderId: "113423203994",
    appId: "1:113423203994:web:e261f2038c57cdc9a9e923",
    measurementId: "G-Z1TW5447VW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const database = getDatabase();

var a = document.getElementById("task");
var titleinp = document.getElementById("title");
var parent = document.getElementById("parent");

window.saveTask = function(){
  var obj = {
      task: a.value,
      title: titleinp.value,
  };
  obj.id = Math.random().toString().slice(2);
  let reference = ref(database, `tasks/${obj.id}/`);
  set(reference,obj);
  console.log(obj);
};

function getData(){
  let reference = ref(database, "tasks/")
  let arr = [];
  onChildAdded(reference, function(data){
      arr.push(data.val());
      console.log(arr);
      parent.innerHTML = "";
      for(var i = 0; i < arr.length; i++){
          parent.innerHTML += `<li>${arr[i].task}</li>`
        }
    });
}
getData();
