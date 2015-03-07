var Boot = (function() {
	Boot.prototype = Object.create(Phaser.State.prototype);
    

    function Boot ( game ) {
    	this.game = game;
    }; // constructor
    
    
    Boot.prototype.preload = function ( ) {
    	this.game.load.image('player', 'assets/sprites/player.png');
	    this.game.load.image('tile', 'assets/sprites/tile.png');
	    this.game.load.image('spark', 'assets/sprites/spark.png');
  
    }; // preload
    
    
    Boot.prototype.create = function ( ) {
    	this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.stage.backgroundColor = '#736357';
    	this.game.state.add('Battle', MN.State.Battle);

        this.game.state.start('Battle');
        
    }; // create


    return Boot;
})();

Boot.init = function() {
	// var game = new Phaser.Game(1280,720, Phaser.AUTO, 'mighty-network', {preload: preload, create: create, update: update});
	var game = new Phaser.Game(1280,720, Phaser.AUTO, 'mighty-network');
    game.state.add('Boot', Boot);
	game.state.start('Boot');
}


//game.user = new User();

var MN = {
	State: {}
};

function preload() {
	game.load.image('player', 'assets/sprites/player.png');
    game.load.image('tile', 'assets/sprites/tile.png');
    game.load.image('spark', 'assets/sprites/spark.png');


}

function create() {


	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.stage.backgroundColor = '#736357';

    //  Here we create 3 hotkeys, keys 1-3 and bind them all to their own functions
    game.state.add('Battle', MN.State.Battle);
    game.state.start('Battle');

}

function update() {

}

Boot.init();

