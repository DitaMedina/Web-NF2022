function login() {
    event.preventDefault();

    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (uname == "ahmad2017" && pass == "integrity") {
        location.replace("sukses.html"); 
        alert("Login berhasil");
    } else {
        alert("Login gagal");
    }
}