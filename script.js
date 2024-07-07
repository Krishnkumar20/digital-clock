let mt;
let t;
let d;
let h;
let c;
let ap;
const options = {weekday: 'long', year: 'numeric', month:'long',day: 'numeric'}

setInterval(() => {
mt = new Date();
d=mt.toLocaleDateString(undefined,options);
h=mt.toLocaleTimeString();

ap = h>=12?'PM':'AM';
c=(h%12)||12;

document.getElementById('time').innerHTML = h;
document.getElementById('date').innerHTML = "Today : " + d;
}, 1000);