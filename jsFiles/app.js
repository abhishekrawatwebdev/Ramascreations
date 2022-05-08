

function myfunc() {
    const see = document.getElementsByClassName("see")
    const lets = document.getElementsByClassName("lets");
    const animation = document.getElementById("animation");

    animation.style.transform = 'translate(110vw,0VW)';

};

document.getElementById("openMenu").addEventListener('click', () => {

    document.getElementById('nav-sm').style.right = "0%";

});
document.getElementById("menuClose").addEventListener('click', () => {

    document.getElementById('nav-sm').style.right = "-100%";

});

const lgItems = document.getElementsByClassName("lg-list");
const lgLength = lgItems.length;


let path = window.location.pathname;
if (path === "/Ramascreations/index.html") {
    lgItems[0].classList.add("lgActive");
}
else if (path === "/Ramascreations/team.html") {
    lgItems[1].classList.add("lgActive");

}
else if (path === "/Ramascreations/gallery.html") {
    lgItems[2].classList.add("lgActive");

}
else if (path === "/Ramascreations/services.html") {
    lgItems[3].classList.add("lgActive");

}
else if (path === "/Ramascreations/about.html") {
    lgItems[4].classList.add("lgActive");
}
else if (path === "/Ramascreations/contact.html") {
    lgItems[5].classList.add("lgActive");

}



const smItems = document.getElementsByClassName("sm-lists");
const smLength = smItems.length;



if (path === "/Ramascreations/index.html") {
    smItems[0].classList.add("smActive");
}
else if (path === "/Ramascreations/team.html") {
    smItems[1].classList.add("smActive");

}
else if (path === "/Ramascreations/gallery.html") {
    smItems[2].classList.add("smActive");

}
else if (path === "/Ramascreations/services.html") {
    smItems[3].classList.add("smActive");

}
else if (path === "/Ramascreations/about.html") {
    smItems[4].classList.add("smActive");
}
else if (path === "/Ramascreations/contact.html") {
    smItems[5].classList.add("smActive");

}


