MN.Spark = function(battler, targets){
	MN.Sprite.call(this, game, battler.x, battler.y, 'spark');

	this.battler = battler;
	this.targets = targets;
	this.speed = 500;
	game.physics.enable(this, Phaser.Physics.ARCADE);

	this.anchor.setTo(0.5,0.5);
};

MN.Spark.prototype = _.extend(Object.create(MN.Sprite.prototype),{
	use: function() {
		game.add.existing(this);
		this.body.velocity.x = this.speed * this.battler.direction;
	},

	update: function() {
		for(var i = 0; i < this.targets.length; i++) {
			game.physics.arcade.collide(this, this.targets[i], this.hitPlayer, null, this);
		}

	},

	hitPlayer: function(object, target) {
		target.takeDamage(1);
		this.kill();
	}
});