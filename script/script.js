function getinput(){
    if (document.getElementById("myinput").value === "" || document.getElementById("myinput").value === !"email"){
        alert("Введите email!");
    } else {
        alert("Данные отправлены");
    }
}
getinput();