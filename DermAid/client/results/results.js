Template.results.helpers({
	'results': function() {
		return _.map(Session.get('results'), function(nextResult) {
			nextResult.link = linkMappings[nextResult.type];
			return nextResult;
		});
	},
	'displayType': function(type) {
		return typeMappings[type];
	},
	'displayConfidence': function(confidence) {
		var formattedConfidence = confidence.substring(2,4) + '.' + confidence.substring(4, 5) + ' %';
		if(formattedConfidence.substring(0,1) == '0') {
			formattedConfidence = formattedConfidence.substring(1);
		}
		return formattedConfidence;
	},
});