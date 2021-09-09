const username = ["Dessintu", "Riska", "Hafiz"];
const password = ["123", "321", "213"];
const fungsiAsyncAwait = async () => {

    await mainFunction();
    await checkme();
}
const checkme = () => {
    console.log("-- PRAKTIKAN CAPEQ--")
}
const mainFunction = () => {
    var valueUsername = document.getElementById("username").value;
    var valuePassword = document.getElementById("password").value;
    if (username.indexOf(valueUsername) > -1) {
        username.indexOf(valueUsername) === password.indexOf(valuePassword) ?
            console.log("Selamat Datang " + valueUsername) :
            console.log("Username tidak cocok dengan password ");
    }
    else {
        console.log("Username dan Password salah, Coba Lagi ");
    }
}
