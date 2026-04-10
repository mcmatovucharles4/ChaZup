let lastTap = 0;

function handleVideoClick(video) {
    const now = new Date().getTime();
    const timesince = now - lastTap;

    if ((timesince < 300) && (timesince > 0)) {
        // Double Tap Detected
        showHeart();
    } else {
        // Single Tap: Play/Pause
        if (video.paused) video.play();
        else video.pause();
    }
    lastTap = now;
}

function showHeart() {
    const container = document.getElementById('heart-container');
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    
    // Center it on screen
    heart.style.left = '50%';
    heart.style.top = '50%';
    heart.style.transform = 'translate(-50%, -50%)';
    
    container.appendChild(heart);
    
    // Remove after animation
    setTimeout(() => { heart.remove(); }, 800);
}

// Keep your existing toggleChat, pulse, and sendMessage functions here!
