const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const form = document.getElementById("bish-bosh-form");
const gameResultList = document.getElementById('game-result-list');

let progress = 0;
const updateInterval = 50;
let interval = null;  

 async function onFormSubmit(event) {
  event.preventDefault(); 

  const data = new FormData(event.target);
  
  const bishNumber = parseInt(data.get("bish-number-input"));
  const boshNumber = parseInt(data.get("bosh-number-input"));
  const loopNumber = parseInt(data.get("loop-number-input"));

  gameResultList.innerHTML = '';
  progress = 0;
  
  // Clear any existing intervals before starting a new one
  if (interval) {
    clearInterval(interval);
  }

  // Start the progress update 
  interval = await setInterval(() => updateProgress(loopNumber), updateInterval);
  renderGameResult(loopNumber, bishNumber, boshNumber);
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

function renderGameResult(loopNumber, bishNumber, boshNumber) {
  for (let i = 1; i <= loopNumber; i++) {
    let result = '';
    if (i % bishNumber === 0 && i % boshNumber === 0) {
      result = 'Bish-Bosh';
    } else if (i % bishNumber === 0) {
      result = 'Bish';
    } else if (i % boshNumber === 0) {
      result = 'Bosh';
    } else {
      result = i;
    }

    const li = document.createElement('li');
    li.textContent = result;
    gameResultList.appendChild(li);
  }
}


form.addEventListener("submit", onFormSubmit);
