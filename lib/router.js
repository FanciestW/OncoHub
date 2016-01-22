Router.configure({layoutTemplate: 'layout'});

Router.route('', {name: "welcome"});
Router.route('/myhome', {name: "home"});
Router.route('/calendar', {name: "calendar"});
Router.route('/medicine', {name: "medicine"});
Router.route('/treatment', {name: "treatment"});
Router.route('/chat', {name: "chat"});