GameCtrl.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

GameCtrl.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		this.background = this.add.sprite(this.game.width / 2 - 250, this.game.height / 2 - 70, 'preloaderBackground');
		this.preloadBar = this.add.sprite(this.game.width / 2 - 250, this.game.height / 2 - 70, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		this.load.image('background', 'assets/images/background.png');
		this.load.image('playButton', 'assets/images/play_button.png');
		// LG
		this.load.image('bacteriaButton', 'assets/images/bacteria_button.png');
		this.load.image('neutroButton', 'assets/images/neutro_button.png');

		this.load.image('bacteriaOverview', 'assets/images/bacteria_overview.png');
		this.load.image('neutroOverview', 'assets/images/neutro_overview.png');

		this.load.image('bacteriaSprite', 'assets/images/bacteria_sprite.png');
		this.load.image('neutroSprite', 'assets/images/neutro_sprite.png');
		this.load.image('lymphoSprite', 'assets/images/lympho_sprite.png');
		this.load.image('bacteriaFoodSprite', 'assets/images/bacteriaFood_sprite.png');
		this.load.image('antibodySprite', 'assets/images/antibody_sprite.png');

		this.load.image('select', 'assets/images/select.png');
		this.load.image('back', 'assets/images/back.png');
		//  This is how you load an atlas
		//this.load.atlas('playButton', 'assets/images/play_button.png', 'assets/images/play_button.json');

		this.load.audio('titleMusic', ['assets/audio/main_menu.mp3']);

		//  This is how you load fonts
		//this.load.bitmapFont('caslon', 'assets/fonts/caslon.png', 'assets/fonts/caslon.xml');

		//	+ lots of other required assets here

	},

	create: function () {

		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;

	},

	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.

		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.

		if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		{
			this.ready = true;
			this.game.state.start('MainMenu');
		}

	}

};
