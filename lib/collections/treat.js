Treatments = new Mongo.Collection("Treatments");

Treatments.attachSchema(new SimpleSchema({

	createdBy: {
		type: String,
		autoValue: function(){ return this.userId }
	},

	treatmentName: {
		type: String,
		label: "Treatment Name",
		optional: false,
		max: 250
	},

	treatmentType: {
		type: String,
		label: "Treatment Type",
		optional: false,
		allowedValues: 
		['Chemotherapy', 'Radiation Therapy', 'Surgery', 'Exam', 'Checkup', 'Other']
	},

	treatmentDate: {
		type: Date,
		label: "Date of Treament",
		optional: false,
		autoform: {
			type: "bootstrap-datepicker"
		}
	},

	treatmentLocation: {
		type: String,
		label: "Location of Treatment",
		optional: true
	},

	treatmentDesc: {
		type: String,
		label: "Description of Treatment",
		optional: true,
		max: 3000
	}

}));