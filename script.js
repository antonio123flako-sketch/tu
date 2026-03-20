document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("btnMusica");
  const music = document.getElementById("musica");

  // Reproducir / pausar con botón
  btn.addEventListener("click", function () {
    if (music.paused) {
      music.play();
      btn.innerHTML = "💖 Pausar";
    } else {
      music.pause();
      btn.innerHTML = "💖 Música";
    }
  });

  // 🔥 EXTRA: reproducir con cualquier clic en pantalla
  document.body.addEventListener("click", function () {
    if (music.paused) {
      music.play().catch(() => {});
    }
  }, { once: true });

});
