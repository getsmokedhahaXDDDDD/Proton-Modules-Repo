loadWithNewGlobal("https://raw.githubusercontent.com/getsmokedhahaXDDDDD/Proton-Modules-Repo/master/import/required.js");
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
		var list = new ArrayList();
		list.add('Vanilla');
		list.add('Velt');
		list.add('Hypixel');
		addModes(FlyAddon, list);
		addSetting(new Setting("Speed", FlyAddon, 0.493, 0.125, 5.0, false));
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
		MotionUtils.setMoveSpeed(this.getDouble("Speed"));
	}
});
