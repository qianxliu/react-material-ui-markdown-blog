let img = document.querySelector('img');

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

var gitalk = new Gitalk({
    clientID: '1bbce2bcdc0813fc33ae',
    clientSecret: '5398db17c3b4ffe0c40a960c86dac716443d4146',
    repo: 'GitHub repo',
    owner: 'GitHub repo owner',
    admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
    id: location.pathname,      // Ensure uniqueness and length less than 50
    distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container')