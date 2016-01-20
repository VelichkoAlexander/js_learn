Article.count=0;
function Article() {
	this.created = new Date();
	Article.count++;
	Article.lastdate = this.created;
	Article.showStats = function () {
		console.log('Всего: '+Article.count+' Последняя: '+ Article.lastdate);
	}

}
new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)
