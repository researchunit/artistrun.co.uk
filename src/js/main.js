// Change the second argument to your options:
// https://github.com/sampotts/plyr/#options
const player = new Plyr('video', {playsinline: true, controls: [""], loop: { active: true }});

// Expose player so it can be used from the console
window.player = player;
