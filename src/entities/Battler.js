/*
*	The Battler holds the base functionality for a user-controlled character in battle.
*	It can move, it has health, it can die, and it can attack.
*	More specific details on *how* it moves or attacks is implemented in the Hero and Opponent classes
*	both of which extend this class.
*/

// TODO: should the battle extend a sprite, or have a sprite as a property?

MN.Battler = function(game) {
	Phaser.Sprite.call(this, game, game.world.randomX, game.world.randomY, 'player');

	game.add.existing(this);
};

MN.Battler.prototype = Object.create(Phaser.Sprite.prototype);
MN.Battler.prototype.constructor = MN.Battler;


// key1 = game.input.keyboard.addKey(Phaser.Keyboard.UP);
// 	    //key1.onDown.add(onUp, this);

// 	    key2 = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
// 	   // key2.onDown.add(onRight, this);

// 	    key3 = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
// 	    // key3.onDown.add(onDown, this);

// 	    key3 = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
// 	    // key3.onDown.add(onLeft, this);