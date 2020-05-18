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

var cname = document.getElementById("name");
var cemail = document.getElementById("email");
var ccredits = document.getElementById("credits");
var cprice = document.getElementById("price");
var sButton = document.getElementById("sButton");
var block = document.getElementById("block");

function saveData(){ 
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

db.collection("CompanyData").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        const name = doc.data().Name;
        const email = doc.data().Email;
        const credits = doc.data().Credits;
        const price = doc.data().Price;
        var head1 = document.createElement('h1');
        var newLine = document.createElement('br');
        var head1node = document.createTextNode("Name: " + name);
        var head2 = document.createElement('h1');
        var head2node = document.createTextNode("Email: " + email + "     Credits: " + credits + "     Price: " + price);
        head1.appendChild(head1node);
        head2.appendChild(head2node);
        block.appendChild(head1);
        block.appendChild(head2);
        block.appendChild(newLine);
        block.appendChild(newLine);
    });
});


firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser)
    } else {
        console.log("not logged in");
    }
})

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

function logout(){
firebase.auth().signOut();
}