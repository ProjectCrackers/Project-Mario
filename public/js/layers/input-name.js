import { username } from "../pc-name.js";
window.myname = username;
window.xTEXT = 60;
window.allowname = true;

function requestpermissionfrom(user) {
    if (user === null) {
        throw Error("403: Access Denied by Null.")
    }
}

export function createInputLayer(font) {
    const LINE1 = font.size * 20;
    const LINE2 = font.size * 21;
    const LINE3 = font.size * 22;
    const LINE4 = font.size * 23;
    const LINE5 = font.size * 24;
    const LINE6 = font.size * 25;

    return function drawDashboard(context) {
        // Print the prompt for the username
        let TEXT = '';
        let TEXT2 = '';
        let TEXT3 = '';
        let TEXT4 = '';
        let TEXT5 = '';
        xTEXT = 60;

        if (currentHost === 'default') {
            TEXT = 'NAME THE PLAYER.';
            xTEXT = 100;
        } else if (currentHost === 'server') {
            TEXT = 'ENTER NAME.';
            xTEXT = 100;
        } else if (currentHost === 'local') {
            TEXT = 'ENTER YOUR NAME.';
            xTEXT = 100;
        } else if (currentHost === 'site') {
            TEXT = 'ENTER THE PLAYER NAME.';
            xTEXT = 100;
        } else if (currentHost === 'neutralino') {
            TEXT = 'ENTER YOUR NAME.';
            xTEXT = 100;
        } else {
            TEXT = 'A NAME HAS ALREADY BEEN CHOSEN.';
            xTEXT = 40;
        }
        allowname = true;

        if (!(!myname)) {
            if (myname.length > 3) {
                if (myname.toUpperCase() === 'JONES') {
                    TEXT2 = 'WELCOME BACK.';
                } else if (myname.toUpperCase() === 'YOSH') {
                    TEXT2 = '...';
                    allowname = false;
                } else if (myname.toUpperCase() === 'LUIGI') {
                    TEXT2 = 'ITS A ME!';
                } else if (myname.toUpperCase().includes('JESUS' || 'HOLYSPIRIT' || 'GOD' || 'JEHOVAH' || 'YESHUA')) {
                    TEXT2 = 'UNEXPECTED...'
                } else if (myname.toUpperCase() === 'SATAN') {
                    TEXT2 = 'A LITTLE BIT ON THE NOSE';
                    allowname = false;
                } else if (myname.toUpperCase().includes('DGR' || 'DGRDAVE' || 'BTG' || 'LINX')) {
                    TEXT2 = 'UNEXPECTED...';
                } else {
                    TEXT2 = 'PRESS ENTER TO PROCEED.';
                }
            } else {
                allowname = false;
                if (myname.toUpperCase() === ('DGR' || 'BTG')){
                    TEXT2 = 'UNEXPECTED...';
                } else if (myname.toUpperCase() === 'MOM' || myname.toUpperCase() === 'DAD' || myname.toUpperCase() === 'SON') {
                    TEXT2 = 'PRESS ENTER TO PROCEED.'; 
                } else {
                    allowname = false;
                }
            }
        } else {
            allowname = false;
        }

        font.print(TEXT.toUpperCase(), context, xTEXT, LINE1);
        if (!(!myname)) {
            font.print(myname.toUpperCase(), context, 115, LINE2);
        }
        font.print(TEXT2.toUpperCase(), context, 100, LINE3);
        font.print(TEXT3.toUpperCase(), context, 100, LINE4);
        font.print(TEXT4.toUpperCase(), context, 100, LINE5);
        font.print(TEXT5.toUpperCase(), context, 100, LINE6);
        if (myname.toUpperCase() === 'NULL') {
            requestpermissionfrom(null)
        }
    }
}

// Set username function
export function setUsername(newUsername) {
    myname = newUsername;
}

// Listen for keydown events
window.addEventListener('keydown', function(event) {
    event.preventDefault();

    // Ignore arrow keys
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        return;
    }

    // If the backspace key was pressed, remove the last character from the username
    if (event.key === 'Backspace') {
        if (!myname) {
            return;
        }
        if (xTEXT === 40) {
            myname = localStorage.getItem('username');
        } else if (xTEXT === 100) {
            myname = myname.slice(0, -1);
        } else {
            // do nothing
        }
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
