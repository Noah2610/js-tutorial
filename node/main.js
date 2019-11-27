// Wir müssen als erstes mal alle Libraries improtieren,
// die wir in unserem Script verwenden werden.

// Mit "readline-sync", können wir eine Eingabe vom User akzeptieren.
const rl = require("readline-sync");
// Mit "chalk", können wir Text-Ausgaben farbig machen.
const chalk = require("chalk");
// Aus "child_process" holen wir uns nur die Funktion "execSync"
// und setzten sie bei uns zur Variable "exec".
// Mit "exec" können wir dann Konsolen-Befehle ausführen (Batch).
const exec = require("child_process").execSync;

const MAX_FAILURES = 3;
let timesFailed = 0;
let isRunning = true;

function cls() {
    msg("\033c")
}

// Hiermit schreiben wir einfach den gegebenen Text zur Konsole.
function msg(txt) {
    console.log(txt);
}

// Hier öffnen wir den gegebenen Link (als Text)
// mit dem Batch "start" Befehl.
function start(link) {
    exec("start " + link);       // <- auf Windows
    // exec("xdg-open " + link); // <- auf Linux
}

// Diese Funktion gibt einen Text aus und startet dann einen
// Link oder ein Programm über Batch.
// Die Funktion bekommt zwei Argumente:
//   txt  : Der Text, der ausgegeben werden soll.
//   link : Der Link (oder das Programm), das geöffnet werden soll.
function command(txt, link) {
    // Gib zuerst den gegebenen Text in der Konsole aus.
    msg(txt);
    // Öffne den Link oder das Programm.
    start(link);
}

// Teile dem User mit, dass das Programm sich eine Eingabe erwartet.
function printMsgs() {
    msg(chalk.white("G = Google"))
    msg(chalk.red("Y = Youtube"))
    msg(chalk.yellow("E = Explorer"))
    msg(chalk.green("C = Commander"))
}

// Hier läuft der Haupt Code.
function run() {
    printMsgs();

    // Lies die Eingabe vom User.
    // Wartet bis der User "Enter" drückt, und setzt den eingegebenen
    // Text dann als "answer" Variable.
    // Der eingegebene Text wird auch gleich klein gemacht ("AbC" -> "abc").
    const answer = rl
      .question()
      .toLowerCase()
      .charAt(0);

    cls();

    switch (answer) {
        case "g" :
            isRunning = false
            command(chalk.white("Google wird gestarted... "), "https://www.google.at")
            break

        case "y" :
            isRunning = false
            command(chalk.red("Youtube wird gestarted..."), "https://www.youtube.at")
            break

        case "e" :
            isRunning = false
            command(chalk.yellow("Explorer wird gestarted..."), "explorer")
            break

        case "c" :
            isRunning = false
            command(chalk.green("Commander wird gestarted..."), "cmd")
            break

        default:
            msg(chalk.black.bgRed("Falsche Eingabe..."))

            timesFailed = timesFailed + 1

            if (timesFailed == MAX_FAILURES) {
                isRunning = false
                cls()
                msg(chalk.black.bgRed("Das Programm wurde geschlossen..."))
            }
    }
}

// Diese "while" Schleife (loop) wird endlos ausgeführt,
// weil der Wert "true" immer "true" sein wird.
while (isRunning) {
    // Wir führen einfach unsere "run()" Funktionen jedes Mal aus.
    run();
}
