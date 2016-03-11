var typer = (function(param) {

	return {
		isNumber: function(param){return typeof param != "undefined" && typeof param.valueOf() == "number" && !isNaN(param.valueOf())},
		isString: function(param){return typeof param != "undefined" && typeof param.valueOf() == 'string' },
		isArray: function(param){return param instanceof Array},
		isFunction: function(param){return typeof param == "function"},
		isDate: function(param){return param instanceof Date},
		isRegExp: function(param){return param instanceof RegExp	},
		isBoolean: function(param){return typeof param != "undefined" && typeof param.valueOf() == "boolean"},
		isError: function(param){return param instanceof Error}	,
		isNull: function(param){return param === null && typeof param === "object"},
		isUndefined: function(param){return typeof param === "undefined"}
	};
}(null));


console.log(typer.isArray([1,2,3]));