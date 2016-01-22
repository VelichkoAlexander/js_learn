function spread(func, args) {

	return func.apply(null,args);

}

spread(function(x,y){console.log(x+y)}, [1,2]);