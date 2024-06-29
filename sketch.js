P5Capture.setDefaultOptions({
  format: "png",
  framerate: 60,
  bitrate: 15000,
  disableScaling: true
});

let pMapper;
let MapMain, MapSide;
let ShaderMain, ShaderSide;
let pgMain, pgSide;
let texture;
let customFont;

let loadedData;

let backgroundflag;
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
	customFont = p5.loadFont('assets/RobotoMono-Regular.ttf')
	loadedData = p5.loadJSON('assets/dump_28_06_2024.json');
    }

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL); // Match canvas size to texture size
        pMapper = p5.createProjectionMapper(p5);
	
	backgroundFlag = false;

        pgMain = p5.createGraphics(texture.width, texture.height, p5.WEBGL);

        MapMain = pMapper.createQuadMap(texture.width, texture.height);

        pMapper.load("maps/map.json");

        // Set the loaded font
        p5.textFont(customFont);

        // Initialize graphics buffers
        initializeGraphics(pgMain, "pink");

	let len;
	for(i in loadedData) {
	  len += 1;
	  loadedData[i].bikes.map((bike) => {
	    let transformed = transformCoordinates(bike.x, bike.y, texture.width, texture.height);
	    bike.x = transformed.x;
	    bike.y = transformed.y;
	    return bike;
	  })
	}
	
	console.log("length ", len)
	console.log(loadedData)
        // Initialize pointState with the first timestamp
	//console.log(loadedData[t]);
        updatePointState(loadedData[t]);
	console.log("setup done")
    }

    p5.draw = () => {
        p5.background(0);

        drawGraphics(pgMain, ShaderMain, MapMainSketch, p5);
        MapMain.displaySketch((pg) => {
            pg.image(pgMain, 0, 0); // Center the image without scaling
        });

        // Increment frame counter and update pointState every 5 frames
        frameCounter++;
        if (frameCounter % 3 === 0) {
            t = (t + 1) % 730;
            updatePointState(loadedData[t]);
        }

        // Update fade history
        updateFadeHistory();
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
	    case 'b':
		backgroundFlag = !backgroundFlag;
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
        drawFunction(pg, p5); // Execute the custom drawing function
        pg.pop();
    }

    function MapMainSketch(pg, p5) {
        pg.push();
        pg.textureMode(p5.NORMAL); // Set texture mode
        pg.noStroke();

        // Calculate date and time based on current timestamp
        let timestamp = loadedData[t].timestamp;
        let date = new Date(timestamp); // Create a Date object from the timestamp string

        // Extract day, month, year, hour, and minute
        let day = date.getDate().toString().padStart(2, '0'); // Get day of the month (1-31)
        let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month (0-11, hence the +1)
        let year = date.getFullYear().toString().slice(-2); // Get year (last two digits)
        let hourOfDay = date.getHours().toString().padStart(2, '0'); // Get hour (0-23)
        let minuteOfDay = date.getMinutes().toString().padStart(2, '0'); // Get minute (0-59)

	let textArr = [
	  `{`,
	  `  "rodzaj": "System Mevo",`,
	  `  "dane": "Dostępne rowery",`,
	  `  "czas:" "${day}.${month}.${year} ${hourOfDay}:${minuteOfDay}"`,
	  `}`
	]

        // Draw DD.MM.YY and HH:MM text separately with a newline in between
        pg.textFont(customFont); // Set the font
        pg.textSize(20); // Adjust text size as needed
        pg.fill(255); // Set text color to red
        pg.textAlign(p5.LEFT); // Align text to center

        // Calculate positions based on canvas size
        let x = pg.width / 4;
        let yText = -300; // Y position for date text

	for (let i in textArr) {
	  pg.text(textArr[i], x-160, yText + (i * 30)); // Adjust the Y position for each line of text
	}

        // Map hour of the day to a hue value
        let hue = p5.map(hourOfDay, 0, 23, 240, 60); // Map 0-23 hours to hue from blue to yellow

        // Apply hue to the texture
        pg.tint(p5.color(hue, 255, 255)); // Convert hue to RGB and apply as tint
	
	if (backgroundFlag) { 
	  pg.texture(texture); // Apply the texture
	  pg.plane(texture.width, texture.height);
	}

        // Draw fading bikes and lines
        drawFadingElements(pg);

        // Draw current bikes and their movement lines
        pg.push();
        pg.fill(255);
        pg.stroke(255); // Set stroke color to green

        for (let bike of loadedData[t].bikes) {
            let id = bike.vehicle_id;
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

	const bikes = currentData.bikes;

        bikes.forEach(bike => {
            if (pointState[bike.vehicle_id]) {
                // Add to fade history if the bike moved
                fadeHistory.push({
                    id: bike.vehicle_id,
                    x1: pointState[bike.vehicle_id].x,
                    y1: pointState[bike.vehicle_id].y,
                    x2: bike.x,
                    y2: bike.y,
                    alpha: 255
                });
            }
            pointState[bike.vehicle_id] = { x: bike.x, y: bike.y };
        });

        // If a bike is missing from the current data, retain its last known position
        Object.keys(pointState).forEach(id => {
            if (!bikes.some(bike => bike.vehicle_id === id)) {
                pointState[id] = pointState[id]; // retain last known position
            }
        });
    }

    function updateFadeHistory() {
        // Reduce the alpha value of each element in the fade history
        fadeHistory.forEach((element, index) => {
            element.alpha -= 3; // Adjust this value to control fade speed
            if (element.alpha <= 0) {
                fadeHistory.splice(index, 1);
            }
        });
    }

    function drawFadingElements(pg) {
        pg.push();
        fadeHistory.forEach(element => {
            pg.stroke(255, 255, 255, element.alpha); // Green lines with fading alpha
            pg.line(element.x1, element.y1, element.x2, element.y2);
            pg.noStroke();
            //pg.fill(255, 255, 255, element.alpha); // Red ellipses with fading alpha
            pg.ellipse(element.x1, element.y1, pg.width / 250);
            pg.ellipse(element.x2, element.y2, pg.width / 250);
        });
        pg.pop();
    }

    function transformCoordinates(x, y, imageWidth, imageHeight) {
	// Provided transformation parameters
	const scaleX = 38.01475810276674849;
	const scaleY = -38.01475810276674849;
	const translateX = 462971.32492332014953718;
	const translateY = 731588.82012094859965146;

	// Transform x and y
	const transformedX = ((x - translateX) / scaleX)-475;
	const transformedY = ((y - translateY) / scaleY)-300;

    return { x:transformedX, y:transformedY };
    }

});
