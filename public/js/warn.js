//---- warn console but not as a console.warn() fuunction
function warn() {
    console.warn("%c⛔Stop!⛔", "font-family: cursive; color: #F00; font-size: 30px; -webkit-text-stroke: 1px black; font-weight: bold;");
    console.warn("This is the part of your browser intended for developers. If someone told you to copy-and-paste something here, don't do it! It could allow them to hack your google account, delete all of your storage data, hack other websites, or do many other harmful things. If you don't understand what exactly you are doing here, you should close this window without doing anything.");
}
//---- call
warn();