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

let songs = [
    {
        id: 1,
        title: "Secret Door",
        artist: "Arctic Monkeys",
        album: "Humbug",
        albumArtUrl: "img/secret_door.jpg",
        audioSrc: "audio/secret_door.mp3",
        videoBgSrc: "videos/secret_door.mp4",
        spotifyUrl: "https://open.spotify.com/track/4dtP86vkhzwNXCFpCtizce?si=1124f2be8f2e45e7",
        lyrics: [
            { time: 0, text: "I'm completely occupied" },
            { time: 3, text: "As all the fools on parade" },
            { time: 7, text: "cavort and carry on for waiting eyes" },
            { time: 11, text: "Ones you would rather be beside" },
            { time: 13, text: "than in front of" },
            { time: 15, text: "But she's never been the kind" },
            { time: 17, text: "to be hollowed by the stares" },
            { time: 19.5, text: "Fools on parade" }
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
        spotifyUrl: "https://open.spotify.com/track/02XnQdf7sipaKBBHixz3Zp?si=aed2293b82c043a0",
        lyrics: [
            { time: 0.7, text: "Ready for those flashing lights" },
            { time: 4, text: "'Cause you know that baby I" },
            { time: 6, text: "I'm your biggest fan" },
            { time: 7, text: "I'll follow you until you love me" },
            { time: 10, text: "Papa-paparazzi" },
            { time: 12.7, text: "Baby, there's no other superstar" },
            { time: 15, text: "You know that I'll be" },
            { time: 17, text: "Your papa-paparazzi" },
            { time: 19.7    , text: "Promise I'll be kind" },
            { time: 22, text: "But I won't stop until that boy is mine" },
            { time: 26.5, text: "Baby, you'll be famous" },
            { time: 28, text: "Chase you down until you love me" },
            { time: 31, text: "Papa-paparazzi" },
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
        spotifyUrl: "https://open.spotify.com/track/5TpPSTItCwtZ8Sltr3vdzm?si=ceb248d453d64034",
        lyrics: [
            { time: 0, text: "My beatin' heart belongs to you" },
            { time: 8, text: "I walked for miles 'til I found you" },
            { time: 16, text: "I'm here to honour you" },
            { time: 20, text: "If I lose everything in the fire" },
            { time: 25, text: "I'm sendin' all my love to you" }
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
        spotifyUrl: "https://open.spotify.com/track/0X2bh8NVQ8svDQIn2AdCbW?si=c370085fb00541ca",
        lyrics: [
            { time: 0, text: "And I know there's a blade where your heart is" },
            { time: 3.5, text: "And you know how to use it" },
            { time: 7, text: "And you can take my flesh if you want, girl" },
            { time: 10, text: "But baby, don't abuse it" },
            { time: 13, text: "These voices in my head, screaming, Run now" },
            { time: 16.5, text: "I'm praying that they're human" }
        ]
    },
    {
        id: 5,
        title: "Love",
        artist: "wave to earth",
        album: "0.1 flaws and all",
        albumArtUrl: "img/love_wave_to_earth.jpg",
        audioSrc: "audio/love.mp3",
        videoBgSrc: "videos/love.mp4",
        spotifyUrl: "https://open.spotify.com/track/5mtTAScDytxMMqZj14NmlN?si=4d38e27bf537469b",
        lyrics: [
            { time: 0, text: "Geujaseoya boineun naui" },
            { time: 6.5, text: "yeongwon" },
            { time: 13, text: "🎶" }
        ]
    },
    {
        id: 6,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        album: "AM",
        albumArtUrl: "img/i_wanna_be_yours.jpg",
        audioSrc: "audio/i_wanna_be_yours.mp3",
        videoBgSrc: "videos/i_wannabeyours.mp4",
        spotifyUrl: "https://open.spotify.com/track/5XeFesFbtLpXzIVDNQP22n?si=8b23b53de42b4faa",
        lyrics: [
            { time: 0, text: "Secrets I have held in my heart" },
            { time: 2.5, text: "Are harder to hide than I thought" },
            { time: 6, text: "Maybe I just wanna be yours" },
            { time: 9, text: "I wanna be yours, I wanna be yours" },
            { time: 18, text: "Wanna be yours" },
            { time: 21.2, text: "Wanna be yours" },
            { time: 24.5, text: "Wanna be yours" },
            { time: 27.2, text: "If you like your coffee hot" },
            { time: 30.2, text: "Let me be your coffee pot" },
            { time: 34.2, text: "You call the shots, babe" },
            { time: 36.8, text: "I just wanna be yours" },
            { time: 41, text: "I wanna be your vacuum cleaner (wanna be yours)" },
            { time: 44.5, text: "Breathin' in your dust (wanna be yours)" },
            { time: 48, text: "I wanna be your Ford Cortina (wanna be yours)" },
            { time: 51.7, text: "I will never rust (wanna be yours)" },
            { time: 54, text: "I just wanna be yours (wanna be yours)" },
            { time: 57, text: "I just wanna be yours (wanna be yours)" }
        ]
    },
    {
        id: 7,
        title: "Merry Christmas, Please Don't Call",
        artist: "Bleachers",
        album: "Single",
        albumArtUrl: "img/merry_christmas.jpg",
        audioSrc: "audio/merry.mp3",
        videoBgSrc: "videos/merry.mp4",
        spotifyUrl: "https://open.spotify.com/track/0UOG0zUn7t8m8QcxfzR7AH?si=078a204c65ae43ba",
        lyrics: [
            { time: 0, text: "I want one ticket out of your heavy gaze" },
            { time: 5, text: "I want one ticket off of your carousel" },
            { time: 8.5, text: "But you should know" },
            { time: 10.8, text: "that I die slow" },
            { time: 13.8, text: "Running through the halls" },
            { time: 15.7, text: "of your haunted home" },
            { time: 17.7, text: "And the toughest part" },
            { time: 19.8, text: "is that we both know" },
            { time: 21.8, text: "What happened to you" },
            { time: 23.8, text: "Why you're out on your own" },
            { time: 26.7, text: "Merry Christmas" },
            { time: 28.8, text: "please don't call" },
            { time: 30, text:   "Merry Christmas" },
            { time: 32.8, text: "I'm not yours at all" },
            { time: 35, text: "Merry Christmas" },
            { time: 37, text: " please don't call me" },
        ]
    },
    {
        id: 8,
        title: "Let Down",
        artist: "Radiohead",
        album: "OK Computer",
        albumArtUrl: "img/let_down.jpg",
        audioSrc: "audio/letdown.mp3",
        videoBgSrc: "videos/letdown2.mp4",
        spotifyUrl: "https://open.spotify.com/track/2fuYa3Lx06QQJAm0MjztKr?si=eb5698037bb948e3",
        lyrics: [
            { time: 0, text: "Floor collapses" },
            { time: 2.5, text: "floating" },
            { time: 3.8, text: "Bouncing back" },
            { time: 5.8, text: "And one day" },
            { time: 9.7, text: "I am gonna grow wings" },
            { time: 13.7, text: "A chemical reaction " },
            { time: 18.7, text: "Hysterical and useless" },
        ]
    }
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = true;

let currentScale = 1;
let targetScale = 1;
let currentGlow = 25;
let targetGlow = 25;
let animationFrameId = null;

function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}

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
    startSmoothPulseLoop();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    playerBox.classList.remove('playing');
    playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    stopSmoothPulseLoop();
}

function prevTrack() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
}

function nextTrack() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
}

audioPlayer.onended = () => {
    if (isRepeat) {
        audioPlayer.currentTime = 0;
        playTrack();
    } else {
        nextTrack();
    }
};

// Toggle Controls
playerRepeatBtn.addEventListener('click', () => {
    isRepeat = !isRepeat;
    playerRepeatBtn.classList.toggle('active-feature', isRepeat);
});

playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
});

function startSmoothPulseLoop() {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    function animate() {
        if (!isPlaying) {
            targetScale = 1;
            targetGlow = 25;
        } else {

            const time = audioPlayer.currentTime * 3;
            targetScale = 1 + Math.sin(time) * 0.012; 
            targetGlow = 25 + Math.sin(time) * 15;
        }

        currentScale = lerp(currentScale, targetScale, 0.08);
        currentGlow = lerp(currentGlow, targetGlow, 0.08);

        playerBox.style.transform = `scale(${currentScale})`;
        playerBox.style.boxShadow = `0 20px 50px rgba(0, 0, 0, 0.4), 0 0 ${currentGlow}px rgba(56, 189, 248, 0.35)`;

        if (isPlaying || Math.abs(currentScale - 1) > 0.001) {
            animationFrameId = requestAnimationFrame(animate);
        }
    }

    animate();
}

function stopSmoothPulseLoop() {
    targetScale = 1;
    targetGlow = 25;
}

audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);

        // Highlight Lirik Sync
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
    
    if (isRepeat) {
        playerRepeatBtn.classList.add('active-feature');
    }
    
    showHomePage();
}

init();