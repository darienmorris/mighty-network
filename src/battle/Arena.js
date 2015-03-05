MN.Arena = function() {
	this.size = [3,3];
	this.setup();
	game.arena = this;
};

MN.Arena.prototype = {

	setup: function() {
		var heroPlatform = new MN.Platform(300, 300, this.size, true);
		var opponentPlatform = new MN.Platform(512, 300, this.size, false);

		this.hero = new MN.Hero(heroPlatform, opponentPlatform);
		this.opponent = new MN.Opponent(opponentPlatform, heroPlatform);


	},

};