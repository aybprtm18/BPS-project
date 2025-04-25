
const firebaseConfig = {
  apiKey: "AIzaSyAl_lPlNuBhbOEA6aS73UpRSXwSs822SxE",
  authDomain: "bpsproject-62ecd.firebaseapp.com",
  projectId: "bpsproject-62ecd",
  storageBucket: "bpsproject-62ecd.firebasestorage.app",
  messagingSenderId: "320175154718",
  appId: "1:320175154718:web:d5e7093b3125cbf4cbf00f",
  measurementId: "G-5PVKTG4Y66"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("admin-section").style.display = "block";
        loadPengaduan();
    })
    .catch(error => alert("Login Gagal: " + error.message));
});

document.getElementById("pengaduan-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const isi = document.getElementById("isi").value;
    db.collection("pengaduan").add({ nama, isi, waktu: new Date() })
    .then(() => alert("Pengaduan terkirim!"))
    .catch(error => alert("Gagal mengirim: " + error.message));
});

function loadPengaduan() {
    db.collection("pengaduan").orderBy("waktu", "desc").onSnapshot(snapshot => {
        const list = document.getElementById("pengaduan-list");
        list.innerHTML = "";
        snapshot.forEach(doc => {
            const data = doc.data();
            const li = document.createElement("li");
            li.textContent = `${data.nama}: ${data.isi}`;
            list.appendChild(li);
        });
    });
}
