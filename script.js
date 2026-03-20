onload = () => {
  document.body.classList.remove("container");
};
// 🎵 Control de música
const musica = document.getElementById("musica");
const btn = document.getElementById("btnMusica");

let reproduciendo = false;

btn.addEventListener("click", () => {
  if (!reproduciendo) {
    musica.play();
    reproduciendo = true;
    btn.innerHTML = "<span>⏸</span>";
  } else {
    musica.pause();
    reproduciendo = false;
    btn.innerHTML = "<span>🎵</span>";
  }
});
