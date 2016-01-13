Meds = new Mongo.Collection("Meds");

MedsSchema = new SimpleSchema({

	"medName": {
		type: String,
		label: "Name of Medicine",
		optional: false
	},

	"medDose": {
		type: Number,
		label: "Medication dosage in mg",
		optional: false
	}
});

Meds.attachSchema(MedsSchema);