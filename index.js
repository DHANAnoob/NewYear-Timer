function ref(){
    const currentYear = new Date().getFullYear();
const newYear =  new Date(` January 1 ${currentYear +1} 00:00:00 `);
const currentDay =  new Date()
const diff = newYear - currentDay;
let days = Math.floor(diff/1000/60/60/24)
let hours = Math.floor((diff/1000/60/60)%24)
let minutes = Math.floor((diff/1000/60)%60)
let seconds = Math.floor((diff/1000)%60)
const d = document.querySelector('#days')
const h = document.querySelector('#hours')
const m = document.querySelector('#minutes')
const s = document.querySelector('#seconds')
d.innerHTML = days >= 10 ? days : `0${days}`
h.innerHTML = hours >= 10 ? hours : `0${hours}`
m.innerHTML = minutes >= 10 ? minutes : `0${minutes}`
s.innerHTML = seconds >= 10 ? seconds : `0${seconds}`

}
setInterval(ref,1000)