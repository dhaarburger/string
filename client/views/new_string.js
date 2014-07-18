Template.newString.events({
	'submit form':function(e){
		e.preventDefault();

		var string = {
	      url: $(e.target).find('[name=url]').val(),
	      title: $(e.target).find('[name=title]').val(),
	      description: $(e.target).find('[name=message]').val()
	    }

	    Meteor.call('newString', string, function(error, id){
	      if(error){
	        Errors.throw(error.reason);
	        if (error.error === 302) Router.go('dashboard');
	      }
	      else Router.go('pageDetail', {stringId:id});
	    });

	}

});

