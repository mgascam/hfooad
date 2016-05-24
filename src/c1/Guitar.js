var Guitar = function (opts) {
    var obj = {};

    var serialNumber, builder, model,
        type, backWood, topWood, price;

    serialNumber = opts.serialNumber;
    price = opts.price;
    builder = opts.builder;
    model = opts.model;
    type = opts.type;
    backWood = opts.backWood;
    topWood = opts.topWood;

    obj.getSerialNumber = function () {
        return serialNumber;
    };

    obj.getPrice = function () {
        return price;
    };

    obj.setPrice = function (newPrice) {
        price = newPrice;
    };

    obj.getBuilder = function () {
        return builder;
    };

    obj.getModel = function () {
        return model;
    };

    obj.getType = function () {
        return type;
    };

    obj.getBackWood = function () {
        return backWood;
    };

    obj.getTopWood = function () {
        return topWood;
    };

    return obj;
};

module.exports = Guitar;
