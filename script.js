    

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function homepageanimation() {
    var tl = gsap.timeline();
    tl.from("#nav",{
        y: "-100",
        opacity: 0,
        duration: 1.2,
        ease:Expo
    })

        .to(".boundingele", {
            y: 0,
            duration: 2,
            stagger: .2,
            ease:Expo
            
        })
      
        .from("#homefooter", {
            y: -10,
            opacity: 0,
            duration: .5,
            ease:Expo
    })

}

var timeout;

function squezecircle()
{
    var xval = 1;
    var yval = 1;
    
    var xpre = 0;
    var ypre = 0;
    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);
        var xdiff = dets.clientX - xpre;
        var ydiff = dets.clientY - ypre;

        xpre = dets.clientX;
        ypre = dets.clientY;

        var xscale = gsap.utils.clamp(.8, 1.2, xdiff);
        var yscale = gsap.utils.clamp(.8, 1.2, ydiff);
        mousefollower(xscale, yscale);
        timeout = this.setTimeout(function () {
             this.document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
        
        },100)
    })
    
}



function mousefollower(xscale,yscale) {
    window.addEventListener("mousemove", function (dets) {
        this.document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
        // console.log(xscale,yscale)
    });
}
squezecircle(); 
mousefollower();
homepageanimation();   

function imagemove() {
    document.querySelectorAll(".elem").forEach(function (elem) {
        var rotate = 0;
        var diffrotate = 0;
        elem.addEventListener("mouseleave", function (dets) {
           
            gsap.to(elem.querySelector("img"), {
                opacity: 0,

            })
        })
        elem.addEventListener("mousemove", function (dets) {
            var diff = (dets.clientY - elem.getBoundingClientRect().top);
            diffrotate = dets.clientX - rotate;
            rotate = dets.clientX;
            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                // ease: power1,
                top: diff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-15, 15, diffrotate)
            })
        })
    });
}
imagemove();