Router.configure({layoutTemplate: 'layout'});

Router.route('', {name: "welcome"});
Router.route('/myhome', {name: "home"});
Router.route('/schedule', {name: "schedule"});