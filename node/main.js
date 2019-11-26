const exec = require("child_process").execSync;
const rl = require("readline-sync");
const chalk = require("chalk");

function msg(txt) {
    console.log(txt);
}

function start(link) {
    exec("xdg-open " + link);
}

function command(txt, link) {
    msg(txt);
    start(link);
}

function run() {
    console.log("Eingabe:");
    let answer = rl.question().toLowerCase();
    if (answer == "g") {
        command("Google wird geöffnet...", "https://google.com");
    } else if (answer == "y") {
        command("Youtube wird geöffnet...", "https://youtube.com");
    } else {
        msg(chalk.black.bgRed("Falsche eingabe..."))
    }
}

while (true) {
    run();
}
