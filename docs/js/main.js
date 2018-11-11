document.addEventListener('DOMContentLoaded', () => {
	// First real dialog starts around 1:47
	const source = 'https://github.com/researchunit/artistrun.co.uk/blob/Video/src/video/test.mp4';
	// For more dash options, see https://github.com/Dash-Industry-Forum/dash.js

	const dash = dashjs.MediaPlayer().create();
	const video = document.querySelector('video');
	dash.getDebug().setLogToBrowserConsole(false);
	dash.initialize(video, source, true);

	// Update caption tracks after initializing Plyr to get the generated captions
	// For more options see: https://github.com/sampotts/plyr/#options
	const player = new Plyr(video, {autoplay: true, playsinline: true, controls: [""], loop: { active: true }});

	// Expose player and dash so they can be used from the console
	window.player = player;
	window.dash = dash;

});
