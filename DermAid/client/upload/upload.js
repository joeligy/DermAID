var globalUploadedFile;

Template.upload.rendered = function() {

	var self = this;
	Session.set('selectedFileName', '');

	self.$('.dropdown')
	  .dropdown({
	  })
	;

	self.$('.ui.form')
	  .form({
	    uploadDocFile: {
	      identifier: 'uploadDocFile',
	      rules: [
	        {
	          type: 'empty',
	          prompt: 'Please choose a document to upload'
	        }
	      ]
	    },
	  },{
	  	on: 'submit',
	  	revalidate: true,
	  	inline: true,
	  	onSuccess: function() {

	  		var uploadedFile = globalUploadedFile;
	  		var reader = new FileReader(); 
	  		reader.onload = function(event) {
		  		Meteor.call('uploadToServer', uploadedFile.name, btoa(event.target.result), function(err, data) {
		  			
		  			var resultData = JSON.parse(data.content).results;

		  			var results = [];
		  			for(var i=0; i<3; i++) {
		  				var nextObject = {};
		  				nextObject['type'] = resultData[0][i];
		  				nextObject['confidence'] = resultData[1][i]; 
		  				results.push(nextObject);
		  			}

		  			Session.set('results', results);
		  			console.log(results);
		  			Router.go('results');
		  		});
	  		};
	  		reader.readAsBinaryString(uploadedFile);
	  	}
	});

};

Template.upload.helpers({
	'fileDisplay': function() {
		var selectedFileName = Session.get('uploadFileName');
		if(selectedFileName) {
			return selectedFileName;
		} else {
			return 'Select File';
		}
	}
});

Template.upload.events({
	'change #uploadDocFile': function(event, self) {
		FS.Utility.eachFile(event, function(file) {
			Session.set('uploadFileName', file.name);
			globalUploadedFile = file;
			Session.set('uploadedFile', file);
		});
	}
});