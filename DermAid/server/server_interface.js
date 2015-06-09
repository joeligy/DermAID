Meteor.methods({
	uploadToServer: function(fileName, fileData) {
		// console.log('here');
		// console.log(fileName);
		// console.log(fileData); 
		return Meteor.http.call("POST", "http://52.5.255.83:5000", {
			data: {
				image: {
					filename: fileName,
					file_data: fileData,
				}
			}
		});
	}
});