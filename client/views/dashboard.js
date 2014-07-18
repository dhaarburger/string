Template.dashboard.helpers({
	// Find strings with appropriate UID
	string: function(){
		// return Strings.find();
		return Strings.find({userId: Meteor.userId()});
		// else return Strings.find();
	},

	stringsOfOthers: function(){
		if(Meteor.userId()) return Strings.find({userId: {$ne :Meteor.userId()}});
		else return Strings.find();
	},

	hasStrings: function(){
		if (Meteor.userId())
			return Strings.find({userId: Meteor.userId()}).count() > 0;
		else return 0;
	}
});
