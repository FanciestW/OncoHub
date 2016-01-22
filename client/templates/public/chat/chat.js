if(Meteor.isClient){

	Template.chat.helpers({
		msg: function(){
			return Chat.find();
		}
	});	



	Meteor.subscribe("Chat");
}
$(document).ready(function(){

	var height = 0;
	$('#eachMsg').each(function(i, value){
		height += parseInt($(this).height());
	});

	height += '';

	$('#chatArea').animate({scrollTop: height});

});