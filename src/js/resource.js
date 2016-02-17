export var res = {
    HelloWorld_png : "assets/HelloWorld.png",
};

export var g_resources = [];
for (var i in res) {
    if (res.hasOwnProperty(i)) {
        g_resources.push(res[i]);
    }
}
