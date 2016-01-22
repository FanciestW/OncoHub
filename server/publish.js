Meteor.publish('Meds', function(){
  	if(this.userId){
    	return Meds.find({createdBy: this.userId});
  	}
  	else{
    	this.ready();
  	}
});

Meteor.publish('Treatments', function(){
	if(this.userId){
		return Treatments.find({createdBy: this.userId});
	}
	else{
		this.ready();
	}
});

Meteor.publish('Chat', function(){
	return Chat.find({});
});