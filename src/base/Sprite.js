MN.Sprite = function(game, x, y, key) {
	Phaser.Sprite.call(this, game, x, y, key);
};

MN.Sprite.prototype = Object.create(Phaser.Sprite.prototype);
