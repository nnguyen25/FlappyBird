const c=document.getElementById("my-canvas");
c.width=300
c.height=300

const ctx= c.getContext("2d")
ctx.fillStyle="blue"
ctx.fillRect(20,20,60,50)

ctx.strokeStyle="red"
ctx.strokeRect(100,30,40,50)

ctx.beginPath()
ctx.moveTo(30,90)
ctx.arcTo(60,120,60,140,10)
ctx.closePath()
ctx.stroke()


