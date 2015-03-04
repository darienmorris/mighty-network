
MN.Tile = function(coordinates) {
	this.coordinates = coordinates;
	MN.Sprite.call(this, game, 300+this.coordinates[0]*100, 300+this.coordinates[1]*100, 'tile');

	game.add.existing(this);
};


MN.Tile.prototype = _.extend(Object.create(MN.Sprite.prototype),{

});