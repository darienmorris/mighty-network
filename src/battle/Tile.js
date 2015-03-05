
MN.Tile = function(platform, coordinates) {
	this.coordinates = coordinates;
	var xOffset = 0;
	MN.Sprite.call(this, game, platform.x+this.coordinates[0]*70.5, platform.y+this.coordinates[1]*74, 'tile');

	game.add.existing(this);
};


MN.Tile.prototype = _.extend(Object.create(MN.Sprite.prototype),{

});