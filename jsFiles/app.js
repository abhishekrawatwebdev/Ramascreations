window.addEventListener('load', () => {
    console.log("gjdjkdc")
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

});