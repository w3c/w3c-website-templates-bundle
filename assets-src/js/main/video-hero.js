let videoHero = function () {
    /* My refactored code */
    var heroVid = document.querySelector('[data-video="hero"]');
    var heroVidControl = document.querySelector('[data-video-control="hero"]');

    if (heroVid && heroVidControl) {
    // Remove native controls and show custom button
    heroVid.removeAttribute("controls");
    heroVidControl.removeAttribute("hidden");

    // Media query for reduced motion preference
    var motionQuery = window.matchMedia("(prefers-reduced-motion)");

    // Helper to update button text
    function updateButtonState(isPlaying) {
        const label = isPlaying ? "Pause" : "Play";
        heroVidControl.querySelector("span").innerText = label;
        heroVidControl.classList.toggle("js-play-video", isPlaying);
    }

    // Play video with error handling
    function playHeroVid() {
        heroVid.play().then(() => {
        updateButtonState(true);
        }).catch((error) => {
        console.warn("Video play failed:", error);
        updateButtonState(false);
        });
    }

    // Pause video
    function pauseHeroVid() {
        heroVid.pause();
        updateButtonState(false);
    }

    // Handle user motion preference
    function handleReduceMotionChanged() {
        if (motionQuery.matches) {
        pauseHeroVid();
        } else {
        playHeroVid();
        }
    }

    // Attempt to autoplay
    var promise = heroVid.play();
    if (promise !== undefined) {
        promise
        .then(() => {
            updateButtonState(true);
        })
        .catch((error) => {
            console.warn("Autoplay was prevented:", error);
            updateButtonState(false);
        });
    }

    // Media query listener
    motionQuery.addEventListener("change", handleReduceMotionChanged);
    handleReduceMotionChanged();

    // Toggle video playback on control click
    document.addEventListener("click", function (event) {
        const button = event.target.closest('[data-video-control="hero"]');
        if (button) {
        if (heroVid.paused) {
            playHeroVid();
        } else {
            pauseHeroVid();
        }
        }
    });

    // Unregister media query listener on page unload to prevent memory leaks
    window.addEventListener("beforeunload", () => {
        motionQuery.removeEventListener("change", handleReduceMotionChanged);
    });
    }
}
export {videoHero}