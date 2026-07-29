// pad names for display
const padNames = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open HH",
  Z: "Kick-n-Hat",
  X: "Kick",
  C: "Closed HH"
};

const display = document.getElementById("display");

// play sound and update display
function triggerPad(key) {
  const audio = document.getElementById(key);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  display.textContent = padNames[key];

  const pad = audio.parentElement;
  pad.classList.add("active");
  setTimeout(() => pad.classList.remove("active"), 100);
}

// click
const pads = document.querySelectorAll(".drum-pad");
pads.forEach(pad => {
  pad.addEventListener("click", () => {
    const key = pad.textContent.trim();
    triggerPad(key);
  });
});

// keyboard
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  if (padNames[key]) triggerPad(key);
});
