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

    const txtEmail = document.getElementById('Temail')
    const txtPassword = document.getElementById('Tpassword')
    const btnLogin = document.getElementById('Tlogin')
    const btnSignup = document.getElementById('Tsignup')
    const btnLogout = document.getElementById('Tlogout')

    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message))
    })

    btnSignup.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message))
    })

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    })

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser)
            btnLogout.style.display = "block";
        } else {
            console.log("not logged in");
            btnLogout.style.display = "none";
        }
    })
}());