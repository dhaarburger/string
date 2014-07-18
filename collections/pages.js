Pages = new Meteor.Collection('pages');

Meteor.methods({
	newPage: function(postAttributes, stringId) {
    var user = Meteor.user();
    var string = Strings.findOne({_id: stringId}); 
    console.log("in NewPage: stringId:" + stringId + " stringId.userId:" + stringId.userId +" userId:" + user._id);
    if (!string) Meteor.Error(401, "There is no string with that id");
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post new pages");

    if (user._id !== string.userId)
      throw new Meteor.Error(401, "You don't have the permissions to post to this string");
    
    // ensure the post has a title
    if (!postAttributes.title)
      throw new Meteor.Error(422, 'Please fill in a title');

  	if (!postAttributes.url)
  		throw new Meteor.Error(422, 'Please enter a url');

    if (stringId)    
    // pick out the whitelisted keys
    var page = _.extend(_.pick(postAttributes, 'url', 'title', 'stringId'), {
      authorId: user._id, 
      submitted: new Date().getTime()
    });
    
    var pageId = Pages.insert(page);
    
    return pageId;
  },
});