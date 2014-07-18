Pages = new Meteor.Collection('pages');

Meteor.methods({
	newPage: function(postAttributes) {
    var user = Meteor.user();    
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post new pages");
    
    // ensure the post has a title
    if (!postAttributes.title)
      throw new Meteor.Error(422, 'Please fill in a title');

  	if (!postAttributes.url)
  		throw new Meteor.Error(422, 'Please enter a url');
    
    
    // pick out the whitelisted keys
    var page = _.extend(_.pick(postAttributes, 'url', 'title', 'stringId'), {
      authorId: user._id, 
      submitted: new Date().getTime()
    });
    
    var pageId = Pages.insert(page);
    
    return pageId;
  },
});