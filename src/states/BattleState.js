MN.State.Battle = function(game){
	this.game = game;
};

MN.State.Battle.prototype = {
	preload: function() {

	},

	create: function() {
		//this.player = game.user.getBattler();
		var arena = new MN.Arena(this.game);
	},

	update: function() {

	}

}