MN.Platform = function(game, x, y, size, isHeroPlatform) {
	this.game = game;
	this.size = size;
	this.x = x;
	this.y = y;
	this.setup();

	if(isHeroPlatform) {
		this.boundaryX = this.x - 100;
	}
	else {
		this.boundaryX = this.x + this.size[0] * 80;
	}


};

MN.Platform.prototype = {

	setup: function() {
		this.initTiles();
	},

	initTiles: function() {
		this.tiles = [];
		for(var i = 0; i < this.size[0]; i++) {
			var row = [];
			for(var j = 0; j < this.size[1]; j++) {
				var tile = new MN.Tile(this.game, this, [i,j]);
				row.push(tile);
			}
			this.tiles.push(row);
		}
	},

	getTile: function(coordinates) {
		var coordinates = coordinates || [0,0];
		return this.tiles[coordinates[0]][coordinates[1]];
	},

	tryMove: function(oldCoordinates, newCoordinates){
		//basic check for being within the grid
		if(newCoordinates[0] < 0 || newCoordinates[0] > 2) return false;
		if(newCoordinates[1] < 0 || newCoordinates[1] > 2) return false;

		return this.getTile(newCoordinates);
	}
};