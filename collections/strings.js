Strings = new Meteor.Collection('strings');

Meteor.methods({
	newString: function(postAttributes) {
    var user = Meteor.user();    
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post new stories");
    
    // ensure the post has a title
    if (!postAttributes.title)
      throw new Meteor.Error(422, 'Please fill in a title');
    
    
    // pick out the whitelisted keys
    var string = _.extend(_.pick(postAttributes, 'title', 'description'), {
      userId: user._id, 
    });
    
    var stringId = Strings.insert(string);
    return stringId;
  },
});