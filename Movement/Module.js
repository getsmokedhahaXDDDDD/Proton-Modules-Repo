loadWithNewGlobal("https://raw.githubusercontent.com/getsmokedhahaXDDDDD/Proton-Modules-Repo/master/import/Fly.js");
loadWithNewGlobal("https://raw.githubusercontent.com/getsmokedhahaXDDDDD/Proton-Modules-Repo/master/import/Speed.js");
var speed = new SpeedAddon();
var fly = new FlyAddon();
function addMods(modules) {
  modules.add(fly);
  modules.add(speed);
}
function addSettings(setmgr) {
  var list = new ArrayList();
  list.add('Vanilla');
  list.add('Velt');
  list.add('Hypixel');
  fly.addModes(list);
  setmgr.rSetting(new Setting("Speed", fly, 0.493, 0.125, 5.0, false));
  speed.addModes(list);
}
