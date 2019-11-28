const fs = require("fs");
const exec = require("child_process").execSync;
const rl = require("readline-sync");

// Wir lesen erst mal den Inhalt der Datei "data.json"
// und speichern es als string unter der Variable "rawData".
const rawData = fs.readFileSync("data.json", "utf8");
// Dann können wir den "rawData" string zu einem
// JavaScript Objekt verwandeln mit der Funktion "JSON.parse()".
const data = JSON.parse(rawData);

// Jetzt wollen wir mal eine Eingabe vom User bekommen.
// Wir machen auch die Eingabe klein und holen uns nur
// den ersten Buchstaben der Eingabe.
const answer = rl
    .question("Answer: ")
    .toLowerCase()
    .charAt(0);

// Jetzt wollen wir über alle commands in unserem "data" drüber gehen,
// um zu überprüfen welchen Befehl der User mit seiner Eingabe ausführen will.

// Wir setzen      Die Schleife soll      Jedes Mal wenn der Code
// die Variable    so für die Länge       in der Schleife ausgeführt
// "i" als erstes  von unseren commands   wird wollen wir die "i" Variable
// auf 0.          laufen.                um Eins erhöhen.
//   vvvvvvvvv  vvvvvvvvvvvvvvvvvvvvvvvv  vvv
for (let i = 0; i < data.commands.length; i++) {
    // Wir holen uns den command, der an der "i"-ten stelle liegt.
    const command = data.commands[i];
    // Dann können wir vergleichen, ob der User den richtigen
    // Buchstaben für diesen command eingegeben hat.
    if (command.input == answer) {
        // Wir geben zuerst die message zum command
        // aus, danach führen wir den Konsolen Befehl
        // zum command aus.
        console.log(command.msg);
        exec(command.cmd);

        // Da der richtige Befehl gefunden worden ist, wollen
        // wir gar nicht mehr die anderen Befehle ausprobieren.
        // Mit "break" brechen wir aus der Schleife aus.
        break;
    }
}
