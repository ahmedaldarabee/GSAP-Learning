

// part-1

// gsap.to(".box",{
//     duration:5,
//     x:900,
//     rotation:"50deg",
//     borderRadius:50
// })

// part-2
// gsap.fromTo(".box",
//     { x: 100, y: 0 },     // Start from x=100 and y=0
//     {
//         duration: 5,
//         x: 600,
//         y: 0,
//         rotation: 50,
//         borderRadius: 50
//     }
// );

// part 4
// ,1, here be as duration to each element 
// let tl = gsap.timeline();
// tl.to(".box1",4,{
//     x:900,
//     rotation:"50deg",
//     borderRadius:50
// })

// tl.to(".box2",1,{
//     x:900,
//     rotation:"50deg",
//     borderRadius:50
// },2)

// // ,"+=2" it will delayed from last element from this time: 2s

// tl.to(".box3",1,{
//     x:900,
//     rotation:"50deg",
//     borderRadius:50
// },1.5)
// // 1.5 duration

// part 5

// let tl = gsap.timeline({
//     repeat:3,
//     repeatDelay:1,
//     yoyo:true,
//     // scale:3
// });
// scale property it will work with normal gsap not timeline
// tl.to(".box",4,{
//     x:900,
//     rotation:"50deg",
//     borderRadius:50,
//     stagger:2,
// })

// stagger as a duration gap between elements in sequence way
    //  box 1: 2s
        // then we will delay 2s then the box 2 it will work and same idea with box3

// gsap.to(".box",2,{
//     x:600,
//     rotation:50,
//     borderRadius:50,
//     scale:1.5,
//     yoyo:true,
//     repeat:3,
//     ease: "bounce.out",
// })

// ---------------- Scroll Trigger ----------------- //
// gsap.registerPlugin(ScrollTrigger) 

// gsap.to(".box",4,{

//     scrollTrigger:{
//         trigger:".box",
//         start:"top top",
//         scrub:true,
//         markers:true
//     },
//     scale:1.5,
//     rotation:360,
//     x:900,
//     borderRadius:70
// })

// [.box] sub it will have these effect once parent [.section] do action

// gsap.to(".box",4,{
//     scrollTrigger:{
//         trigger:".section",
//         pin:true,
//         start:"top top",
//         end:"+=500",
//         scrub:true
//     },
//     x:600,
//     rotation:360,
//     scale:0.4,
//     borderRadius:90
// })

gsap.registerPlugin(SplitText);
const mainHeadLine = document.querySelector(".main-headline");
const tagline = document.querySelector(".tagline");

const splitHeadLine = new SplitText(mainHeadLine,{
    type:"words,chars"
});

const splitTagLine = new SplitText(tagline,{
    type:"words"
})

const tl = gsap.timeline();

tl.from(splitHeadLine.chars,{
    x:200,
    rotationX:190,
    opacity:0,
    color:"#ffffff",
    transformOrigin:"center center",
    stagger: 0.2,
})

tl.to(splitHeadLine.chars,{
    color:"#6c5ce7",
    duration:0.9,
    ease:"power2.out",
    stagger: 0.2,
    // repeat:5,
})

tl.from(splitTagLine.words, {
    y:60,
    opacity:0,
    filter:"blur(16px)",
    duration:0.7,
    stagger:0.12,
    ease:"power3.out",
},'+=1.2')

tl.to(splitTagLine.words,{
    filter:"blur(0px)",
})