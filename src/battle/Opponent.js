MN.Opponent = function(game, platform, opponentPlatform) {
	this.direction = -1;
	MN.Battler.call(this, game, platform, opponentPlatform);
	this.game = game;
	this.setupEvents();
	this.scale.x *= -1;

	// used to aim spells to the left
};

MN.Opponent.prototype = _.extend(Object.create(MN.Battler.prototype), {
	setupEvents: function() {
		upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.add(this.moveUp, this);

		rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		rightKey.onDown.add(this.moveRight, this);

		downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		downKey.onDown.add(this.moveDown, this);

		leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		leftKey.onDown.add(this.moveLeft, this);

		attackKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SHIFT);
		attackKey.onDown.add(this.attack, this);
	}

});
