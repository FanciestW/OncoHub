Meteor.publish('Meds', function() {
  if (this.userId) {
  	console.log(this.userId);
    return Meds.find({createdBy: this.userId});
  } else {
    this.ready();
  }
});