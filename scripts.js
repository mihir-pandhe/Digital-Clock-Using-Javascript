function updateClock() {
    const time = document.getElementById('time');
    const date = document.getElementById('date');
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const dayNumber = now.getDate();
    const year = now.getFullYear();

    time.textContent = `${pad(formattedHours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
    date.textContent = `${day}, ${month} ${dayNumber}, ${year}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

setInterval(updateClock, 1000);
updateClock();
