var Lexus = {
	isCool: "Hell, Yeah!"
};

function ModelF(type) {

	this.type = type;
}

ModelF.prototype = Lexus;

var car = new ModelF("Sport coupe");

console.log(car.isCool);

console.log(car.type);