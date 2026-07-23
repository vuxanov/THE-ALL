(function () {
  var videos = Array.prototype.slice.call(
    document.querySelectorAll(".site-header__video")
  );

  if (!videos.length) {
    return;
  }

  var current = 0;

  function playVideo(index) {
    videos.forEach(function (video, i) {
      var active = i === index;
      video.classList.toggle("is-active", active);

      if (active) {
        video.currentTime = 0;
        video.play().catch(function () {});
      } else {
        video.pause();
      }
    });
  }

  videos.forEach(function (video, index) {
    video.addEventListener("ended", function () {
      current = (index + 1) % videos.length;
      playVideo(current);
    });
  });

  playVideo(0);
})();
