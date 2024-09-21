var username = '';
username = localStorage.getItem('username');
if (username === "null" || username === null) {
    username = undefined;
    localStorage.removeItem('username');
}
var host = 'defined';

let protocol = window.location.protocol; // Gets the protocol of the URL
let path = window.location.pathname; // Gets the path part of the URL
let parts = path.split('/'); // Splits the URL path into parts
let start = window.location.origin; // Gets the origin of the URL

async function getUsername() {
    if (!username) {
        username = '';
        if (start.includes("192.168.12.77:")) {
            username = 'SERVE';
            console.warn(`Cannot retrive username within a online server to protect user privacy.`);
            host = 'server';
        } else if (typeof Neutralino !== 'undefined') {
            let name = await Neutralino.os.getEnv('USERNAME');
            console.log(`Retrieved username: ${name}`);
            username = name ? name.toString().toUpperCase() : "LUIGI";
            host = 'neutralino';
        } else if (start.includes("127.") || start.includes("localhost:")) {
            username = 'MARIO';
            console.warn(`Cannot retrive username within a local server to protect user privacy.`);
            host = 'local';
        } else if (protocol === 'file:') {
            username = parts[3];
            console.log(`Retrived username: ${username}`);
            host = 'default';
        } else if (start.includes(".")) {
            username = 'YOSHI';
            console.warn(`Cannot retrive username within a website to protect user privacy.`);
            host = 'site';
        } else {
            username = 'YOU@ARE@SUS';
            console.error(`Unsupported environment. Things may not function properly.`);
            host = undefined;
        }
    }
    console.log(`The host type is currently the "${host}" host`);
    console.log(`Username: ${username}`);
    return username;
}

getUsername().then((name) => {
    username = name;
    window.username = username;
    window.currentHost = host;
});

export { username };