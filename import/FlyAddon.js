load("required.js");
load("../Test.js");
var FlyAddon = Java.extend(Module, {
	getName: function() {
		return "FlyAddon";
	},
	
  	onEnable: function() {
		
	},
	onDisable: function() {
		
	},
	move: function(moveEvent) {
		
	},
	update: function(motionEvent) 
	{
		playerInstance.motionY = 0.0;
		if (playerInstance.movementInput.jump) {
			playerInstance.motionY = 0.4;	
		}
		if (playerInstance.movementInput.sneak) {
			playerInstance.motionY = -0.4;	
		}
	}
});