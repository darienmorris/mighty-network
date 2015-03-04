MN.Hero = function(arena) {
	
	MN.Battler.call(this, arena);
	this.setupEvents();
};

MN.Hero.prototype = _.extend(Object.create(MN.Battler.prototype), {
	setupEvents: function() {
		upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.add(this.moveUp, this);

		rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		rightKey.onDown.add(this.moveRight, this);

		downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		downKey.onDown.add(this.moveDown, this);

		leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		leftKey.onDown.add(this.moveLeft, this);
	}

});
