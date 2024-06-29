P5Capture.setDefaultOptions({
  format: "mp4",
  framerate: 60,
  bitrate: 15000,
  disableScaling: true
});

let pMapper;
let MapMain, MapSide;
let ShaderMain, ShaderSide;
let pgMain, pgSide;
let texture;
let dataMock = [
  { timestamp: "2024-06-27 09:35:51.000000", bikes: [{ id: "aaa", x: -93, y: 14 }, { id: "bbb", x: -85, y: -79 }, { id: "ccc", x: -47, y: -70 }, { id: "ddd", x: 61, y: 23 }, { id: "eee", x: 38, y: 23 }] },
  { timestamp: "2024-06-27 09:36:51.000000", bikes: [{ id: "aaa", x: 92, y: 11 }, { id: "bbb", x: -5, y: -40 }, { id: "ccc", x: -37, y: 8 }, { id: "ddd", x: -70, y: -43 }] },
  { timestamp: "2024-06-27 09:37:51.000000", bikes: [{ id: "aaa", x: 71, y: -21 }, { id: "bbb", x: -67, y: -30 }, { id: "ccc", x: -40, y: 1 }, { id: "ddd", x: 43, y: 91 }, { id: "eee", x: -98, y: -21 }, { id: "fff", x: -6, y: -45 }] },
];

let pointState = {};
let previousPointState = {};
let fadeHistory = []; // Array to store previous states for fading
let t = 0; // current timestamp
let frameCounter = 0; // Counter to introduce delay

new p5((p5) => {

    p5.preload = () => {
        ShaderMain = p5.loadShader('main_vert.glsl', 'main_frag.glsl');
        ShaderSide = p5.loadShader('side_vert.glsl', 'side_frag.glsl');
        texture = p5.loadImage('assets/gda_debug.png');
    }

    p5.setup = () => {
        p5.createCanvas(4738, 2130, p5.WEBGL); // Match canvas size to texture size
        pMapper = p5.createProjectionMapper(p5);

        pgMain = p5.createGraphics(texture.width, texture.height, p5.WEBGL);

        MapMain = pMapper.createQuadMap(texture.width, texture.height);

        pMapper.load("maps/map.json");

        // Initialize graphics buffers
        initializeGraphics(pgMain, "pink");

        // Initialize pointState with the first timestamp
        updatePointState(dataMock[t]);
    }

    p5.draw = () => {
        p5.background(0);

        drawGraphics(pgMain, ShaderMain, MapMainSketch, p5);
        MapMain.displaySketch((pg) => {
            pg.image(pgMain, 0, 0); // Center the image without scaling
        });

        // Increment frame counter and update pointState every 5 frames
        frameCounter++;
        if (frameCounter % 5 === 0) {
            t = (t + 1) % dataMock.length;
            updatePointState(dataMock[t]);
        }

        // Update fade history
        updateFadeHistory();
    }

    // p5.windowResized = () => {
    //     p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    // }

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
        //pg.shader(shader); // Apply the shader to the graphics buffer
        drawFunction(pg, p5); // Execute the custom drawing function
        //pg.resetShader(); // Reset the shader to default

        pg.pop();
    }

    function MapMainSketch(pg, p5) {
	pg.push();
	pg.textureMode(p5.NORMAL); // Set texture mode
	pg.noStroke();
	
	// Calculate hue based on current time (assuming dataMock[t].timestamp is current timestamp)
	let timestamp = dataMock[t].timestamp;
	let hourOfDay = parseInt(timestamp.substring(11, 13)); // Extract hour part from timestamp

	// Map hour of the day to a hue value
	let hue = p5.map(hourOfDay, 0, 23, 240, 60); // Map 0-23 hours to hue from blue to yellow

	// Apply hue to the texture
	pg.tint(p5.color(hue, 255, 255)); // Convert hue to RGB and apply as tint

	pg.texture(texture); // Apply the texture
	pg.plane(texture.width, texture.height);

	// Draw fading bikes and lines
	drawFadingElements(pg);

	// Draw current bikes and their movement lines
	pg.push();
	pg.fill(255, 0, 0);
	pg.stroke(0, 255, 0); // Set stroke color to green

	for (let id in pointState) {
	    let bike = pointState[id];
	    if (previousPointState[id]) {
		let prevBike = previousPointState[id];
		pg.line(prevBike.x, prevBike.y, bike.x, bike.y); // Draw line from previous to current position
	    }
	    pg.noStroke();
	    pg.ellipse(bike.x, bike.y, pg.width / 250);
	}
	pg.pop();

	pg.pop();
    }

    function updatePointState(currentData) {
        // Store current state as previous state
        previousPointState = JSON.parse(JSON.stringify(pointState));

        currentData.bikes.forEach(bike => {
            if (pointState[bike.id]) {
                // Add to fade history if the bike moved
                fadeHistory.push({
                    id: bike.id,
                    x1: pointState[bike.id].x,
                    y1: pointState[bike.id].y,
                    x2: bike.x,
                    y2: bike.y,
                    alpha: 255
                });
            }
            pointState[bike.id] = { x: bike.x, y: bike.y };
        });

        // If a bike is missing from the current data, retain its last known position
        Object.keys(pointState).forEach(id => {
            if (!currentData.bikes.some(bike => bike.id === id)) {
                pointState[id] = pointState[id]; // retain last known position
            }
        });
    }

    function updateFadeHistory() {
        // Reduce the alpha value of each element in the fade history
        fadeHistory.forEach((element, index) => {
            element.alpha -= 5; // Adjust this value to control fade speed
            if (element.alpha <= 0) {
                fadeHistory.splice(index, 1);
            }
        });
    }

    function drawFadingElements(pg) {
        pg.push();
        fadeHistory.forEach(element => {
            pg.stroke(0, 255, 0, element.alpha); // Green lines with fading alpha
            pg.line(element.x1, element.y1, element.x2, element.y2);
            pg.noStroke();
            pg.fill(255, 0, 0, element.alpha); // Red ellipses with fading alpha
            pg.ellipse(element.x1, element.y1, pg.width / 250);
            pg.ellipse(element.x2, element.y2, pg.width / 250);
        });
        pg.pop();
    }
});
