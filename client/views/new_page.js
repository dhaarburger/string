

Template.newPage.events({

	'submit form':function(e, template){
		e.preventDefault();
		var page = {
			url: $(e.target).find('[name=url]').val(),
	      	title: $(e.target).find('[name=title]').val(),
	      	stringId: template.data._id,
		}

		Meteor.call('newPage', page, function(error, id){
			if(error){
				Errors.throw(error.reason);
				if (error.error === 302) Router.go('dashboard');
			} else{
				$(e.target).find('[name=url]').val('');
				$(e.target).find('[name=title]').val('');
			}
			// else Router.go('pageDetail', {_id:id});
		});
	}
});
	