
const c=document.getElementById("my-canvas");
c.width=450
c.height=800

const ctx= c.getContext("2d")

const birdradius=20


const initialvelocity=-0.7
const acceleration=0.0015

function frame(time){
    ctx.clearRect(0, 0, c.width, c.height)
    ctx.fillStyle="#71c6cf"
    ctx.fillRect(0, 0, c.width, c.height)
    ctx.fillStyle="yellow"
    ctx.beginPath()
    ctx.arc(c.width/2, 150 + initialvelocity * time + acceleration * Math.pow(time, 2), birdradius, 0, 2*Math.PI)
    ctx.closePath()
    ctx.fill()
    //ctx.fillRect(0, 150 + initialvelocity * time + acceleration * Math.pow(time, 2), 100, 100)
    requestAnimationFrame(frame)
}

function resize() {
    const scale = Math.min(1, window.innerHeight / c.height, window.innerWidth / c.width);
    c.style.transform = `translate(-50%, -50%) scale(${scale}, ${scale})`;
}
resize();
window.addEventListener("resize", resize);

requestAnimationFrame(frame)
