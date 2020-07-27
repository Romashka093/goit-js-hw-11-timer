import './styles.css';

const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    minutes: document.querySelector('span[data-value="mins"]'),
    seconds: document.querySelector('span[data-value="secs"]')
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('May 29 2021'),
});

function CountdownTimer(e) {

    setInterval(() => {
        const time = e.targetDate - new Date();
        const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(3, '0');
        const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

        refs.days.innerHTML = days;
        refs.hours.innerHTML = hours;
        refs.minutes.innerHTML = mins;
        refs.seconds.innerHTML = secs;
    }, 1000);
}

function pad(value) {
    return String(value).padStart(2, '0');
}
