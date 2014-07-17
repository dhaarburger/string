Router.configure({
	layoutTemplate: 'layout'
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
});

