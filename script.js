// DOM Elements
const homePage = document.getElementById('homePage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');
const backToHomeBtn = document.getElementById('backToHomeBtn');
const playerBox = document.getElementById('playerBox');

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

const songCountDisplay = document.getElementById('songCountDisplay');
const spotifyPlayerBtn = document.getElementById('spotifyPlayerBtn');

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider');
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay');

// Data Playlist Lagu
let songs = [
    {
        id: 1,
        title: "Secret Door",
        artist: "Arctic Monkeys",
        album: "Humbug",
        albumArtUrl: "img/secret_door.jpg",
        audioSrc: "audio/secret_door.mp3",
        videoBgSrc: "videos/secret_door.mp4",
        spotifyUrl: "https://open.spotify.com/track/0Cee3U2U0d1JgVfN8g9fU2",
        lyrics: [
            { time: 0, text: "I'm completely occupied" },
            { time: 3, text: "As all the fools on parade" },
            { time: 7   , text: "cavort and carry on for waiting eyes" },
            { time: 11, text: "Ones you would rather be beside" },
            { time: 13, text: "than in front of" },
            { time: 15, text: "But she's never been the kind" },
            { time: 17, text: "to be hollowed by the stares" },
            { time: 19.5, text: "Fools on parade" },
        ]
    },
    {
        id: 2,
        title: "Paparazzi",
        artist: "Lady Gaga",
        album: "The Fame",
        albumArtUrl: "img/paparazzi.jpg",
        audioSrc: "audio/paparazzi.mp3",
        videoBgSrc: "videos/paparazzi.mp4",
        spotifyUrl: "https://open.spotify.com/track/0314R2333noJ2R1C23412",
        lyrics: [
            { time: 0, text: "We are the crowd, we're c-comin' out" },
            { time: 4, text: "Got my flash on, it's true" },
            { time: 8, text: "Need that picture of you" },
            { time: 12, text: "It's so magical, we'd be so fantastical" }
        ]
    },
    {
        id: 3,
        title: "Last Night on Earth",
        artist: "Green Day",
        album: "21st Century Breakdown",
        albumArtUrl: "img/last_night_on_earth.jpg",
        audioSrc: "audio/lastnight.mp3",
        videoBgSrc: "videos/lastnight.mp4",
        spotifyUrl: "https://open.spotify.com/track/021233513Nf28sfaL23",
        lyrics: [
            { time: 0, text: "I text a postcard sent to you" },
            { time: 5, text: "Did it say I'm lonely too?" },
            { time: 10, text: "I send the poems that I wrote" },
            { time: 15, text: "On the last night on Earth" }
        ]
    },
    {
        id: 4,
        title: "Consume",
        artist: "Chase Atlantic",
        album: "Beauty in Death",
        albumArtUrl: "img/consume.jpg",
        audioSrc: "audio/consume.mp3",
        videoBgSrc: "videos/consume.mp4",
        spotifyUrl: "https://open.spotify.com/track/7C031NOI31nfa23120",
        lyrics: [
            { time: 0.8, text: "She said, Careful, or you'll lose it" },
            { time: 4, text: "But, girl, I'm only human" },
            { time: 7, text: "And I know there's a blade where your heart is" },
            { time: 10, text: "And you know how to use it" }
        ]
    },
    {
        id: 5,
        title: "Love",
        artist: "wave to earth",
        album: "0.1 flaws and all",
        albumArtUrl: "img/love_wave_to_earth.jpg",
        audioSrc: "audio/love_wave_to_earth.mp3",
        videoBgSrc: "videos/love.mp4",
        spotifyUrl: "https://open.spotify.com/track/112023910NO02",
        lyrics: [
            { time: 0, text: "Love, my love" },
            { time: 5, text: "Take my heart and soul" },
            { time: 10, text: "With your sweet hold" },
            { time: 15, text: "I will follow you wherever you go" }
        ]
    },
    {
        id: 6,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        album: "AM",
        albumArtUrl: "img/i_wanna_be_yours.jpg",
        audioSrc: "audio/I Wanna Be Yours.mp3",
        videoBgSrc: "videos/iwannabeyours.mp4",
        spotifyUrl: "https://open.spotify.com/track/5vB100O8022",
        lyrics: [
            { time: 0, text: "I wanna be your vacuum cleaner" },
            { time: 4, text: "Breathing in your dust" },
            { time: 8, text: "I wanna be your Ford Cortina" },
            { time: 12, text: "I will never rust" }
        ]
    },
    {
        id: 7,
        title: "Merry Christmas Please Don't Call",
        artist: "Arash Buana",
        album: "Single",
        albumArtUrl: "img/merry_christmas.jpg",
        audioSrc: "audio/merry_christmas.mp3",
        videoBgSrc: "videos/merry.mp4",
        spotifyUrl: "https://open.spotify.com/track/01923019NfaSfa",
        lyrics: [
            { time: 0, text: "Merry Christmas, please don't call" },
            { time: 5, text: "I'm doing fine on my own" },
            { time: 10, text: "Just leave a message after the tone" },
            { time: 15, text: "I'll be home alone" }
        ]
    },
    {
        id: 8,
        title: "Let Down",
        artist: "Radiohead",
        album: "OK Computer",
        albumArtUrl: "img/let_down.jpg", // Masukkan gambar album di img/
        audioSrc: "audio/let_down.mp3",  // Masukkan audio di audio/
        videoBgSrc: "videos/letdown2.mp4", // Masukkan video background di videos/
        spotifyUrl: "https://open.spotify.com/track/2fuCquhmrz3L31g1R32P2i",
        lyrics: [
            { time: 0, text: "Transport, motorways and tramlines" },
            { time: 6, text: "Starting and then stopping" },
            { time: 10, text: "Taking off and landing" },
            { time: 14, text: "The emptiest of feelings" },
            { time: 18, text: "Disappointed people" },
            { time: 22, text: "Clinging onto bottles" },
            { time: 26, text: "And when it comes it's so, so disappointing" },
            { time: 32, text: "Let down and hanging around" },
            { time: 37, text: "Crushed like a bug in the ground" }
        ]
    }
];

let currentSongIndex = 0;
let isPlaying = false;

// Render Home Page
function renderHome() {
    songCountDisplay.textContent = `${songs.length} Tracks`;

    songListElement.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="song-item-left">
                <span class="song-index">${index < 9 ? '0' : ''}${index + 1}</span>
                <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
                <div class="song-info-list">
                    <h3>${song.title}</h3>
                    <p>${song.artist}</p>
                </div>
            </div>
            <div class="song-actions">
                <a href="${song.spotifyUrl}" target="_blank" class="btn-open-spotify" onclick="event.stopPropagation();">
                    <i class="fab fa-spotify"></i> Spotify
                </a>
                <i class="fas fa-circle-play play-icon-hover"></i>
            </div>
        `;

        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage();
        });

        // Hover Video Background Preview
        li.addEventListener('mouseenter', () => {
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Video error:", e));
            }
        });

        li.addEventListener('mouseleave', () => {
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause();
            }
        });

        songListElement.appendChild(li);
    });
}

// Navigation
function showHomePage() {
    playerPage.classList.remove('active');
    homePage.classList.add('active');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause();
    pauseTrack();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    playerPage.classList.add('active');
    backgroundVideoContainer.classList.add('active');

    const song = songs[currentSongIndex];
    if (song && song.videoBgSrc) {
        backgroundVideo.src = song.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Video error:", e));
    }
}

// Player Core
function loadSong(song) {
    if (!song) return;
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    spotifyPlayerBtn.href = song.spotifyUrl;
    
    renderLyrics(song.lyrics);
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
}

function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = '';
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p class='lyric-line'>Lirik tidak tersedia.</p>";
        return;
    }
    lyrics.forEach(line => {
        const p = document.createElement('p');
        p.textContent = line.text;
        p.setAttribute('data-time', line.time);
        p.classList.add('lyric-line');
        lyricsContainer.appendChild(p);
    });
}

function playTrack() {
    isPlaying = true;
    audioPlayer.play().catch(e => console.error("Play error:", e));
    playerBox.classList.add('playing');
    playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    playerBox.classList.remove('playing');
    playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function prevTrack() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
}

function nextTrack() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
}

// Events
audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            let nextLineTime = index + 1 < lyricLines.length ? parseFloat(lyricLines[index + 1].getAttribute('data-time')) : Infinity;

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                line.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                line.classList.remove('highlight');
            }
        });
    }
});

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    const width = playerProgressBarContainer.clientWidth;
    audioPlayer.currentTime = (e.offsetX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => audioPlayer.volume = e.target.value);
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(1)}x`;
});

playerPlayPauseBtn.addEventListener('click', () => isPlaying ? pauseTrack() : playTrack());
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrack);
backToHomeBtn.addEventListener('click', showHomePage);

function init() {
    renderHome();
    if (songs.length > 0) loadSong(songs[currentSongIndex]);
    showHomePage();
}

init();