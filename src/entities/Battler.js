/*
*	The Battler holds the base functionality for a user-controlled character in battle.
*	It can move, it has health, it can die, and it can attack.
*	More specific details on *how* it moves or attacks is implemented in the Hero and Opponent classes
*	both of which extend this class.
*/

// TODO: should the battle extend a sprite, or have a sprite as a property?

MN.Battler = function(arena) {
	MN.Sprite.call(this, game, game.world.randomX, game.world.randomY, 'player');

	game.add.existing(this);

	this.arena = arena;
	this.tile = this.arena.getTile();
	this.moveToTile(this.tile);

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
		var validTile = this.arena.tryMove(this.tile.coordinates, newCoordinates);
		if(validTile) {
			this.moveToTile(validTile);
			return true;
		}
		return false;
	},

	moveToTile: function(newTile) {
		this.tile = newTile;
		this.x = this.tile.x;
		this.y = this.tile.y;
	}

});