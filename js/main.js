// Location Functionality
const locationText = document.querySelector(".location #text");

const checkError = (err) => {
    city.innerText = "Brisbane";
    country.innerText = " Australia";
};

const showLocation = async (position) => {
    //We user the NOminatim API for getting actual addres from latitude and longitude
    let response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
    );
    //store response object
    let data = await response.json();

    const city = data.address.city_district.replace(" City", "");

    locationText.innerText = `${city}, ${data.address.country}`;

    document.querySelector("#city").innerText = city;
};

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, checkError);
} else {
    city.innerText = "Brisbane";
    country.innerText = " Australia";
}

// Timer
let endDate = localStorage.getItem("end-date");

if (!endDate) {
    endDate = new Date();

    const randomHours = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    const randomMins = Math.floor(Math.random() * (59 - 2 + 1) + 2);
    const randomSecs = Math.floor(Math.random() * (58 - 3 + 1) + 3);

    endDate.setHours(endDate.getHours() + randomHours);
    endDate.setMinutes(endDate.getMinutes() + randomMins);
    endDate.setSeconds(endDate.getSeconds() + randomSecs);

    localStorage.setItem("end-date", endDate);
}

function updateTimer() {
    now = new Date();

    future = new Date(endDate);

    diff = future - now;
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);
    d = days >= 0 ? days : 0;
    _hours = hours - days * 24;
    h = _hours >= 0 ? _hours : 0;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.querySelector("#countdown").innerText = `${h < 10 ? "0" + h : h}:${
        m < 10 ? "0" + m : m
    }:${s < 10 ? "0" + s : s}`;
}
setInterval(updateTimer, 1000);
