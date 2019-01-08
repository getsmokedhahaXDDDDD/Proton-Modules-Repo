//////////////////
// CLASSES, ETC //
//////////////////

var Module =  Java.type("me.cpacket.proton.module.Module");
var Category =  Java.type("me.cpacket.proton.module.Module.Category");
var Minecraft =  Java.type("net.minecraft.client.Minecraft");
var Client =  Java.type("CPacket.Despacito.Proton").proton;
var C03PacketPlayer = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
var ArrayList =  Java.type("java.util.ArrayList");
var List = Java.type('java.util.List');
var HashMap =  Java.type("java.util.HashMap");
var File =  Java.type("java.io.File");
var MotionUtils =  Java.type("me.cpacket.proton.util.SpeedUtils");
var GameTimerHook =  Java.type("me.cpacket.proton.util.mc.GameTimerHook");
var settings = Client.setmgr;
var mc = Minecraft.getMinecraft();
var playerInstance = Minecraft.getMinecraft().thePlayer;

/////////////////////
// METHODS, ETC... //
/////////////////////
function setTimerSpeed(timerSpeed) {
  GameTimerHook.timerSpeed = timerSpeed;
}
function setSpeed(speed) {
  MotionUtils.setMoveSpeed(speed);
}
