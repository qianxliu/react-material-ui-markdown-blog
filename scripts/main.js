var backgoundcolor = randomColor(); // a hex code for an attractive color

document.body.style.backgroundColor = backgoundcolor;


let button = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的大名!');
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = "Neteraxe の 无名小站" + "欢迎" + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = "Neteraxe の 无名小站" + "欢迎" + storedName;
}

button.onclick = function () {
    setUserName();
}
