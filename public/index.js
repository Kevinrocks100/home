var firebaseConfig = {
  apiKey: "AIzaSyBEXrgqXEA54Jvv1l04Px8bTodK1KAEdAc",
  authDomain: "fir-f80af.firebaseapp.com",
  databaseURL: "https://fir-f80af-default-rtdb.firebaseio.com",
  projectId: "fir-f80af",
  storageBucket: "fir-f80af.appspot.com",
  messagingSenderId: "371053966260",
  appId: "1:371053966260:web:81a6970d6b486bef2138e1"
};
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("navbar").innerHTML = `
      <nav class="navbar navbar-light navbar-expand-md sticky-top bg-dark" id = "nav">
        <div class="container-fluid" id="container-fluid"><a class="navbar-brand text-white" href="index.html">KCP Budgeting</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link active text-white" href="budgeting.html">Budgeting</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="savings.html">Savings</a></li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link active" onclick="logout()" ><button class="btn btn-primary" type="button">Logout</button></a></li>
            </ul>
          </div>
        </div>
      </nav>
    `
  }
  else {
    document.getElementById("navbar").innerHTML = `
      <nav class="navbar navbar-light navbar-expand-md sticky-top bg-dark" id = "nav">
        <div class="container-fluid" id="container-fluid"><a class="navbar-brand text-white" href="index.html">KCP Budgeting</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link active text-white" href="budgeting.html">Budgeting</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="savings.html">Savings</a></li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link active" href="login.html"><button class="btn btn-outline-primary" type="button">Log In</button></a></li>
            </ul>
          </div>
        </div>
      </nav>
    `
  }
})

function logout(){
  firebase.auth().signOut().then(function() {
    alert('Logged out');
  }).catch(function(error) {
    console.log(error);
  });
}
