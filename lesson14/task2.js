function a() {


	Array.prototype.join.apply(this, arguments);
}


a(1,2,3,4,5,6,7);