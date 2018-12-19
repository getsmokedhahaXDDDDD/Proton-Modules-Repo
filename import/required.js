//////////////////
// CLASSES, ETC //
//////////////////

var Module =  Java.type("CPacket.Despacito.module.Module");
var Category =  Java.type("CPacket.Despacito.module.Module.Category");
var Minecraft =  Java.type("net.minecraft.client.Minecraft");
var Client =  Java.type("CPacket.Despacito.Proton").proton;
var ArrayList =  Java.type("java.util.ArrayList");
var HashMap =  Java.type("java.util.HashMap");
var File =  Java.type("java.io.File");
var MotionUtils =  Java.type("CPacket.Despacito.util.SpeedUtils");
var MotionUtils =  Java.type("CPacket.Despacito.util.mc.GameTimerHook");
var Setting = Java.type("ooo.cpacket.lemongui.settings.Setting");
var settings = Client.setmgr;
var mc = Minecraft.getMinecraft();
var playerInstance = Minecraft.getMinecraft().thePlayer;

/////////////////////
// METHODS, ETC... //
/////////////////////

function addSetting(setting) {
  settings.rSetting(setting);
}

function setTimerSpeed(timerSpeed) {
  GameTimerHook.timerSpeed = timerSpeed;
}
