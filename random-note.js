function swapNote() {
    let nextNote = noteSet.pop()
    if (nextNote === undefined) {
        noteSet = shuffle(baseSet)
        nextNote = noteSet.pop()
    }

    noteElement.textContent = nextNote + (chordCheckbox.checked ? get_random(chordTypes) : "")

}

function useSet(set) {
    baseSet = set
    noteSet = shuffle(baseSet)
}

const shuffle = ([...array]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

function get_random(arr) {
    return arr[Math.floor((Math.random() * arr.length))];
}

const noteElement = document.getElementById("current_note");
const chordCheckbox = document.querySelector("#chords");

const naturals = ["A", "B", "C", "D", "E", "F", "G"]

const sharps = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
const flats = ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"]
const both = ["A", "A#", "Ab", "B", "Bb", "C", "C#", "D", "D#", "Db", "E", "Eb", "F", "F#", "G", "G#", "Gb"]

const chordTypes = ["7M", "m7", "7", "°", "m(7M)", "ø", "7M(#5)"]

let baseSet = naturals
let noteSet = shuffle(baseSet);
let intervalms = 3000;

swapNote(noteSet)

setInterval(function () { swapNote(noteSet) }, intervalms)
