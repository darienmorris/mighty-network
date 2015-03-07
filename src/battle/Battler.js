/*
*	The Battler holds the base functionality for a user-controlled character in battle.
*	It can move, it has health, it can die, and it can attack.
*	More specific details on *how* it moves or attacks is implemented in the Hero and Opponent classes
*	both of which extend this class.
*/

// TODO: should the battle extend a sprite, or have a sprite as a property?

MN.Battler = function(game, platform, opponentPlatform) {
	MN.Sprite.call(this, game, game.world.randomX, game.world.randomY, 'player');

	this.game = game;

	this.MAX_AMMO = 5;
	this.STARTING_HEALTH = 3;

	this.game.add.existing(this);
	this.game.physics.enable(this, Phaser.Physics.ARCADE);
	this.body.immovable = true;

	this.platform = platform;
	this.opponentPlatform = opponentPlatform;

	this.tile = this.platform.getTile();
	this.moveToTile(this.tile);

	this.anchor.setTo(0.5,0.5);

	this.cards = [];
	this.targets = [];
	this.ammo = 3;
	this.health = this.STARTING_HEALTH;

	this.body.setSize(10,10,-20 * this.direction,0);

	this.game.time.events.loop(Phaser.Timer.SECOND, this.addAmmo, this);

};

MN.Battler.prototype = _.extend(Object.create(MN.Sprite.prototype),{

	moveUp: function() {
		var newTile = [this.tile.coordinates[0], this.tile.coordinates[1]-1];
		this.processMove(newTile);
	},

	moveRight: function() {
		var newTile = [this.tile.coordinates[0]+1, this.tile.coordinates[1]];
		this.processMove(newTile);
	},

	moveDown: function() {
		var newTile = [this.tile.coordinates[0], this.tile.coordinates[1]+1];
		this.processMove(newTile);
	},

	moveLeft: function() {
		var newTile = [this.tile.coordinates[0]-1, this.tile.coordinates[1]];
		this.processMove(newTile);
	},

	processMove: function(newCoordinates) {
		var validTile = this.platform.tryMove(this.tile.coordinates, newCoordinates);
		if(validTile) {
			this.moveToTile(validTile);
			return true;
		}
		return false;
	},

	moveToTile: function(newTile) {
		this.tile = newTile;
		this.x = this.tile.x + this.tile.width/2;
		this.y = this.tile.y + this.tile.height/6;
	},

	useAbility: function(cardIndex) {
		//TODO: set cooldown on using card
		this.cards[cardIndex].use(this.direction, this.platform, this.enemyPlatform);
	},

	addAmmo: function(ammo) {
		var ammo = ammo || 1;

		this.ammo += ammo;

		if(this.ammo > this.MAX_AMMO) this.ammo = this.MAX_AMMO;
	},

	addTarget: function(target) {
		this.targets.push(target);
	},

	takeDamage: function(damage) {
		this.health -= damage;

		if(this.health <= 0) {
			this.kill();
		}
	},

	attack: function() {
		if(this.ammo > 0) {
			var spark = new MN.Spark(this.game, this, this.targets);
			spark.use();
			this.ammo--;
		}
		
	}

});