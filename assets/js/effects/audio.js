/* ==========================================================
   AUDIO
========================================================== */

/* ==========================================================
   PLAYLIST
========================================================== */

const playlist = [
  {
    title: "Like a Stone",

    artist: "Audioslave",

    src: "assets/audio/music/like-a-stone.mp3",
  },

  {
    title: "Inside Us All",

    artist: "Creed",

    src: "assets/audio/music/inside-us-all.mp3",
  },

  {
    title: "Here Without You",

    artist: "3 Doors Down",

    src: "assets/audio/music/here-without-you.mp3",
  },
];

/* ==========================================================
   STATE
========================================================== */

let currentTrack = 0;

let audio;

/* ==========================================================
   ELEMENTS
========================================================== */

const elements = {
  toast: document.querySelector(".audio-player__toast"),

  title: document.querySelector(".audio-player__title"),

  artist: document.querySelector(".audio-player__artist"),

  button: document.querySelector(".audio-player__toggle"),
};

/* ==========================================================
   INIT
========================================================== */

function initAudio() {
  createAudio();

  bindAudioEvents();
}

/* ==========================================================
   CREATE AUDIO
========================================================== */

function createAudio() {
  audio = new Audio();

  audio.volume = 0.25;

  loadTrack(currentTrack);
}

/* ==========================================================
   LOAD TRACK
========================================================== */

function loadTrack(index) {
  currentTrack = index;

  audio.src = playlist[index].src;

  updateToast();
}

/* ==========================================================
   UPDATE TOAST
========================================================== */

function updateToast() {
  const track = playlist[currentTrack];

  elements.title.textContent = track.title;

  elements.artist.textContent = track.artist;
}

/* ==========================================================
   SHOW TOAST
========================================================== */

function showToast() {
  elements.toast.classList.add("show");

  setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 3500);
}

/* ==========================================================
   NEXT TRACK
========================================================== */

function nextTrack() {
  currentTrack++;

  if (currentTrack >= playlist.length) {
    currentTrack = 0;
  }

  loadTrack(currentTrack);

  audio.play();

  showToast();
}

/* ==========================================================
   TOGGLE AUDIO
========================================================== */

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }

  updateButton();
}

/* ==========================================================
   UPDATE BUTTON
========================================================== */

function updateButton() {
  elements.button.textContent = audio.paused ? "▶" : "❚❚";
}

/* ==========================================================
   EVENTS
========================================================== */

function bindAudioEvents() {
  let started = false;

  function startPlayback() {
    if (started) return;

    started = true;

    audio.play();

    showToast();
  }

  document.addEventListener(
    "click",

    startPlayback,

    { once: true },
  );

  audio.addEventListener("ended", nextTrack);

  elements.button.addEventListener(
    "click",

    toggleAudio,
  );

  audio.addEventListener(
    "play",

    updateButton,
  );

  audio.addEventListener(
    "pause",

    updateButton,
  );
}
