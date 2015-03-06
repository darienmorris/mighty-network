MN.HealthBar = function(battler, x, y) {
	this.battler = battler;
	this.x = x;
	this.y = y;
};

MN.HealthBar.prototype = {

	getHealth: function() {
		return this.health.length;
	},

	refresh: function() {
		if(this.getHealth() > this.battler.health) {
			this.removeHealth(this.battler.health);
		}
		else if(this.getHealth() > this.battler.health) {
			this.addHealth(this.battler.health);
		}
	},

	addHealth: function(targetHealth) {
		var difference = targetHealth - this.getHealth();
		for(var i = 0; i < difference; i++) {
			this.health.push(new MN.Health());
		}
	},

	removeHealth: function(targetHealth) {
		var difference = this.getHealth() - targetHealth;
		for(var i = 0; i < difference; i++) {

			if(this.getHealth() > 0) {
				this.health[this.getHealth()-1].kill();
				this.health.pop();
			}
		}
	}
}

MN.Health = function() {

};

MN.Health.prototype = {

}