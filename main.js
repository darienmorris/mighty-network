var game = new Phaser.Game(1280,720, Phaser.AUTO, 'mighty-network', {preload: preload, create: create, update: update});
//game.user = new User();

var MN = {
	State: {}
};

function preload() {
	game.load.image('player', 'assets/sprites/player.png');
}

function create() {
	game.stage.backgroundColor = '#736357';

    //  Here we create 3 hotkeys, keys 1-3 and bind them all to their own functions
    game.state.add('Battle', MN.State.Battle);
    game.state.start('Battle');

}

function update() {

}

