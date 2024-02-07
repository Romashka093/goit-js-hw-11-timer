// Create elements
const timerContainer = document.createElement('div');
timerContainer.classList.add('timer-container');

const titleH2 = document.createElement('h2');
titleH2.classList.add('title');
titleH2.textContent = "Until my mom's birthday:";
timerContainer.appendChild(titleH2);

const timerDiv = document.createElement('div');
timerDiv.classList.add('timer');
timerDiv.id = 'timer-1';

const fields = ['days', 'hours', 'mins', 'secs'];
const labels = ['Days', 'Hours', 'Minutes', 'Seconds'];

fields.forEach((field, index) => {
  const fieldDiv = document.createElement('div');
  fieldDiv.classList.add('field');

  const valueSpan = document.createElement('span');
  valueSpan.classList.add('value');
  valueSpan.setAttribute('data-value', field);
  valueSpan.textContent = '11';

  const labelSpan = document.createElement('span');
  labelSpan.classList.add('label');
  labelSpan.textContent = labels[index];

  fieldDiv.appendChild(valueSpan);
  fieldDiv.appendChild(labelSpan);

  if (index < fields.length - 1) {
    const dotsDiv = document.createElement('div');
    dotsDiv.classList.add('dots');
    dotsDiv.innerHTML = '<span class="too-dots">:</span>';
    fieldDiv.appendChild(dotsDiv);
  }

  timerDiv.appendChild(fieldDiv);
});

timerContainer.appendChild(timerDiv);

// Append to the document body or any other desired location
const appWrapp = document.getElementById('app');
appWrapp.appendChild(timerContainer);

const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  minutes: document.querySelector('span[data-value="mins"]'),
  seconds: document.querySelector('span[data-value="secs"]'),
};

function pad(value) {
  return String(value).padStart(2, '0');
}

new CountdownTimer({
  targetDate: new Date('May 29 2021'),
});
function CountdownTimer(e) {
  let prevDays = null;
  let prevHours = null;
  let prevMins = null;
  let prevSecs = null;

  setInterval(() => {
    const today = new Date();
    const targetDate = new Date(e.targetDate);
    targetDate.setFullYear(today.getFullYear());

    if (today > targetDate) {
      targetDate.setFullYear(today.getFullYear() + 1);
    }

    const time = targetDate - today;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    if (days !== prevDays) {
      if (days <= 9) {
        refs.days.innerHTML = String(days).padStart(1, '0');
      } else if (days > 9 && days <= 99) {
        refs.days.innerHTML = String(days).padStart(2, '0');
      } else if (days > 99) {
        refs.days.innerHTML = String(days).padStart(3, '0');
      }
      prevDays = days;
    }

    if (hours !== prevHours) {
      refs.hours.innerHTML = pad(hours);
      prevHours = hours;
    }

    if (mins !== prevMins) {
      refs.minutes.innerHTML = pad(mins);
      prevMins = mins;
    }

    if (secs !== prevSecs) {
      refs.seconds.innerHTML = pad(secs);
      prevSecs = secs;
    }
  }, 1000);
}


