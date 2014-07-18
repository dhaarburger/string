Meteor.publish('strings', finction(){
	return Strings.find();
});