export function sketch(s) {
    s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight);
        // s.rectMode(s.CENTER);
        // s.background(0, 0, 0, 0);
        s.noStroke();
        s.colorMode(s.HSB,100,100)
        s.frameRate(30);
    };

    s.draw = () => {
        s.clear();
        s.fill(s.frameCount%360, 60,90, 0.5);
        s.ellipse(
            s.mouseX,
            s.mouseY,
            ((1.2 + s.sin(s.frameCount / 100)) * s.height) / 5
        );
    };

    // s.mouseMoved = (e) =>{
    //     console.log(e)
    // }
}