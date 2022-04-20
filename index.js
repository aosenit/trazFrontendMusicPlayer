const musicImage = document.querySelector(".image");
const musicTitle = document.querySelector(".songName");

const musicArtistName = document.querySelector(".artistName");

const audio = document.querySelector(".music");

const next = document.querySelector(".next");

const previous = document.querySelector(".previous");

const play = document.querySelector(".play");

const download = document.querySelector(".download");

const musicArray = [
  {
    songName: "Jailer",
    artistName: "Asa",
    image: "./images/pixOne.jpg",
    audio: "./audio/Asa-Jailer.mp3",
  },

  {
    songName: "Temi Ni",
    artistName: "Brymo",
    image: "./images/pixTwo.jpg",
    audio: "./audio/Brymo-Temi.mp3",
  },

  {
    songName: "Smile for me",
    artistName: "Simi",
    image: "./images/pixThree.jpg",
    audio: "./audio/Simi-Smile.mp3",
  },

  {
    songName: "Joro",
    artistName: "Wizkid",
    image: "./images/pixFour.jpg",
    audio: "./audio/Wizkid-Joro.mp3",
  },
];

let currentSong = 0;

function callSong() {
  audio.src = musicArray[currentSong].audio;
  musicImage.src = musicArray[currentSong].image;
  musicTitle.textContent = musicArray[currentSong].songName;
  musicArtistName.textContent = musicArray[currentSong].artistName;
  download.href = musicArray[currentSong].audio;
}

window.onload = callSong();

play.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    play.innerHTML = `<i class="bx bx-pause"></i>`;
  } else {
    audio.pause();
    play.innerHTML = `<i class="bx bx-play"></i>`;
  }
});

next.addEventListener("click", () => {
  currentSong++;

  if (currentSong > musicArray.length - 1) {
    currentSong = 0;
  }
  callSong();
});

previous.addEventListener("click", () => {
  currentSong--;

  if (currentSong < 0) {
    currentSong = musicArray.length - 1;
  }
  callSong();
});
