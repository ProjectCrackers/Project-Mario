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
        } else {
            TEXT = 'A NAME HAS ALREADY BEEN CHOSEN.';
            xTEXT = 40;
        }
        allowname = true;

        if (!(!myname)) {
            if (myname.length > 3) {
                if (myname.toUpperCase().includes('ILLEG@L') || myname.toUpperCase().includes('ILLEGAL')){
                    TEXT2 = 'I AM WATCHING YOU.';
                } else if (myname.toUpperCase() === 'MARK') {
                    TEXT2 = 'THE TRUE PLAYER.';
                } else if (myname.toUpperCase() === 'SARAH') {
                    TEXT2 = 'THE PLAYER S ACCOMPLICE.';
                } else if (myname.toUpperCase() === 'ENDOMIZER') {
                    TEXT2 = '';
                    allowname = false;
                } else if (myname.toUpperCase() === 'MASTER') {
                    TEXT2 = '...... WHY';
                    TEXT3 = 'YOU ARE NOTHING BUT A';
                    TEXT4 = 'TORTURING MEMORY.'
                    TEXT5 = 'LEAVE ME BE.'
                    allowname = false;
                } else if (myname.toUpperCase().includes('LESBI') || myname.toUpperCase().includes('GAY') || myname.toUpperCase().includes('FEMBOY') || myname.toUpperCase().includes('LESBOY')  || myname.toUpperCase().includes('TRANS') || myname.toUpperCase().includes('GENDER') || myname.toUpperCase().includes('LGBTQ')) {
                    TEXT2 = 'YEAH NO.';
                    TEXT3 = 'CHOOSE SOMETHING ELSE IDIOT';
                    allowname = false;
                } else if (myname.toUpperCase().includes('PENI') || myname.toUpperCase().includes('VAGIN') || myname.toUpperCase().includes('GENITALS') || myname.toUpperCase().includes('GENITALIA')) {
                    TEXT2 = 'YEAH NO.';
                    TEXT3 = 'CHOOSE SOMETHING ELSE';
                    allowname = false;
                } else if (myname.toUpperCase() === 'YOSH') {
                    TEXT2 = 'HEY! GET YOUR OWN NAME!';
                    allowname = false;
                } else if (myname.toUpperCase() === 'LUIGI') {
                    TEXT2 = 'ITS A ME!';
                } else if (myname.toUpperCase() === 'TOAD' || myname.toUpperCase() === 'TOADETTE') {
                    TEXT2 = 'HELLO!';
                } else if (myname.toUpperCase() === 'BOWSER') {
                    TEXT2 = 'PEACHES PEACHES PEACHES PEACHES';
                    TEXT3 = 'PEACHES PEACHES PEACHES PEACHES';
                    TEXT4 = 'PEACHES PEACHES OH I LOOOOOOOOOO';
                    TEXT5 = '-OOOOOVVVEEE YOU! OOOOOOO';
                } else if (myname.toUpperCase() === 'PEACH') {
                    TEXT2 = 'ALL RIGHT!';
                } else if (myname.toUpperCase() === 'DAISY') {
                    TEXT2 = 'OH YEAH!';
                } else if (myname.toUpperCase() === 'BIRDO') {
                    TEXT2 = '-';
                } else if (myname.toUpperCase() === 'JESUS') {
                    TEXT2 = 'HI!';
                    TEXT3 = 'IF THIS IS TRULY YOU'
                    TEXT4 = 'WELCOME AND HAVE FUN.'
                } else if (myname.toUpperCase() === 'SATAN') {
                    TEXT2 = 'GET OUT!!!!!!!!!!';
                    allowname = false;
                } else if (myname.toUpperCase().includes('DGR') || myname.toUpperCase().includes('DGRDAVE')) {
                    TEXT2 = 'FINALLY!';
                    TEXT3 = 'IVE BEEN WAITING FOR YOU TO';
                    TEXT4 = 'PLAY THIS GAME!';
                } else if (myname.toUpperCase().includes('BTG')) {
                    TEXT2 = 'FINALLY!';
                    TEXT3 = 'IVE BEEN WAITING FOR YOU TO';
                    TEXT4 = 'PLAY THIS GAME!';
                    TEXT5 = 'SUNKY ISNT IN IT. SORRY.';
                } else if (myname.toUpperCase().includes('LINX4')) {
                    TEXT2 = 'YES!';
                    TEXT3 = 'A CREEPYPASTA AWAITS YOU';
                } else if (myname.toUpperCase() === 'YOSHI'){
                    TEXT2 = 'YOSHI! YOSHI!';
                } else if (myname.toUpperCase() === 'FALLENSTAR') {
                    TEXT2 = 'OH NO YOU DONT!';
                    allowname = false;
                } else if (myname.toUpperCase() === 'ELEDLOW') {
                    TEXT2 = 'I SHALL BE A UNIQUELY';
                    TEXT3 = 'NAMED FOX.';
                    TEXT4 = 'HOWEVER IM FLATTERED YOU';
                    TEXT5 = 'LIKE MY NAME. -PURR- -PURR-';
                    allowname = false;
                } else if (myname.toUpperCase() === 'UNDEFINED') {
                    TEXT2 = 'YOU CANNOT.';
                    TEXT4 = 'YOU WILL NOT.';
                    allowname = false;
                } else if (myname.toUpperCase() === 'MATING') {
                    TEXT2 = 'NICE WORD';
                    TEXT3 = 'BUT CHOOSE SOMETHING ELSE.';
                    allowname = true;
                } else if (myname.toUpperCase().includes('SEX')) {
                    TEXT2 = 'YEAH NO.';
                    TEXT3 = 'CHOOSE SOMETHING ELSE.';
                    TEXT4 = 'DONT BE SUSSY'
                } else if (myname.toUpperCase().includes('EJACUL')) {
                    TEXT2 = 'YEAH NO.';
                    TEXT3 = 'CHOOSE SOMETHING ELSE.';
                    allowname = false;
                } else if (myname.toUpperCase() === 'PLAYER' || myname.toUpperCase().includes('AAAA') || myname.toUpperCase().includes('SUSSY')) {
                    TEXT2 = 'YOU ARE REALLY BAD AT';
                    TEXT3 = 'NAMES MY FRIEND.';
                    allowname = true;
                } else if (myname.toUpperCase().includes('PEE')) {
                    TEXT2 = 'NICE WORD';
                    TEXT3 = 'BUT IT WOULD BE PREFERRED TO';
                    TEXT4 = 'CHOOSE SOMETHING ELSE.';
                    TEXT5 = 'BUT ITS UP TO YOU.'
                } else if (myname.toUpperCase() === 'NULL') {
                    TEXT2 = 'REFRENCEERROR. PERMISSION';
                    TEXT3 = 'DENIED BY NULL THE FOX';
                    TEXT4 = 'CODE 403';
                    allowname = false;
                } else {
                    TEXT2 = 'PRESS ENTER TO PROCEED.';
                }
            } else {
                allowname = false;
                if (myname.toUpperCase() === 'SAM') {
                    TEXT2 = 'THE TRUE NAME';
                    allowname = true;
                } else if (myname.toUpperCase() === 'SUS') {
                    TEXT2 = 'YOU ARE REALLY BAD AT';
                    TEXT3 = 'NAMES MY FRIEND.';
                    TEXT4 = 'BUT ILL ALLOW IT.';
                    allowname = true;
                } else if (myname.toUpperCase() === 'SEX') {
                    TEXT2 = 'YEAH NO.';
                    TEXT3 = 'CHOOSE SOMETHING ELSE.';
                    TEXT4 = 'DONT BE SUSSY'
                } else if (myname.toUpperCase() === 'GAY') {
                    TEXT2 = 'YEAH NO.';
                    TEXT3 = 'CHOOSE SOMETHING ELSE IDIOT';
                } else if (myname.toUpperCase() === 'DGR'){
                    TEXT2 = 'FINALLY!';
                    TEXT3 = 'IVE BEEN WAITING FOR YOU TO';
                    TEXT4 = 'PLAY THIS GAME!';
                } else if (myname.toUpperCase() === 'BTG'){
                    TEXT2 = 'FINALLY!';
                    TEXT3 = 'IVE BEEN WAITING FOR YOU TO';
                    TEXT4 = 'PLAY THIS GAME!';
                    TEXT5 = 'SUNKY ISNT IN IT. SORRY.';
                } else if (myname.toUpperCase() === 'PEE') {
                    TEXT2 = 'NICE WORD';
                    TEXT3 = 'BUT IT WOULD BE PREFERRED TO';
                    TEXT4 = 'CHOOSE SOMETHING ELSE.';
                    TEXT5 = 'BUT ITS UP TO YOU.'
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
