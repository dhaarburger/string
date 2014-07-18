Meteor.publish('strings', function(){
	return Strings.find();
});

Meteor.publish('pages', function(){
	return Pages.find();
});