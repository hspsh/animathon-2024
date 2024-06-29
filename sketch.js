P5Capture.setDefaultOptions({
  format: "mp4",
  framerate: 30,
  bitrate: 15000,
  disableScaling: true
});

let pMapper;
let MapMain, MapSide;

let img;

new p5((p5) => {

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);

        // create mapper object
        pMapper = p5.createProjectionMapper(p5);

        MapMain = pMapper.createQuadMap(400, 400);
        MapSide = pMapper.createQuadMap(400, 400);

        // loads calibration in the "maps" directory
        pMapper.load("maps/map.json");
    }

    p5.draw = () => {
        p5.background(0);

        MapMain.displaySketch((pg) => rainbow(pg, p5));
        MapSide.displaySketch((pg) => dots(pg, p5));

    }

    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }

    p5.keyPressed = () => {
        switch (p5.key) {
            case 'c':
                pMapper.toggleCalibration();
                break;
            case 'f':
                let fs = p5.fullscreen();
                fullscreen(!fs);
                break;
            case 'l':
                pMapper.load("maps/map.json");
                break;

            case 's':
                pMapper.save("map.json");
                break;
        }
    }

});

function dots(pg, p5) {
    p5.randomSeed(0);
    pg.clear();
    pg.push();
    pg.background("pink");
    pg.fill(255);
    pg.noStroke();
    for (let i = 0; i < 60; i++) {
        pg.ellipse(p5.random(p5.width), p5.random(p5.height), p5.random(10, 80));
    }
    pg.pop();
}

function rainbow(pg, p5) {
    pg.clear();
    pg.push();
    pg.background('pink');
    pg.colorMode(p5.HSB, 255);

    for (let i = 0; i < 1000; i++) {
        pg.stroke(i % 255, 255, 255);
        pg.line(i, 0, i, 300);
    }
    pg.pop();
}
