/**
 * Created by Alexandr on 14.01.2016.
 */
var tasksCompleted = {
	'Anna': 29,
	'Serg': 35,
	'Elena': 1,
	'Anton': 99
};
var resultArray =[];


for(name in tasksCompleted){

resultArray.push(tasksCompleted[name])


}

var max = Math.max.apply(null, resultArray);

for(name in tasksCompleted){

	if(max === tasksCompleted[name]){
		console.log(name);
	}
}