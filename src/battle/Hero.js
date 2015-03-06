MN.Hero = function(platform, opponentPlatform) {
	this.direction = 1;
	
	MN.Battler.call(this, platform, opponentPlatform);
	this.setupEvents();


};

MN.Hero.prototype = _.extend(Object.create(MN.Battler.prototype), {
	setupEvents: function() {
		upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		upKey.onDown.add(this.moveUp, this);

		rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
		rightKey.onDown.add(this.moveRight, this);

		downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
		downKey.onDown.add(this.moveDown, this);

		leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
		leftKey.onDown.add(this.moveLeft, this);

		attackKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		attackKey.onDown.add(this.attack, this);
	}

});
