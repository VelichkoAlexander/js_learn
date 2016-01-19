var calculator = {
	read: function () {
		this.a = +prompt('enter a', 0);
		this.b = +prompt('enter b', 0);
	},
	sum: function () {
		return this.a + this.b;
	},
	mul: function () {
		return this.a * this.b;
	}

};


