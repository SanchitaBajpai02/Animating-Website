var crsr = document.querySelector("#cursor")
var bl = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+"px"
    crsr.style.top= dets.y+"px"
    bl.style.left= dets.x-150+"px"
    bl.style.top= dets.y-150+"px"
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"90px",
    delay:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2 
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})