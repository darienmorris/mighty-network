MN.Arena = function() {
	this.size = [3,3];
	this.setup();
	game.arena = this;
};

MN.Arena.prototype = {

	setup: function() {
		var heroPlatform = new MN.Platform(400, 230, this.size, true);
		var opponentPlatform = new MN.Platform(612, 230, this.size, false);

		this.hero = new MN.Hero(heroPlatform, opponentPlatform);
		this.opponent = new MN.Opponent(opponentPlatform, heroPlatform);

		this.hero.addTarget(this.opponent);
		this.opponent.addTarget(this.hero);


	},

};