var Module =  Java.type("CPacket.Despacito.module.Module");
var Category =  Java.type("CPacket.Despacito.module.Module.Category");
var Minecraft =  Java.type("net.minecraft.client.Minecraft");
var Client =  Java.type("CPacket.Despacito.Proton").proton;
var MotionUtils =  Java.type("CPacket.Despacito.util.SpeedUtils");
var MotionUtils =  Java.type("CPacket.Despacito.util.SpeedUtils");
var Setting = Java.type("ooo.cpacket.lemongui.settings.Setting");
var settings = Client.setmgr;
var mc = Minecraft.getMinecraft();
var playerInstance = Minecraft.getMinecraft().thePlayer;
function addSetting(setting) {
  settings.rSetting(setting);
}
