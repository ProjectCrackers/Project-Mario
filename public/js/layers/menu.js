// Constants
let option = 0;
let maxoptions = 3;
let set = "main";
let level;
window.initializedMenu = false;
window.startGame = false;

// Changes y in credits
var plus = 0;
setInterval(() => {
    plus += -1
    if (plus < -92) {
        plus = 12
    }
}, 1000); // Changes every 1 second


export function createMenuLayer(font, l) {
    level = l;
    const LINE1 = font.size;
    const LINE2 = font.size * 2;
    const LINE4 = font.size * 26;
    const LINE5 = font.size * 28;
    const LINE6 = font.size * 30;
    const LINE7 = font.size * 32;
    const LINE8 = font.size * 34;
    const LINE9 = font.size * 36;
    const LINE11 = font.size * 40;
    const LINE12 = font.size * 42;
    const LINE14 = font.size * 46;
    const LINE15 = font.size * 48;
    const LINE17 = font.size * 52;
    const LINE18 = font.size * 54;
    const LINE19 = font.size * 56;
    const LINE20 = font.size * 58;
    const LINE21 = font.size * 60;
    const LINE22 = font.size * 62;
    const LINE24 = font.size * 66;
    const LINE25 = font.size * 68;
    const LINE27 = font.size * 72;
    const LINE28 = font.size * 74;
    const LINE29 = font.size * 76;
    const LINE30 = font.size * 78;
    const LINE32 = font.size * 80;
    const LINE33 = font.size * 82;
    const LINE35 = font.size * 86;
    const LINE36 = font.size * 88;
    const LINE37 = font.size * 90;
    const LINE38 = font.size * 92;

    return function drawDashboard(context) {
        font.print(myname.toString().toUpperCase(), context, 16, LINE1);
        font.print("0".padStart(6, '0'), context, 16, LINE2);

        font.print("HIGHSCORE".toString().toUpperCase(), context, 176, LINE1);
        font.print("SAM - " + "9".padStart(50, '9'), context, 176, LINE2);

        font.print('@×00', context, 96, LINE2);

        initializedMenu = true;
        // Options
        if (set === "main") {
            font.print('PLAY GAME'.toUpperCase(), context, 65, LINE5);
            font.print('SETTINGS'.toUpperCase(), context, 65, LINE6);
            font.print('SOUND TEST'.toUpperCase(), context, 65, LINE7);
            font.print('CREDITS'.toUpperCase(), context, 65, LINE8);
        } else if (set === "charselect") {
            font.print('MARIO'.toUpperCase(), context, 65, LINE5);
            font.print('LUIGI'.toUpperCase(), context, 65, LINE6);
            font.print('ELEDLOW THE FOX'.toUpperCase(), context, 65, LINE7);
            font.print('LEAVE'.toUpperCase(), context, 65, LINE8);
        } else if (set === "settings") {
            if (checkGLSupport) {
                font.print('TOGGLE CRT FILTER - WEBGL'.toUpperCase(), context, 65, LINE5);
            } else {
                font.print('TOGGLE CRT FILTER - UNSUPPORTED'.toUpperCase(), context, 65, LINE5);
            }
            if (mobileOn) {
                font.print('TOGGLE MOBILE BUTTONS - ON BETA'.toUpperCase(), context, 65, LINE6);
            } else {
                font.print('TOGGLE MOBILE BUTTONS - OFF'.toUpperCase(), context, 65, LINE6);
            }
            if (dimViolence) {
                font.print('VIOLENCE - OFF'.toUpperCase(), context, 65, LINE7);
            } else {
                font.print('VIOLENCE - ON'.toUpperCase(), context, 65, LINE7);
            }
            if (explicitMode) {
                font.print('SCENES - ALL SCENES'.toUpperCase(), context, 65, LINE8);
            } else {
                font.print('SCENES - NECESSARY SCENES ONLY'.toUpperCase(), context, 65, LINE8);
            }
            font.print('LEAVE'.toUpperCase(), context, 65, LINE9);
        } else if (set === "sound-test") {
            font.print('ENTER SOUND NAME OR JSON'.toUpperCase(), context, 65, LINE5);
            font.print('LEAVE'.toUpperCase(), context, 65, LINE6);
            if (debug.active) {
                if (debug.type === "genie") {
                    font.print('GAME GENIE'.toUpperCase(), context, 65, LINE7);
                } else if (debug.type === "debug") {
                    font.print('DEBUGGER'.toUpperCase(), context, 65, LINE7);
                } else if (debug.type === "debug+") {
                    font.print('GENIE DEBUGGER'.toUpperCase(), context, 65, LINE7);
                } else if (debug.type === "debug++") {
                    font.print('TERMINAL'.toUpperCase(), context, 65, LINE7);
                }
            }
            font.print(''.toUpperCase(), context, 65, LINE8);
        } else if (set === "credits") {
            font.print('- PRESS ENTER IF YOU ARE BORED -'.toUpperCase(), context, 25, LINE4 + (plus * font.size));

            font.print('SUPER ELEDLOW BROS.'.toUpperCase(), context, 25, LINE8 + (plus * font.size));
            font.print('BROUGHT TO YOU BY ELEDLOW THE FOX'.toUpperCase(), context, 25, LINE9 + (plus * font.size));

            font.print('PRODUCERS'.toUpperCase(), context, 25, LINE11 + (plus * font.size));
            font.print('- ELEDLOW'.toUpperCase(), context, 25, LINE12 + (plus * font.size));

            font.print('PROGRAMMERS'.toUpperCase(), context, 25, LINE14 + (plus * font.size));
            font.print('- ELEDLOW'.toUpperCase(), context, 25, LINE15 + (plus * font.size));

            font.print('COPYRIGHT'.toUpperCase(), context, 25, LINE17 + (plus * font.size));
            font.print('- ANY CONTENT IN THE SUPER MARIO'.toUpperCase(), context, 25, LINE18 + (plus * font.size));
            font.print('  FRANCHISE BELONGS TO NINTENDO ONLY'.toUpperCase(), context, 25, LINE19 + (plus * font.size));
            font.print('- ANY CONTENT IN THE ARROW THE FOX'.toUpperCase(), context, 25, LINE20 + (plus * font.size));
            font.print('  FRANCHISE BELONGS THE MASTERCODE TEAM'.toUpperCase(), context, 25, LINE21 + (plus * font.size));
            font.print('  AND TO THE ELEDLOW STUDIOS TEAM'.toUpperCase(), context, 25, LINE22 + (plus * font.size));

            font.print('THIS PROJECT WAS CREATED WITH THE'.toUpperCase(), context, 25, LINE24 + (plus * font.size));
            font.print('ELEDLOW STUDIOS ENGINE'.toUpperCase(), context, 25, LINE25 + (plus * font.size));
            
            font.print('LICENSES'.toUpperCase(), context, 25, LINE27 + (plus * font.size));
            font.print('- THIS WORK IS LICENSED UNDER THE'.toUpperCase(), context, 25, LINE28 + (plus * font.size));
            font.print('  CC BY-NC 4.0. LICENSE DUE TO ITS'.toUpperCase(), context, 25, LINE29 + (plus * font.size));
            font.print('  USAGE OF WEB-BREAKOUT CONTENT.'.toUpperCase(), context, 25, LINE30 + (plus * font.size));

            font.print('FOR MORE INFORMATION - PLEASE SEE'.toUpperCase(), context, 25, LINE32 + (plus * font.size));
            font.print('LICENSE.MD IN THE -PUBLIC- DIRECTORY'.toUpperCase(), context, 25, LINE33 + (plus * font.size));

            font.print('IF YOU READ THIS FULL DOCUMENT'.toUpperCase(), context, 25, LINE35 + (plus * font.size));
            font.print('I HAVE A GIFT FOR YOU'.toUpperCase(), context, 25, LINE36 + (plus * font.size));
            font.print('ENTER DEBUG CODE GENIE-SXIOPO TO GET'.toUpperCase(), context, 25, LINE37 + (plus * font.size));
            font.print('99 LIVES.'.toUpperCase(), context, 25, LINE38 + (plus * font.size));
        } 

        // Mouse
        if (set === "credits") {
            font.print('@'.toUpperCase(), context, 15, font.size * (28+(option*2)));
        } else {
            plus = 0;
            font.print('@'.toUpperCase(), context, 55, font.size * (28+(option*2)));
        }
    }
}

// Listen for keydown events
window.addEventListener('keyup', function(event) {
    event.preventDefault();

    // Ignore any key except arrow keys
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter'].includes(event.key)) {
        return;
    }

    // Ignore if menu is not intialized.
    if (!initializedMenu) {
        return;
    }

    // If the backspace key was pressed, remove the last character from the username
    // Renember! JavaScript is '0' based, so 0 is the first option.
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        option += 1
        if (option > maxoptions) {
            option = 0;
        }
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        option -= 1
        if (option < 0) {
            option = maxoptions;
        }
    }

    if (event.key === 'Enter') {
        var audio = new Audio('./audio/Bump.wav');
        audio.play();

        if (set === "main") {
            if (option === 0) {
                maxoptions = 3;
                option = 0;
                set = "charselect"
            } else if (option === 1) {
                maxoptions = 4;
                option = 0;
                set = "settings"
            } else if (option === 2) {
                maxoptions = 1;
                if (debug.activated) {
                    maxoptions = 2;
                }
                option = 0;
                set = "sound-test"
            } else if (option === 3) {
                maxoptions = 0;
                option = 0;
                set = "credits"
            }
        } else if (set === "charselect") {
            initializedMenu = false;
            if (option === 0) {
                startGame = true;
                option = 0;
                selectedChar = 'Mario';
            } else if (option === 1) {
                startGame = true;
                option = 0;
                selectedChar = 'Luigi';
            } else if (option === 2) {
                startGame = true;
                option = 0;
                selectedChar = 'ELedlow The Fox';
            } else if (option === 3) {
                set = "main";
                option = 0;
                initializedMenu = true;
            }
        } else if (set === "settings") {
            if (option === 0) {
                if (crtOn) {
                    crtOn = false;
                } else {
                    crtOn = true;
                }
            } else if (option === 1) {
                if (mobileOn) {
                    mobileOn = false;
                } else {
                    mobileOn = true;
                }
            } else if (option === 2) {
                if (dimViolence) {
                    if (!explicitMode) {
                        alert("IN ORDER TO CONFIRM THIS, YOU MUST TURN ON EXPLICIT SCENES.")
                        return;
                    }
                    dimViolence = false;
                } else {
                    let check = confirm("WARNING! THIS MAY MAKE CERTAIN ASPECTS OF THE GAME NOT MAKE SENSE. PROCEED?");
                    if (check) {
                        dimViolence = true;
                    }
                }  
            } else if (option === 3) {
                if (explicitMode) {
                    let check = confirm("WARNING! THIS MAY MAKE CERTAIN ASPECTS OF THE GAME NOT MAKE SENSE. PROCEED?");
                    let check2 = true;
                    if (!dimViolence && check) {
                        check2 = confirm("IN ORDER TO CONFIRM THIS, YOU MUST TURN OFF VIOLENCE. WILL YOU STILL PROCEED?");
                    }
                    if (check && check2) {
                        explicitMode = false;
                        dimViolence = true;
                    }
                } else {
                    explicitMode = true;
                    dimViolence = false;
                }  
            } else if (option === 4) {
                set = "main";
                option = 0;
            }
        } else if (set === "sound-test") {
            if (option === 0) {
                let input = prompt("ENTER THE NAME OR JSON CODE OF A SOUND.");

                // Check if the input is a JSON file
                if (input.startsWith("{") && input.endsWith("}")) {
                    try {
                        let jsonInput = JSON.parse(input);
                        // Check if it's a Sound JSON or a Debug JSON
                        if (jsonInput.main && jsonInput.main.url) {
                            level.music.pause();
                            let audio = new Audio(jsonInput.main.url);
                            audio.play();
                        } else if (jsonInput.keys && jsonInput.keys.debug && jsonInput.keys.auth) {
                            if (jsonInput.keys.debug.length > 5 && jsonInput.keys.debug.length < 7) {
                                level.music.pause();
                            } else {
                                throw new Error("Invalid key length.")
                            }

                            if (!(jsonInput.keys.debug.join(",") === [0,2,1,2,0,9].join(","))) {
                                throw new Error("Invalid key code.")
                            }

                            if (jsonInput.keys.auth === "genie") {
                                debug.type = "genie";
                            }
                            if (jsonInput.keys.auth === "debug") {
                                debug.type = "debug";
                            }
                            if (jsonInput.keys.auth === "genie/debug" || jsonInput.keys.auth === "debug/genie") {
                                debug.type = "debug+";
                            }
                            if (jsonInput.keys.auth === "admin") {
                                debug.type = "debug++";
                            }

                            debug.active = true;
                            maxoptions = 2;
                        } else {
                            throw new Error("The JSON you have entered either has an error or does not fit the format of \"Sound JSON\" or \"Debug JSON\".")
                        }
                    } catch (error) {
                        console.error('Error:', error);
                    }
                } else if (input.endsWith('.json')) {
                    // Fetch the JSON file
                    level.music.pause();
                    fetch(`./music/${input}`)
                        .then(response => response.json())
                        .then(data => {
                            // Create a new Audio object and play the sound
                            let audio = new Audio(data.main.url);
                            audio.play();
                        })
                        .catch(error => console.error('Error:', error));
                } else if (input.endsWith('.wav')) {
                    // Run a wav file
                    level.music.pause();
                    try {
                        let audio = new Audio(`./audio/${input}.wav`);
                        audio.play();
                    } catch (error) {
                        console.error('Error:', error);
                    }
                } else if (input.endsWith('.mp3')) {
                    // Run a mp3 file
                    level.music.pause();
                    try {
                        let audio = new Audio(`./audio/${input}.mp3`);
                        audio.play();
                    } catch (error) {
                        console.error('Error:', error);
                    }
                } else if (input.endsWith('.ogg')) {
                    // Run a ogg file
                    level.music.pause();
                    try {
                        let audio = new Audio(`./audio/${input}.ogg`);
                        audio.play();
                    } catch (error) {
                        console.error('Error:', error);
                    }
                } else {
                    // If the input is not a JSON file, assume it's an mp3 file
                    level.music.pause();
                    try {
                        let audio = new Audio(`./audio/${input}.mp3`);
                        audio.play();
                    } catch (error) {
                        console.error('Error:', error);
                    }
                }

            } else if (option === 1) {
                maxoptions = 3;
                option = 0;
                set = "main";
            } else if (option === 2) {
                // I'm not doing that right now
                if (debug.type && debug.type !== "") {
                    if (debug.type === "genie") {
                        throw new Error("Unfinished");
                    }else if (debug.type === "debug") {
                        throw new Error("Unfinished");
                    } else if (debug.type === "debug+") {
                        throw new Error("Unfinished");
                    } else if (debug.type === "debug++") {
                        throw new Error("Unfinished");
                    }
                }
            }
        } else if (set === "credits") {
            maxoptions = 3;
            set = "main"
            option = 0;
        }
        localStorage.setItem('crtOn', crtOn);
        localStorage.setItem('mobileOn', mobileOn);
        localStorage.setItem('dimViolence', dimViolence);
        localStorage.setItem('explicitMode', explicitMode);
    }

    // Otherwise, add the key pressed to the username, but only if it would not make the username longer than 10 characters
    else if (myname.length < 10 && /^[a-zA-Z@]$/.test(event.key) && xTEXT !== 40) {
        if (xTEXT === 40) {
            setUsername(localStorage.getItem('username'))
        } else if (xTEXT === 100) {
            setUsername(myname + event.key);
        } else {
            // do nothing
        }
    }
});
