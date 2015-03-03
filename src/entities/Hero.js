MN.Hero = (function() {
	MN.Hero.prototype = Object.create(MN.Battler.prototype);

	function MN.Hero() {
		MN.Battler.call(this);
	}

	MN.Hero.prototype.potato = function() {
		
	}
	
	return MN.Hero;
})();