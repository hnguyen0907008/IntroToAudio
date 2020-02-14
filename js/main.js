(() => {
	//grab all buttons and store them in variable
	const playButtons = document.querySelectorAll('.playTrack'),
		  pauseButtons = document.querySelectorAll('.pauseTrack'),
		  rwButtons = document.querySelectorAll('.rwTrack'),
		  audioElement = document.querySelector("#jukebox");

	function loadTrack(){
		let audioSource = `audio/${this.dataset.trackref}.mp3`;
		audioElement.src = audioSource;
		audioElement.load();
		playTrack();
	}

	function playTrack(){
		audioElement.play();
	}

	function pauseTrack(){
		audioElement.pause();
	}

	function rwTrack(){
		audioElement.currentTime = 0;
	}

	playButtons.forEach(button => button.addEventListener("click", loadTrack));
	pauseButtons.forEach(button => button.addEventListener("click", pauseTrack));
	rwButtons.forEach(button => button.addEventListener("click", rwTrack));
})()