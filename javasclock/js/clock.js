
let userName = prompt("Lütfen adinizi giriniz:")
let myName= document.querySelector("#myName")

if(userName <= 0){
    alert("Bu kisim boş birakilamaz!")
    location.reload();
} else {
    myName.innerHTML = `${userName[0].toUpperCase()}${userName.slice(1).toLowerCase()}`
}

function time() {
    let date = new Date().toLocaleString('tr-TR');
    document.getElementById('myClock').innerHTML = date;
}
setInterval(time,1000)