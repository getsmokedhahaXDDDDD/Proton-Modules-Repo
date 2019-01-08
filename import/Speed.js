load("https://raw.githubusercontent.com/getsmokedhahaXDDDDD/Proton-Modules-Repo/master/import/required.js");
var FlyAddon = Java.extend(Module, {
	getName: function() {
		return "VeltRapeXD";
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
		mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.425, mc.thePlayer.posZ, true));
		mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, true));
		mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.425, mc.thePlayer.posZ, true));
	}
});
