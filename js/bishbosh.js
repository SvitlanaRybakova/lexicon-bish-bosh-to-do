const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const form = document.getElementById("bish-bosh-form");

let progress = 0;
const updateInterval = 50;
let interval = null;  

async function onFormSubmit(event) {
  event.preventDefault(); 

  const data = new FormData(event.target);
  
  const bishNumber = data.get("bish-number-input");
  const boshNumber = data.get("bosh-number-input");
  const loopNumber = parseInt(data.get("loop-number-input"));

  progress = 0;
  
  // Clear any existing intervals before starting a new one
  if (interval) {
    clearInterval(interval);
  }

  // Start the progress update 
  interval = await setInterval(() => updateProgress(loopNumber), updateInterval);
  
}

function updateProgress(loopNumber) {
  progress++;
  
  const adjustedProgress = (progress / loopNumber) * 100;
  
  if (progress >= loopNumber) {
      clearInterval(interval);
      progress = loopNumber; 
  }

  //  display
  progressText.textContent = `${progress}`;
  progressBar.style.strokeDashoffset = 520 - (520 * adjustedProgress) / 100;

}


form.addEventListener("submit", onFormSubmit);
