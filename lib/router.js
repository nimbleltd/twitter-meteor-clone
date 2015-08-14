Router.configure({
	layoutTemplate: 'base',
	loadingTemplate: 'loading'
});

Router.map(function() {
	this.router('tweetStream', {path: '/'});
	this.route('notifications', {path: '/notifications'});
	this.route('profile', {path: '/profile'});
});
