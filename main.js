document.addEventListener("DOMContentLoaded", function () {
        document.body.classList.remove("container");
        let audio = new Audio('hbd.mp3')
        audio.play();

        setTimeout(() => {
                window.location.href = "https://reyhananf.github.io/hbd/cmd.html";
              }, 10000);
})
