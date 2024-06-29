P5Capture.setDefaultOptions({
  format: "mp4",
  framerate: 30,
  bitrate: 15000,
  disableScaling: true
});

let pMapper;
let MapMain, MapSide;
let ShaderMain, ShaderSide;
let pgMain, pgSide;

new p5((p5) => {

    p5.preload = () => {
        ShaderMain = p5.loadShader('main_vert.glsl', 'main_frag.glsl');
        ShaderSide = p5.loadShader('side_vert.glsl', 'side_frag.glsl');
    }

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
        pMapper = p5.createProjectionMapper(p5);

        pgMain = p5.createGraphics(400, 400, p5.WEBGL);
        pgSide = p5.createGraphics(400, 400, p5.WEBGL);

        MapMain = pMapper.createQuadMap(400, 400);
        MapSide = pMapper.createQuadMap(400, 400);

        pMapper.load("maps/map.json");

        // Initialize graphics buffers
        initializeGraphics(pgMain, "pink");
        initializeGraphics(pgSide, "pink");
    }

    p5.draw = () => {
        p5.background(0);

        drawGraphics(pgMain, ShaderMain, simpleShape, p5);
        MapMain.displaySketch((pg) => {
            pg.image(pgMain, -pgMain.width / 2, -pgMain.height / 2, 2*pgMain.width, 2*pgMain.height); // Center the image
        });

        drawGraphics(pgSide, ShaderSide, simpleShape, p5);
        MapSide.displaySketch((pg) => {
            pg.image(pgSide, -pgSide.width / 2, -pgSide.height / 2, 2*pgSide.width, 2*pgSide.height); // Center the image
        });
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
                p5.fullscreen(!fs);
                break;
            case 'l':
                pMapper.load("maps/map.json");
                break;
            case 's':
                pMapper.save("map.json");
                break;
        }
    }

    function initializeGraphics(pg, bgColor) {
        pg.push();
        pg.background(bgColor);
        pg.pop();
    }

    function drawGraphics(pg, shader, drawFunction, p5) {
        pg.push();
        pg.clear(); // Clear the buffer for new drawing
        pg.shader(shader); // Apply the shader to the graphics buffer
        drawFunction(pg, p5); // Execute the custom drawing function
        pg.resetShader(); // Reset the shader to default
        pg.pop();
    }

    function simpleShape(pg, p5) {
        pg.push();
        pg.noStroke();
        pg.fill(0, 255, 0);
        pg.sphere(300); // Draw a simple shape to test shader
        pg.pop();
    }
});
