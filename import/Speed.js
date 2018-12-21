load("https://raw.githubusercontent.com/getsmokedhahaXDDDDD/Proton-Modules-Repo/master/import/required.js");
var FlyAddon = Java.extend(Module, {
	getName: function() {
		return "Speed";
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
	update: function(motionEvent) {
		if (playerInstance.onGround && playerInstance.isMoving()) {
        playerInstance.motionY = 0.42;
		}
		MotionUtils.setMoveSpeed(0.4255);
	}
});
