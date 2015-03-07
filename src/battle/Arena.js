MN.Arena = function(game) {
	this.size = [3,3];
	game.arena = this;
	this.game = game;

	this.setup();
};

MN.Arena.prototype = {

	setup: function() {
		var heroPlatform = new MN.Platform(this.game, 400, 230, this.size, true);
		var opponentPlatform = new MN.Platform(this.game, 612, 230, this.size, false);

		this.hero = new MN.Hero(this.game, heroPlatform, opponentPlatform);
		this.opponent = new MN.Opponent(this.game, opponentPlatform, heroPlatform);

		this.hero.addTarget(this.opponent);
		this.opponent.addTarget(this.hero);
	},

};