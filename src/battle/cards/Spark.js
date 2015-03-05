MN.Spark = function(battler){
	MN.Sprite.call(this, game, battler.x-10, battler.y - battler.height/2, 'spark');

	this.battler = battler;

	game.physics.enable(this, Phaser.Physics.ARCADE);
};

MN.Spark.prototype = _.extend(Object.create(MN.Sprite.prototype),{
	use: function() {
		game.add.existing(this);
		this.body.velocity.x = 500;
	},

	update: function() {
		game.physics.arcade.collide(this, game.arena.opponent, this.kill, null, this);

	}
});