MN.Hero = function(game, platform, opponentPlatform) {
	this.direction = 1;
	this.game = game;
	
	MN.Battler.call(this, game, platform, opponentPlatform);
	this.setupEvents();


};

MN.Hero.prototype = _.extend(Object.create(MN.Battler.prototype), {
	setupEvents: function() {
		upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
		upKey.onDown.add(this.moveUp, this);

		rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
		rightKey.onDown.add(this.moveRight, this);

		downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
		downKey.onDown.add(this.moveDown, this);

		leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
		leftKey.onDown.add(this.moveLeft, this);

		attackKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		attackKey.onDown.add(this.attack, this);
	}

});
