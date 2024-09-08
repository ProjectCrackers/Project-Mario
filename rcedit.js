const rcedit = require('rcedit');

async function addIconToExe(exe, icon) {
  try {
    await rcedit(exe, {
      icon: icon,
    });
    console.log('Icon added successfully!');
  } catch (error) {
    console.error('Failed to add icon:', error);
  }
}

let exe = "Mar.V2.exe.pack/dist/Mar.V2.exe/Mar.V2.exe-win_x64.exe";
let icon = "public/icon.ico"; // Only ICO files work

addIconToExe(exe, icon);