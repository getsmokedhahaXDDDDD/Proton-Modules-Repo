load("import/Fly.js");
load("import/required.js");
load("import/Speed.js");
function addMods(modules) {
	modules.add(new SpeedAddon());
	modules.add(new FlyAddon());
}
