
MN.Tile = function(coordinates) {
	this.coordinates = coordinates;
	MN.Sprite.call(this, game, 300+this.coordinates[0]*50, 300+this.coordinates[1]*50, 'tile');
};


MN.Tile.prototype = _.extend(Object.create(MN.Sprite.prototype),{

});