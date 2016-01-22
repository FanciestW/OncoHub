if(Meteor.isClient){

	Template.chat.helpers({
		msg: function(){
			return Chat.find().fetch().reverse();
		}
	});

	Meteor.subscribe("Chat");
}