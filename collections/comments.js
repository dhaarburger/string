Comments = new Meteor.Collection('comments');

Meteor.methods({
	newComment: function(commentAttributes) {
    var user = Meteor.user();
    var page = Pages.findOne(commentAttributes.pageId);
    console.log("comment page: " + commentAttributes.pageId);
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to make comments");
      
    if (!commentAttributes.body)
      throw new Meteor.Error(422, 'Please write some content');
      
    if (!page)
      throw new Meteor.Error(422, 'You must comment on a post');
    
    comment = _.extend(_.pick(commentAttributes, 'pageId', 'body'), {
      userId: user._id,
      pageId: page._id,
      author: user.username,
      submitted: new Date().getTime()
    });


    // update the post with the number of comments
    // Posts.update(comment.postId, {$inc: {commentsCount: 1}});
    // create the comment, save the id
    console.log(comment);
    var commentId = Comments.insert(comment);
    
    // now create a notification, informing the user that there's been a comment
    // createCommentNotification(comment);
    
    return commentId;
  }
});
