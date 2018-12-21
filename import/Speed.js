loadWithNewGlobal("https://raw.githubusercontent.com/getsmokedhahaXDDDDD/Proton-Modules-Repo/master/import/required.js");
var SpeedAddon = Java.extend(Module, {
	getName: function() {
		return "Speed";
	},
	JSInit: function() {
		Java.super(SpeedAddon).setCategory(Category.MOVE);
		Java.super(SpeedAddon).addModes("Mode", "Vanilla", "Hypixel", "Mineplex");
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
