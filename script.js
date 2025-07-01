// টাইপিং এফেক্টের কোড (অবশ্যই script.js-তে এই ফাংশন থাকবে)
const text = "Happy Birthday My Love ❤️";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
    }
}

window.onload = function() {
    typeWriter();
};

function showBirthdayNote() {
    const note = document.getElementById("note");
    note.classList.add("show");

    const music = document.getElementById("bgMusic");
    music.play();

    launchConfetti();

    document.getElementById("showBigNoteBtn").classList.remove("hidden");
}

function launchConfetti() {
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

function showBigLoveNote() {
    const bigNote = document.getElementById("bigLoveNote");
    bigNote.classList.add("show");

    document.getElementById("showBigNoteBtn").classList.add("hidden");
}
