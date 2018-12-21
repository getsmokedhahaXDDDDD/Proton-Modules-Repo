loadWithNewGlobal("https://raw.githubusercontent.com/getsmokedhahaXDDDDD/Proton-Modules-Repo/master/import/required.js");
loadWithNewGlobal("https://raw.githubusercontent.com/getsmokedhahaXDDDDD/Proton-Modules-Repo/master/Movement/Module.js");
var FlyAddon = Java.extend(Module, {
	getName: function() {
		return "Fly";
	},
	
  	onEnable: function() {
		
	},
	onDisable: function() {
		
	},
	getCategory: function() {
		return Category.MOVE;
	},
	JSInit: function() {
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
		MotionUtils.setMoveSpeed(fly.getDouble("Speed"));
	}
});
