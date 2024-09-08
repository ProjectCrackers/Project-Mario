// Global Functions
window.FArrowLeft = function(canvas) {
    canvas.addEventListener('mousedown', function() {
        LAPressed = true;
    });

    canvas.addEventListener('mouseup', function() {
        LAPressed = false;
    });
}
window.FArrowRight = function(canvas) {
    canvas.addEventListener('mousedown', function() {
        RAPressed = true;
    });

    canvas.addEventListener('mouseup', function() {
        RAPressed = false;
    });
}
window.FArrowUp = function(canvas) {
    canvas.addEventListener('mousedown', function() {
        UAPressed = true;
    });

    canvas.addEventListener('mouseup', function() {
        UAPressed = false;
    });
}
window.FArrowDown = function(canvas) {
    canvas.addEventListener('mousedown', function() {
        DAPressed = true;
    });

    canvas.addEventListener('mouseup', function() {
        DAPressed = false;
    });
}
window.FSpaceEnter = function(canvas) {
    canvas.addEventListener('mousedown', function() {
        SEPressed = true;
    });

    canvas.addEventListener('mouseup', function() {
        SEPressed = false;
    });
}

// Mobile runner
window.runMobileCode = function(canvas){
    const context = canvas.getContext('2d');
    window.ctx = context;

    // The buttons
    window.buttons = [
        { 
            name: '   Left',
            x: 10, 
            y: 235, 
            width: 40, 
            height: 40, 
            key: 'ArrowLeft', 
            action: FArrowLeft,
            image: 'left-button.png' 
        },
        { 
            name: '   Right', 
            x: 90, 
            y: 235, 
            width: 40, 
            height: 40, 
            key: 'ArrowRight',
            action: FArrowRight, 
            image: 'right-button.png' 
        },
        { 
            name: '   Up', 
            x: 50,
            y: 195, 
            width: 40, 
            height: 40, 
            key: 'ArrowUp', 
            action: FArrowUp,
            image: 'up-button.png' 
        },
        { 
            name: '   Down', 
            x: 50, 
            y: 275, 
            width: 40, 
            height: 40, 
            key: 'ArrowDown', 
            action: FArrowDown,
            image: 'down-button.png' 
        },
        { 
            name: '         Space Bar', 
            x: 200, 
            y: 275, 
            width: 100, 
            height: 40, 
            key: ' ', 
            key2: 'Enter', 
            action: FSpaceEnter,
            image: 'space-bar.png' 
        }
    ];

    // Load images
    buttons.forEach(button => {
        let img = new Image();
        img.src = button.image;
        img.onload = function() {
            button.img = img; // Store the loaded image in the button object
        };
        img.onerror = function() {
            button.img = null; // If the image fails to load, set it to null
        };
    });

    canvas.addEventListener('click', function(event) {
        console.log("Button Clicked")
        // Get the mouse position
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        // Check if the mouse is inside any of the buttons
        buttons.forEach(button => {
            //console.log(`Mouse: ${x/2.2}, ${y/2.2}`);
            //console.log(`Button: ${button.name} x: ${button.x}, y: ${button.y}, w: ${button.width}, h: ${button.height}`)

            if ((x/2.2) > button.x && (x/2.2) < button.x + button.width && (y/2.2) > button.y && (y/2.2) < button.y + button.height) {
                //console.log("Button Registered Click");
                button.action(canvas);

                // Unused KeyBoardEvent function
                /**
                let keyboardEvent = new KeyboardEvent('keydown', { key: button.key });
                window.dispatchEvent(keyboardEvent);

                if (!(!button.key2)) {
                    let keyboardEvent2 = new KeyboardEvent('keydown', { key: button.key2 });
                    window.dispatchEvent(keyboardEvent2);
                }
                */
            } else {
                //console.log('You clicked outside of button bounds');
            }
        });
    });
}

window.drawButtons = function() {
    // Draw the buttons
    buttons.forEach(button => {
        if (mobileOn) {
            if (button.img) {
                // If the image has loaded, draw it
                //context.clearRect(0, 0, canvas.width, canvas.height);
                ctx.globalAlpha = 0.5; // Make the image semi-transparent
                drawRoundedRect(ctx, button.x, button.y, button.width, button.height, 10);
                //ctx.clip();
                ctx.drawImage(button.img, button.x, button.y, button.width, button.height);
                ctx.globalAlpha = 1.0; // Reset the transparency
                //ctx.resetClip();
            } else {
                // If the image hasn't loaded, draw a rectangle and the button name
                ctx.fillStyle = 'rgba(210, 180, 140, 0.5)'; // Semi-transparent tan color
                ctx.fillStyle = 'rgba(210, 180, 140)'; // Tan color
                drawRoundedRect(ctx, button.x, button.y, button.width, button.height, 10);
                ctx.fill();
                ctx.fillStyle = '#000000';
                ctx.fillText(button.name, button.x, button.y + button.height / 2);
            }
        }
    });
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.arcTo(x + width, y, x + width, y + radius, radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
    ctx.lineTo(x + radius, y + height);
    ctx.arcTo(x, y + height, x, y + height - radius, radius);
    ctx.lineTo(x, y + radius);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.closePath();
}

