// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAhGgTe1_bU-9e0nFSFXq8txlTQzyHXQiU",
    authDomain: "artis-95091.firebaseapp.com",
    databaseURL: "https://artis-95091.firebaseio.com",
    projectId: "artis-95091",
    storageBucket: "artis-95091.appspot.com",
    messagingSenderId: "629246081278",
    appId: "1:629246081278:web:ac3446b38f8c7c114e0daf",
    measurementId: "G-MXPRLTKZKC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();


var block = document.getElementById("block123");

const txtEmail = document.getElementById('Temail')
const txtPassword = document.getElementById('Tpassword')

function login(){
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message))
}

function signup(){
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message))
}
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser)
    } else {
        console.log("not logged in");
    }
})
var cname = document.getElementById("name");
var cemail = document.getElementById("email");
var ccredits = document.getElementById("credits");
var cprice = document.getElementById("price");
var sButton = document.getElementById("sButton");

var css = 'h1 { background: lightblue}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

function saveData(){
    console.log("bob")
    const userData = {
        Name: cname.value,
        Email: cemail.value,
        Credits: ccredits.value,
        Price: cprice.value,
    }
    db.collection("CompanyData").add(userData).catch(function(error) {
        console.error("Error adding document: ", error);
    });
}


function printData(){
    db.collection("CompanyData").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            let name = doc.data().Name;
            let email = doc.data().Email;
            let credits = doc.data().Credits;
            let price = doc.data().Price;

            var newLine = document.createElement('br');
            var head1 = document.createElement('h1');
            var head1node = document.createTextNode("Name: " + name + "     Email: " + email + "     Credits: " + credits + "     Price: $" + price);

            head1.appendChild(head1node);
            block.appendChild(head1);
            block.appendChild(newLine);
        });
    });
}
function logout(){
firebase.auth().signOut();
}
