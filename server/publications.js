Meteor.publish('strings', function(){
	return Strings.find();
});

Meteor.publish('pages', function(stringId){
	return Pages.find({stringId: stringId});
});