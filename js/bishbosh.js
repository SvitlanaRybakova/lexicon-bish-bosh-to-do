const progressText = 
    document.getElementById('progressText');
const progressBar = 
    document.getElementById('progressBar');
const gradientEnd = 
    document.getElementById('gradientEnd');

    console.log("progressText",progressText);
    console.log("progressBar",progressBar);
    console.log("gradientEnd",gradientEnd);
    
let progress = 0;
const updateInterval = 50;
const maxProgress = 100;

function updateProgress() {
    progress++;
    if (progress > maxProgress) {
        clearInterval(interval);
        progress = maxProgress;
    }
    progressText.textContent = 
        progress + '%';
    progressBar.style.strokeDashoffset = 
        520 - (520 * progress) / 100;

    const gradientProgress = progress / maxProgress;
    gradientEnd.setAttribute('offset', 
        `${gradientProgress * 100}%`);
}

updateProgress();
const interval = setInterval(updateProgress, updateInterval);


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 4 === 0) console.log("Bish-Bosh");
    else if (i % 3 === 0) console.log("Bish");
    else if (i % 4 === 0) console.log("Bosh");
    else console.log(i);
  }