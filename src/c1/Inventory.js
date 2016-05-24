var Guitar = require('./Guitar');

var Inventory = function () {
    var obj = {};

    var guitars = [];

    obj.addGuitar = function (opts) {
        var newGuitar = Guitar(opts);
    };

    return obj;
};
