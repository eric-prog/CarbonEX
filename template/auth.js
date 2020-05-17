(function() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDXgfRahUI_SgoXrLQxyi0XiO1QWv-8da0",
        authDomain: "artis-389c6.firebaseapp.com",
        databaseURL: "https://artis-389c6.firebaseio.com",
        projectId: "artis-389c6",
        storageBucket: "artis-389c6.appspot.com",
        messagingSenderId: "120329458512",
        appId: "1:120329458512:web:9cea221335ccbe4f7dd255",
        measurementId: "G-VQW32YG1TD"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

    var cname = document.getElementById("name");
    var cemail = document.getElementById("email");
    var ccredits = document.getElementById("credits");
    var cprice = document.getElementById("price");
    var sButton = document.getElementById("sButton");

    function saveData(){
        let acname = cname.value;
        let bcemail = cemail.value;
        let ecredits = ccredits.value;
        let dcprice = cprice.value;
        db.collection("Companies").doc(acname.value).set({
            Email: bcemail,
            Credits: ecredits,
            Price: dcprice
        })
    }

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

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser)
        } else {
            console.log("not logged in");
        }
    })
}());