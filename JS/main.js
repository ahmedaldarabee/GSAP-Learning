

// part-1

// gsap.to(".box",{
//     duration:5,
//     x:900,
//     rotation:"50deg",
//     borderRadius:50
// })

gsap.fromTo(".box",
    { x: 100, y: 0 },     // Start from x=100 and y=0
    {
        duration: 5,
        x: 600,
        y: 0,
        rotation: 50,
        borderRadius: 50
    }
);
