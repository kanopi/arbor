document.addEventListener('DOMContentLoaded', function () {
  const heroComponents = document.querySelectorAll('.hero-paragraph');

  heroComponents.forEach(hero => {
    const heroImage = hero.querySelector('.hero-image');
    const heroControls = hero.querySelector('.video-background-controls.hero-body');

    if (heroImage && heroImage.classList.contains('video-background') && heroControls) {
      heroControls.classList.add('has-video');
    }

    const playToggle = hero.querySelector('.video-background-controls.hero-body .play-toggle');
    const hiddenPlayToggle = hero.querySelector('.video-background-controls:not(.hero-body) .play-toggle');

    if (playToggle && hiddenPlayToggle) {
      playToggle.addEventListener('click', function (e) {
        e.preventDefault();
        playToggle.classList.toggle('paused');
        hiddenPlayToggle.click();
      });
    }

    const muteToggle = hero.querySelector('.video-background-controls.hero-body .mute-toggle');
    const hiddenMuteToggle = hero.querySelector('.video-background-controls:not(.hero-body) .mute-toggle');

    if (muteToggle && hiddenMuteToggle) {
      muteToggle.addEventListener('click', function (e) {
        e.preventDefault();
        muteToggle.classList.toggle('muted');
        hiddenMuteToggle.click();
      });
    }
  });
});
