var circles = [];
var keydata = {
    a:{
        color:"purple",
        sound: new Howl({
            src: ['sounds/bubbles.mp3']
        }),
    },
    s:{
        color:"pink",
        sound: new Howl({
            src: ['sounds/clay.mp3']
        }),
    },
    p:{
        color:"red",
        sound: new Howl({
            src: ['sounds/confetti.mp3']
        }),
    },
    o:{
        color:"blue",
        sound: new Howl({
            src: ['sounds/clay.mp3']
        }),
    },
    i:{
        color:"grey",
        sound: new Howl({
            src: ['sounds/corona.mp3']
        }),
    },
    u:{
        color:"orange",
        sound: new Howl({
            src: ['sounds/dotted-spiral.mp3']
        }),
    },
    y:{
        color:"yellow",
        sound: new Howl({
            src: ['sounds/flash-3.mp3']
        }),
    },
    t:{
        color:"aqua",
        sound: new Howl({
            src: ['sounds/flash-2.mp3']
        }),
    },
    r:{
        color:"firebrick",
        sound: new Howl({
            src: ['sounds/flash-1.mp3']
        }),
    },
    e:{
        color:"indigo",
        sound: new Howl({
            src: ['sounds/glimmer.mp3']
        }),
    },
    w:{
        color:"tan",
        sound: new Howl({
            src: ['sounds/moon.mp3']
        }),
    },
    q:{
        color:"white",
        sound: new Howl({
            src: ['sounds/splits.mp3']
        }),
    },
    f:{
        color:"salmon",
        sound: new Howl({
            src: ['sounds/squiggle.mp3']
        }),
    },
    g:{
        color:"mistyrose",
        sound: new Howl({
            src: ['sounds/strike.mp3']
        }),
    },
    h:{
        color:"tomato",
        sound: new Howl({
            src: ['sounds/suspension.mp3']
        }),
    },
    j:{
        color:"lightgreen",
        sound: new Howl({
            src: ['sounds/prism-3.mp3']
        }),
    },
    k:{
        color:"green",
        sound: new Howl({
            src: ['sounds/prism-2.mp3']
        }),
    },
    l:{
        color:"hotpink",
        sound: new Howl({
            src: ['sounds/prism-1.mp3']
        }),
    },
    m:{
        color:"lime",
        sound: new Howl({
            src: ['sounds/piston-3.mp3']
        }),
    },
    n:{
        color:"violet  ",
        sound: new Howl({
            src: ['sounds/piston-2.mp3']
        }),
    },
    b:{
        color:"paleturquoise  ",
        sound: new Howl({
            src: ['sounds/piston-1.mp3']
        }),
    },
    v:{
        color:"crimson  ",
        sound: new Howl({
            src: ['sounds/timer.mp3']
        }),
    },
    c:{
        color:"olive ",
        sound: new Howl({
            src: ['sounds/ufo.mp3']
        }),
    },
    x:{
        color:"greenyellow ",
        sound: new Howl({
            src: ['sounds/veil.mp3']
        }),
    },
    z:{
        color:"yellowgreen",
        sound: new Howl({
            src: ['sounds/wipe.mp3']
        }),
    },
    d:{
        color:"black",
        sound: new Howl({
            src: ['sounds/zig-zag.mp3']
        }),
    }
};



  
  






function onKeyDown(event) {
    if(keydata[event.key]){

    
    var maxPoint = new Point(view.size.width, view.size.height); 
    var randomPoint = Point.random();
    var points = maxPoint * randomPoint;
    var newCircle = new Path.Circle(points, 400)
    newCircle.fillColor = keydata[event.key].color;
    keydata[event.key].sound.play();
    circles.push(newCircle);  
    } 
        
};
function onFrame(event) {
    for(var i = 0; i < circles.length; i++){
        circles[i].fillColor.hue += 5;
        circles[i].scale(.92);
        if(circles[i].area < 1){
            circles[i].remove(); // remove the circle from the canvas
            circles.splice(i, 1); // remove the circle from the array
            i--; // decrement i so that the loop doesn't skip a circle because of .splice()
        }
    }
}












