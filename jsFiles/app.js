function myfunc() {
    const see = document.getElementsByClassName("see")
    const lets = document.getElementsByClassName("lets");
    const animation = document.getElementById("animation");

    animation.style.transform = 'translate(110vw,0VW)';

}

document.getElementById("openMenu").addEventListener('click', () => {
    console.log("helllll")
    document.getElementById('navbarList').style.transform = "translate(0vw , 0)";
})

document.getElementById("menuClose").addEventListener('click', () => {
    console.log("helllll")
    document.getElementById('navbarList').style.transform = "translate(100vw , 0)";
})
