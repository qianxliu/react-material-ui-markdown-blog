const myHeading = document.querySelector('h1');
myHeading.textContent = 'Neteraxe の 无名小站';

let img = document.querySelector('img');

img.onclick = function () {
    let src = img.getAttribute('src');
    if (src == 'images/favicon.png')
        img.setAttribute('src', 'images/earth.png');
    else if (src == 'images/earth.png')
        img.setAttribute('src', 'images/love2.jpg');
    else
        img.setAttribute('src', 'images/favicon.png');
}

let button = document.querySelector('button');

function setUserName() {
    let name = prompt('请输入你的大名!');
    if (!name)
        setUserName();
    else {
        localStorage.setItem('name', name);
        myHeading.innerHTML = "Neteraxe の 无名小站" + "欢迎" + name + "同学！";
    }
}

if (!localStorage.getItem('name'))
    setUserName();
else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = "Neteraxe の 无名小站" + "欢迎" + name + "同学！";
}

button.onclick = function () {
    setUserName();
}