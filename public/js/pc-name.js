var username = '';
username = localStorage.getItem('username');
if (username === "null") {
    username = "ILLEG@L STRING"
    localStorage.removeItem('username');
}
var host = 'defined';

let protocal = window.location.protocol;
let path = window.location.pathname; // Gets the path part of the URL
let parts = path.split('/'); // Splits the path into parts
let start = window.location.origin;

if (!username) {
    username = ''
    if (start.includes("192.168.12.77:")) {
        username = 'SERVE';
        host = 'server';
    } else if (start.includes("127.0.0.1:") || start.includes("localhost:")) {
        username = 'MARIO';
        host = 'local'
    } else if (protocal === 'file:') {
        username = parts[3];
        host = 'default'
    } else {
        username = 'YOSHI';
        host = 'site'
    }
}
console.log(`The host type is currently the "${host}" host`);

export { username }

window.username = username;
window.currentHost = host;