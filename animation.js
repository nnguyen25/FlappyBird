
const c=document.getElementById("my-canvas");
c.width=450
c.height=800

const ctx= c.getContext("2d")

const birdradius=20
let restart=150

function y(time) 
{return restart + initialvelocity * (time-jumptime) + acceleration * Math.pow(time-jumptime, 2)}

let jumptime= 0
window.addEventListener("keydown", function(event) {
    if (event.key===" "){
         restart = y(performance.now())
         jumptime = performance.now()
       
    }
    
});

const pipewidth = 45
const pipegap = 147
const pipespeed = -0.2
const timeBetweenPipes = 1300

class Pipe {
    constructor(){
        this.creationtime = performance.now()
        this.height = Math.floor(Math.random()*(c.height-pipegap))+pipegap/2

    }
    
    colliding(){ let testx= Math.min(Math.max(birdx, this.getx()), this.getx()+pipewidth)
         return (Math.pow(testx))
        }
    getx(){ return (performance.now()-this.creationtime)*pipespeed+c.width }

    

draw(){
    ctx.fillStyle = "darkgreen"

    ctx.fillRect (getx(), 0, pipewidth, this.height-pipegap/2)
    ctx.fillRect (getx(), this.height+pipegap/2, pipewidth, c.height)
    
}
}


const pipes=[];
setInterval(function(){
pipes.push(new Pipe());
},timeBetweenPipes);


const initialvelocity=-0.7
const acceleration=0.0015
function frame(time){
    const birdheight = y(time)
    if(birdheight>c.height){}
    ctx.clearRect(0, 0, c.width, c.height)
    ctx.fillStyle="#71c6cf"
    ctx.fillRect(0, 0, c.width, c.height)
    for(let pipe of pipes){pipe.draw()}
    ctx.fillStyle="yellow"
    ctx.beginPath()
    ctx.arc(c.width/2, birdheight, birdradius, 0, 2*Math.PI)
    ctx.closePath()
    ctx.fill()
    //ctx.fillRect(0, 150 + initialvelocity * time + acceleration * Math.pow(time, 2), 100, 100)
    if(birdheight<c.height - birdradius){
        requestAnimationFrame(frame)
    }
}

function resize() {
    const scale = Math.min(1, window.innerHeight / c.height, window.innerWidth / c.width);
    c.style.transform = `translate(-50%, -50%) scale(${scale}, ${scale})`;
}
resize();
window.addEventListener("resize", resize);

requestAnimationFrame(frame)
