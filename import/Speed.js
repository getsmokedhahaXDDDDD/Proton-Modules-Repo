load("required.js");
load("../Test.js");
var SpeedAddon = Java.extend(Module, {
	getName: function() {
		return "SpeedAddon";
	},
    	onEnable: function() {

	},
	onDisable: function() {
		
	},
	move: function(moveEvent) {
		var hack = mc.thePlayer.ticksExisted % 3 == 0;
		if (hack) {
		  setMoveSpeed(1.254);
		}
		else {
		  setMoveSpeed(0.262);
		}
	},
	update: function(motionEvent) 
	{
		if (playerInstance.onGround && playerInstance.isMoving()) {
			playerInstance.motionY = 0.405;
		}
	}
});
function setMoveSpeed(speed) {
	MotionUtils.setMoveSpeed(speed);
}
