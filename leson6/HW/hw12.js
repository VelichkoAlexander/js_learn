function getVillainName(birthday) {
	var months = ["The Evil",
		"The Vile",
		"The Cruel",
		"The Trashy",
		"The Despicable",
		"The Embarrassing",
		"The Disreputable",
		"The Atrocious",
		"The Twirling",
		"The Orange",
		"The Terrifying",
		"The Awkward"];

	var days = ["Mustache",
		"Pickle",
		"Hood Ornament",
		"Raisin",
		"Recycling Bin",
		"Potato",
		"Tomato",
		"House Cat",
		"Teaspoon",
		"Laundry Basket"];

	var monthStr = months[birthday.getMonth()];

	var day = birthday.getDate();

	var dayStr = days[day.toString().slice(-1)];

	return monthStr+' '+dayStr;

}
var date = new Date(1984,10,18);
console.log(getVillainName(date));
