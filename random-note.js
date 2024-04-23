function swapNote() {
    let nextNote = noteSet.pop()
    if (nextNote === undefined) {
        noteSet = shuffle(baseSet)
        nextNote = noteSet.pop()
    }
    noteElement.textContent = nextNote
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

const noteElement = document.getElementById("current_note");

const naturals = ["A", "B", "C", "D", "E", "F", "G"]

const sharps = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
const flats = ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"]
const both = ["A", "A#", "Ab", "B", "Bb", "C", "C#", "D", "D#", "Db", "E", "Eb", "F", "F#", "G", "G#", "Gb"]

const sharpsEnharmonic = ["A", "A#", "B", "B#", "C", "C#", "D", "D#", "E", "E#", "F", "F#", "G", "G#"]
const flatsEnharmonic = ["A", "Ab", "B", "Bb", "C", "Cb", "D", "Db", "E", "Eb", "F", "Fb", "G", "Gb"]
const bothEnharmonic = ["A", "A#", "Ab", "B", "B#", "Bb", "C", "C#", "Cb", "D", "D#", "Db", "E", "E#", "Eb", "F", "F#", "Fb", "G", "G#", "Gb"]

let baseSet = naturals
let noteSet = shuffle(baseSet);
let intervalms = 3000;

swapNote(noteSet)

setInterval(function () { swapNote(noteSet) }, intervalms)
