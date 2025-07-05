

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

gsap.to(".box",2,{
    x:600,
    rotation:50,
    borderRadius:50,
    scale:1.5,
    yoyo:true,
    repeat:3,
    ease: "bounce.out",
})