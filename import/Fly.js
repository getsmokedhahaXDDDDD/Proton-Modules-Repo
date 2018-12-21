var FlyAddon = Java.extend(Module, {
	getName: function() {
		return "Fly";
	},
	
  	onEnable: function() {
		
	},
	onDisable: function() {
		
	},
	JSInit: function() {
		var list = new ArrayList();
		list.add('Vanilla');
		list.add('Velt');
		list.add('Hypixel');
		this.addModes(list);
		this.addNumberOption("Speed", 0.493, 0.125, 5.0);
		this.setCategory(Category.MOVE);
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
