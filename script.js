const monthly = document.querySelector(".m")
const weekly = document.querySelector(".w")
const daily = document.querySelector(".d")

const time = document.querySelectorAll(".previous")
const prev = document.querySelectorAll(".prev")

function Daily(){
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        time.forEach((e,i) => {
            time[i].innerHTML = data[i].timeframes.daily.current + 'hrs'
            prev[i].innerHTML = 'Last Day - ' + data[i].timeframes.daily.previous + 'hrs'
        })
    })
}

function Weekly(){
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        time.forEach((e,i) => {
            time[i].innerHTML = data[i].timeframes.weekly.current + 'hrs'
            prev[i].innerHTML = 'Last Week - ' + data[i].timeframes.weekly.previous + 'hrs'
        })
    })
}

function Monthly(){
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        time.forEach((e,i) => {
            time[i].innerHTML = data[i].timeframes.monthly.current + 'hrs'
            prev[i].innerHTML = 'Last Month - ' + data[i].timeframes.monthly.previous + 'hrs'
        })
    })
}

daily.addEventListener('click', () => {
    daily.classList.add("active")
    weekly.classList.remove("active")
    monthly.classList.remove("active")
    Daily()
})
weekly.addEventListener('click', () => {
    daily.classList.remove("active")
    weekly.classList.add("active")
    monthly.classList.remove("active")
    Weekly()
})
monthly.addEventListener('click', () => {
    daily.classList.remove("active")
    weekly.classList.remove("active")
    monthly.classList.add("active")
    Monthly()
})