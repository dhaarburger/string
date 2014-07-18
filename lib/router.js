Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function(){
		// return [Meteor.subscribe('pages')];
	}
});


// Login Page
LoginController = RouteController.extend({
	template: 'login'
});

DashboardController = RouteController.extend({
	template: 'dashboard'
});

Router.map(function (){
	this.route('login', {
		path: '/login',
		controller: LoginController
	});

	this.route('home', {
		path: '/',
		controller: DashboardController
	})

	this.route('dashboard', {
		path: '/dashboard',
		controller: DashboardController
	})

	// this.route('stringDetail',{
	// 	path:'/string/:_id',
	// 	data: function(){
	// 		return Strings.findOne(this.params._id);
	// 	},
	// 	waitOn: function(){
	// 		return[Meteor.subscribe('pages', this.params._id)];
	// 	}
	// });

	this.route('pageDetail', {
		path:'/string/:stringId/:pageId?',
		template: 'stringDetail',
		data: function(){
			return Strings.findOne(this.params.stringId);
			// return Pages.findOne(this.params.pageId);
		},
		waitOn: function(){
			return [Meteor.subscribe('pages', this.params.stringId), Meteor.subscribe('comments', this.params.pageId)];
		}
	})
});

