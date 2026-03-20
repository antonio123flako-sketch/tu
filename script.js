document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btnMusica");
  const music = document.getElementById("musica");

  btn.addEventListener("click", function () {
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  });

  document.body.addEventListener("click", function () {
    if (music.paused) {
      music.play().catch(() => {});
    }
  }, { once: true });
});
