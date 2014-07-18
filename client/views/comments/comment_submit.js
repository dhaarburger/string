
Template.commentSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();
    
    var $body = $(e.target).find('[name=body]');
    var comment = {
      body: $body.val(),
      pageId: template.data._id
    };
    console.log("pageId" + comment.stringId);
    
    Meteor.call('newComment', comment, function(error, commentId) {
      if (error){
        Errors.throw(error.reason);
      } else {
        $body.val('');
      }
    });
  }
});