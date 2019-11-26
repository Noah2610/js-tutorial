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
    // Gib zuerst
    msg(txt);
    // Öffne den Link oder das Programm.
    start(link);
}

// Hier läuft der Haupt Code.
function run() {
    // Teile dem User mit, dass das Programm sich eine Eingabe erwartet.
    msg("Eingabe:");

    // Lies die Eingabe vom User.
    // Wartet bis der User "Enter" drückt, und setzt den eingegebenen
    // Text dann als "answer" Variable.
    // Der eingegebene Text wird auch gleich klein gemacht ("AbC" -> "abc").
    let answer = rl.question().toLowerCase();

    if (answer == "g") {
        // Wenn der User ein "g" eingegeben hat, dann wird Google geöffnet.
        command("Google wird geöffnet...", "https://google.com");

    } else if (answer == "y") {
        // Wenn der User ein "y" eingegeben hat, dann wird Google geöffnet.
        command("Youtube wird geöffnet...", "https://youtube.com");

    } else {
        // Wenn der User keinen der akzeptierten Befehle angegeben hat,
        // dann wird eine Fehlermeldung, mit roter Hintergrundfarbe ausgegeben.
        msg(chalk.black.bgRed("Falsche eingabe..."))
    }
}

// Diese "while" Schleife (loop) wird endlos ausgeführt,
// weil der Wert "true" immer "true" sein wird.
while (true) {
    // Wir führen einfach unsere "run()" Funktionen jedes Mal aus.
    run();
}
