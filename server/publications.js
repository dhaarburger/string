Meteor.publish('strings', function(){
	return Strings.find();
});

Meteor.publish('pages', function(stringId){
	return Pages.find({stringId: stringId});
});

Meteor.publish('comments', function(pageId){
	return Comments.find({pageId: pageId});
});